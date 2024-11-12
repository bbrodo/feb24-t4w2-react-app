import { expect, test } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserAuthContextProvider } from "../src/contexts/UserAuthContextProvider";

test("render the app component", () => {
    render(<App />);

    const mainPageHeader = screen.getByText("Vite + React");
    expect(mainPageHeader).toBeInTheDocument();
});

test("render the app component with a button that makes a number go up", async () => {
    render(<App />);

    let counterButton = screen.getByTestId("counterButton");

    expect(counterButton).toBeInTheDocument();
    expect(counterButton).toHaveTextContent("count is 0");

    const user = userEvent.setup();

    await user.click(counterButton);

    expect(counterButton).toHaveTextContent("count is 1")
})

test("render app component with jwt on display", async () => {
    render(
        <UserAuthContextProvider>
            <App />
        </UserAuthContextProvider>
    );
    
    let jwtHeader = screen.getByTestId("jwt-header")
    expect(jwtHeader).toHaveTextContent("");

    let signUpButton = screen.getByText("sign up user");

    const user = userEvent.setup();

    await user.click(signUpButton);

    jwtHeader = screen.getByTestId("jwt-header")

    expect(jwtHeader).toHaveTextContent("");
})