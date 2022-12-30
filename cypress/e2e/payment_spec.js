const { v4: uuid } = require("uuid");

describe("payment", () => {
  it("user can make payment", () => {
    // login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    // check accont balance
    let oldBalance;
    cy.get('[data-test="sidenav-user-balance"]').then(($balance) => (oldBalance = $balance.text()));
    //   .then((balance) => console.log(balance));

    // click on new button
    cy.findByRole("button", { name: /new/i }).click();

    // search for user and click on user
    cy.findByRole("textbox").type("devon becker");

    // click on devon
    cy.findByText(/devon becker/i).click();

    // add amount and note and click pay
    const paymentAmount = "5.00";
    cy.findByPlaceholderText(/amount/i).type(paymentAmount);
    const note = uuid();
    cy.findByPlaceholderText(/add a note/i).type(note);
    cy.findByRole("button", { name: /pay/i }).click();

    // return to transactions
    cy.findByRole("button", { name: /return to transactions/i }).click();

    // go to personal payments tab
    cy.findByRole("tab", { name: /mine/i }).click();

    // click on payment
    // forced b/c element is hidden by the app header (scrolled down a bit)
    // this happens b/c cypress is so fast
    cy.findByText(note).click({ force: true });

    // verify if payment correct payment was made
    cy.findByText(`-$${paymentAmount}`).should("be.visible");
    cy.findByText(note).should("be.visible");

    // verify if payment amount was deducted
    cy.get('[data-test="sidenav-user-balance"]').then(($balance) => {
      const convertedOldBalance = parseFloat(oldBalance.replace(/\$|,/g, ""));
      const convertedNewBalance = parseFloat($balance.text().replace(/\$|,/g, ""));

      // check that diff b/t new and old balances = paymentAmount
      expect(convertedOldBalance - convertedNewBalance).to.equal(parseFloat(paymentAmount));
    });
  });
});
