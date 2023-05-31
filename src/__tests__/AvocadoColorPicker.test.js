import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvocadoColorPicker from "../components/AvocadoColorPicker/AvocadoColorPicker";

test("renders", () => {
    render(<AvocadoColorPicker 
            />);
    const colorPicker = screen.getByTestId("avocado-color-picker");
    expect(colorPicker).toBeInTheDocument();
})

//TODO: Make the test below work
// test("color changes", () => {
//     render(<AvocadoColorPicker 
//             />);
//     const colorPicker = screen.getByTestId("avocado-color-picker");
//     expect(colorPicker).toBeInTheDocument();
// })