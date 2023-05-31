import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AvocadoTextField from "../components/AvocadoTextField/AvocadoTextField"

test("textfield renders", () => {
    render(<AvocadoTextField
            name="avocado-radio" 
            id="avocado-radio"
            placeholder="Type here"
            />);
    const textField = screen.getByTestId("avocado-text-field");
    expect(textField).toBeInTheDocument();
})

test("placeholder text renders", () => {
    render(<AvocadoTextField
        name="avocado-radio" 
        id="avocado-radio"
        placeholder="Type here"
        />);
const textField = screen.getByPlaceholderText("Type here");
expect(textField).toBeInTheDocument();
})

test("typing changes value of input", async() => {
    render(<AvocadoTextField
        name="avocado-radio" 
        id="avocado-radio"
        placeholder="Type here"
        />);
const textField = screen.getByPlaceholderText("Type here");
await userEvent.type(textField, "Hello");
expect(textField).toHaveValue("Hello");

})