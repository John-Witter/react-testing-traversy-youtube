# Testing priority list

1. High Value Features - E2E CYPRESS
2. Edge Cases in High Value Features - Integration / Unit REACT TESTING LIBRARY
3. Things that are Easy to Break
4. Basic React Component Testing
   - User interactions
   - Conditional rendering
   - Utils / Hooks

# Unit tests (React Testing Library)

## Test for user interactions and how to check conditional rendering (buttons disabled -> enabled based on whether conditions are met)

## Arrange, Act, Assert

- Arrange: 1st phase of test, arrange things (e.g. render component)

- Act: 2nd phase of test, act (e.g. user events like typing, clicking)

- Assert: 3rd phase of test, assert the desired outcome (e.g. button is disabled on load)

# Integration Tests

## Test multiple units of code which usually results in one larger test

### Think of typical user flows

# End-to-End Tests

# Wrap up

## Always remember why you test

- check that app behaves as expected

## Set Priorities

- get most bang for your buck

- if you find yourself writing a lot of small UNIT TESTS, try to see if you can combine them
into an E2E test -- make a test a to better resemble how a user uses your application