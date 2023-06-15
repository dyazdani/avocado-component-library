import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AvocadoTextInput from "../components/AvocadoTextInput/AvocadoTextInput"

test("text input renders", () => {
    render(<AvocadoTextInput
            name="avocado-text-input" 
            id="avocado-text-input"
            placeholder="Type here"
            />);
    const textField = screen.getByTestId("avocado-text-input");
    expect(textField).toBeInTheDocument();
})

test("placeholder text renders", () => {
    render(<AvocadoTextInput
        name="avocado-text-input" 
        id="avocado-text-input"
        placeholder="Type here"
        />);
const textField = screen.getByPlaceholderText("Type here");
expect(textField).toBeInTheDocument();
})

test("typing changes value of input", async() => {
    render(<AvocadoTextInput
        name="avocado-text-input" 
        id="avocado-text-input"
        placeholder="Type here"
        />);
const textField = screen.getByPlaceholderText("Type here");
await userEvent.type(textField, "Hello");
expect(textField).toHaveValue("Hello");

})