import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvocadoRadioGroupItem from "../components/AvocadoRadioGroupItem/AvocadoRadioGroupItem";

test("div renders", () => {
    render(<AvocadoRadioGroupItem
            name="avocado-radio-group-item" 
            id="one"
            value="selection"
            label="Add label text"
            />);
    const radioDiv = screen.getByTestId('avocado-radio-group-item-one');
    expect(radioDiv).toBeInTheDocument();
})

test("input renders", () => {
    render(<AvocadoRadioGroupItem
        name="avocado-radio-group-item" 
        id="avocado-radio-group-item"
        value="selection"
        label="Add label text"
        />);
    const input = screen.getByTestId("avocado-input-radio");
    expect(input).toBeInTheDocument();
})

test("label renders", () => {
    render(<AvocadoRadioGroupItem
        name="avocado-radio-group-item" 
        id="avocado-radio-group-item"
        value="selection"
        label="Add label text"
        />);
    const label = screen.getByTestId("avocado-label");
    expect(label).toBeInTheDocument();
})