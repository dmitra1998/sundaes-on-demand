import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import SummaryForm from "../SummaryForm";

test("Initial Conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  //expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  //expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
