import { render, screen } from "@testing-library/react";
import Status from ".";
test("loads status page", async () => {
  render(<Status />);
  expect(screen.getByTestId("status-widget")).toHaveTextContent(
    "Not Delivered"
  );
  expect(screen.getByTestId("deliver")).toHaveTextContent("Deliver");
  expect(screen.getByTestId("not-deliver")).toHaveTextContent("Not Deliver");
  expect(screen.getByTestId("delivery-count")).toHaveTextContent("0");
});
