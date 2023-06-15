import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvocadoTextField from "../components/AvocadoTextField/AvocadoTextField";

test("div renders", () => {
    render(<AvocadoTextField
            name="avocado-text-field" 
            id="avocado-text-field"
            placeholder="Type here"
            />);
    const textFieldDiv = screen.getByTestId("avocado-text-field");
    expect(textFieldDiv).toBeInTheDocument();
})

test("input renders", () => {
    render(<AvocadoTextField
        name="avocado-text-field" 
        id="avocado-text-field"
        placeholder="Type here"
        label="Add label text"
        />);
    const input = screen.getByTestId("avocado-text-input");
    expect(input).toBeInTheDocument();
})

test("label renders", () => {
    render(<AvocadoTextField
        name="avocado-text-field" 
        id="avocado-text-field"
        placeholder="Type here"
        label="Add label text"
        />);
    const label = screen.getByTestId("avocado-label");
    expect(label).toBeInTheDocument();
})