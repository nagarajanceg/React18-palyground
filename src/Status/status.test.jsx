import { fireEvent, render, screen } from "@testing-library/react";
import Status from ".";
beforeEach(() => {
  render(<Status />);
});
test("loads status page with default values", async () => {
  expect(screen.getByTestId("status-widget")).toHaveTextContent(
    "Not Delivered"
  );
  expect(screen.getByTestId("deliver")).toHaveTextContent("Deliver");
  expect(screen.getByTestId("not-deliver")).toHaveTextContent("Not Deliver");
  expect(screen.getByTestId("delivery-count")).toHaveTextContent("0");
});

test("should update the status widget and increment the counter after Deliver button clicked", async () => {
  fireEvent.click(screen.getByText("Deliver"));
  screen.getByText("Delivered");
  expect(screen.getByTestId("delivery-count")).toHaveTextContent("1");
});

test("should decrement the counter after Not-deliver button clicked", async () => {
  fireEvent.click(screen.getByText("Deliver"));
  fireEvent.click(screen.getByText("Not Deliver"));
  screen.getByText("Not Delivered");
  expect(screen.getByTestId("delivery-count")).toHaveTextContent("0");
});

test("should check not-deliver disabled after the counter reaches 0 and avoid neagtive values", () => {
  fireEvent.click(screen.getByText("Deliver"));
  expect(screen.getByTestId("delivery-count")).toHaveTextContent("1");
  expect(screen.getByText("Not Deliver")).not.toBeDisabled();
  fireEvent.click(screen.getByText("Not Deliver"));
  expect(screen.getByText("Not Deliver")).toBeDisabled();
  expect(screen.getByTestId("delivery-count")).toHaveTextContent("0");
});
