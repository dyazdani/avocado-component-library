import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AvocadoInputCheckbox from "../components/AvocadoInputCheckbox/AvocadoInputCheckbox";

test("input renders", () => {
    render(<AvocadoInputCheckbox 
            name="avocado-checkbox" 
            id="avocado-checkbox" 
            label="avocado checkbox"
            disabled={false}
            />);
    const input = screen.getByTestId("avocado-input");
    expect(input).toBeInTheDocument();
})

test("checkbox renders disabled correctly", () => {
    render(<AvocadoInputCheckbox 
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
        render(<AvocadoInputCheckbox 
            name="avocado-checkbox" 
            id="avocado-checkbox" 
            label="avocado checkbox"
            disabled={false}
            />);
            const input = screen.getByTestId("avocado-input");
    await user.click(input);
    expect(input).toBeChecked();
})