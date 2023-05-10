import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import InputCheckbox from "../components/InputCheckbox/InputCheckbox";

test("input renders", () => {
    render(<InputCheckbox 
            name="avocado-checkbox" 
            id="avocado-checkbox" 
            label="avocado checkbox"
            disabled={false}
            />);
    const input = screen.getByTestId("avocado-input");
    expect(input).toBeInTheDocument();
})

test("checkbox renders disabled correctly", () => {
    render(<InputCheckbox 
            name="avocado-checkbox" 
            id="avocado-checkbox" 
            label="avocado checkbox"
            disabled={true}
            />);
            const input = screen.getByTestId("avocado-input");
            expect(input).toBeDisabled();
})

    test("clicking input checks it", async () => {
        const user = userEvent.setup();
        render(<InputCheckbox 
            name="avocado-checkbox" 
            id="avocado-checkbox" 
            label="avocado checkbox"
            disabled={false}
            />);
            const input = screen.getByTestId("avocado-input");
    await user.click(input);
    expect(input).toBeChecked();
})