import { expect, test } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";

test("render the app component", () => {
    render(<App />);

    const mainPageHeader = screen.getByText("Vite + React");
    expect(mainPageHeader).toBeInTheDocument();
});
