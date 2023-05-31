import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AvocadoInputRadio from "../components/AvocadoInputRadio/AvocadoInputRadio"

test("input renders", () => {
    render(<AvocadoInputRadio 
            name="avocado-radio" 
            id="avocado-radio"
            value="selection"
            />);
    const radio = screen.getByTestId("avocado-input-radio");
    expect(radio).toBeInTheDocument();
})

test("input is checked when clicked", async () => {
    render(<AvocadoInputRadio 
            name="avocado-radio" 
            id="avocado-radio"
            value="selection"
            />);
    const radio = screen.getByTestId("avocado-input-radio");
    await userEvent.click(radio);
    expect(radio).toBeChecked();
})