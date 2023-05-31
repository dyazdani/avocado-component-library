import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvocadoRadioDiv from "../components/AvocadoRadioDiv/AvocadoRadioDiv";

test("div renders", () => {
    render(<AvocadoRadioDiv
            name="avocado-radio-div" 
            id="avocado-radio-div"
            value="selection"
            label="Add label text"
            />);
    const radioDiv = screen.getByTestId("avocado-radio-div");
    expect(radioDiv).toBeInTheDocument();
})

test("input renders", () => {
    render(<AvocadoRadioDiv
        name="avocado-radio-div" 
        id="avocado-radio-div"
        value="selection"
        label="Add label text"
        />);
    const input = screen.getByTestId("avocado-input-radio");
    expect(input).toBeInTheDocument();
})

test("label renders", () => {
    render(<AvocadoRadioDiv
        name="avocado-radio-div" 
        id="avocado-radio-div"
        value="selection"
        label="Add label text"
        />);
    const label = screen.getByTestId("avocado-label");
    expect(label).toBeInTheDocument();
})