import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvocadoButton from "../components/AvocadoButton/AvocadoButton";


test("Avocado Button renders enabled", () => {
    render(<AvocadoButton 
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

test("Avocado Button renders disabled", () => {
    render(<AvocadoButton 
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

