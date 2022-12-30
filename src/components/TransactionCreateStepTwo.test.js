import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// test 1
// test("on initial render, the pay button is disabled", async () => {
//   render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "ajfj" }} />);

//   // test the opposite of what you expect to ensure no strange things are going on
//   //   expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();

// //   expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
// });

// test 2
test("if an amount and note is entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "ajfj" }} />);

  // added from test 1 to create an integrated test from a unit test
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();


  // mimic event where user enters an amount and a note
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();

});
