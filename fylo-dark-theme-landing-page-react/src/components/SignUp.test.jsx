import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "./SignUp";

describe("Signup form", () => {
    beforeEach(() => render(<SignUp />));

    it("render properly", () => {
        expect(screen.getByRole("heading", { name: /get early access today/i }))
            .toBeVisible();
        expect(
            screen.getByText(
                /it only takes a minute to sign up and our free starter tier is extremely generous\. if you have any questions, our support team would be happy to help you\./i
            )
        ).toBeVisible();
        expect(screen.findByRole("button", { name: /get started for free/i }))
            .toBeEnabled;
    });

    it("render error message when user give invalid input", async () => {
        // when the state is invalid
        fireEvent.click(
            screen.getByRole("button", { name: /get started for free/i })
        );

        // await waitFor(() => (screen.getByText(/please enter a valid email address/i)))
        expect(await screen.getByText(/please enter a valid email address/i))
            .toBeVisible;
    });
});
