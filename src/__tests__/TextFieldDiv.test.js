import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextFieldDiv from "../components/TextFieldDiv/TextFieldDiv";

test("div renders", () => {
    render(<TextFieldDiv
            name="avocado-radio-div" 
            id="avocado-radio-div"
            placeholder="Type here"
            />);
    const textFieldDiv = screen.getByTestId("avocado-text-field-div");
    expect(textFieldDiv).toBeInTheDocument();
})

test("input renders", () => {
    render(<TextFieldDiv
        name="avocado-radio-div" 
        id="avocado-radio-div"
        placeholder="Type here"
        label="Add label text"
        />);
    const input = screen.getByTestId("avocado-text-field");
    expect(input).toBeInTheDocument();
})

test("label renders", () => {
    render(<TextFieldDiv
        name="avocado-radio-div" 
        id="avocado-radio-div"
        placeholder="Type here"
        label="Add label text"
        />);
    const label = screen.getByTestId("avocado-label");
    expect(label).toBeInTheDocument();
})