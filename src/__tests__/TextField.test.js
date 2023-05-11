import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TextField from "../components/TextField/TextField"

test("textfield renders", () => {
    render(<TextField
            name="avocado-radio" 
            id="avocado-radio"
            placeholder="Type here"
            />);
    const textField = screen.getByTestId("avocado-text-field");
    expect(textField).toBeInTheDocument();
})

test("placeholder text renders", () => {
    render(<TextField
        name="avocado-radio" 
        id="avocado-radio"
        placeholder="Type here"
        />);
const textField = screen.getByPlaceholderText("Type here");
expect(textField).toBeInTheDocument();
})

test("typing changes value of input", async() => {
    render(<TextField
        name="avocado-radio" 
        id="avocado-radio"
        placeholder="Type here"
        />);
const textField = screen.getByPlaceholderText("Type here");
await userEvent.type(textField, "Hello");
expect(textField).toHaveValue("Hello");

})