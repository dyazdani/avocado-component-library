import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "../components/Button/Button";


test("Button renders enabled", () => {
    render(<Button 
            name="avocado-button" 
            id="avocado-button"
            type="button"
            disabled={false}
            buttonText="Test button"
            />);
    const button = screen.getByTestId("avocado-button");
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();

})

test("Button renders disabled", () => {
    render(<Button 
            name="avocado-button" 
            id="avocado-button"
            type="button"
            disabled={true}
            buttonText="Test button"
            />);
    const button = screen.getByTestId("avocado-button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

})

