import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RadioDiv from "../components/RadioDiv/RadioDiv";

test("div renders", () => {
    render(<RadioDiv
            name="avocado-radio-div" 
            id="avocado-radio-div"
            value="selection"
            label="Add label text"
            />);
    const radioDiv = screen.getByTestId("avocado-radio-div");
    expect(radioDiv).toBeInTheDocument();
})

test("input renders", () => {
    render(<RadioDiv
        name="avocado-radio-div" 
        id="avocado-radio-div"
        value="selection"
        label="Add label text"
        />);
    const input = screen.getByTestId("avocado-input-radio");
    expect(input).toBeInTheDocument();
})

test("label renders", () => {
    render(<RadioDiv
        name="avocado-radio-div" 
        id="avocado-radio-div"
        value="selection"
        label="Add label text"
        />);
    const label = screen.getByTestId("avocado-label");
    expect(label).toBeInTheDocument();
})