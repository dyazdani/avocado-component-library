import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import InputRadio from "../components/InputRadio/InputRadio"

test("input renders", () => {
    render(<InputRadio 
            name="avocado-radio" 
            id="avocado-radio"
            value="selection"
            />);
    const radio = screen.getByTestId("avocado-input-radio");
    expect(radio).toBeInTheDocument();
})

test("input is checked when clicked", async () => {
    render(<InputRadio 
            name="avocado-radio" 
            id="avocado-radio"
            value="selection"
            />);
    const radio = screen.getByTestId("avocado-input-radio");
    await userEvent.click(radio);
    expect(radio).toBeChecked();
})