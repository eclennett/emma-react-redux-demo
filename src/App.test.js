import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("count increments when pressing +", () => {
	render(<App />);
	expect(screen.getByTestId("count")).toHaveTextContent("count: 8");
	fireEvent.click(screen.getByText("+"));
	expect(screen.getByTestId("count")).toHaveTextContent("count: 9");
});
