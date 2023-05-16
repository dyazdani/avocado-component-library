import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ColorPicker from "../components/ColorPicker/ColorPicker";

test("renders", () => {
    render(<ColorPicker 
            />);
    const colorPicker = screen.getByTestId("avocado-color-picker");
    expect(colorPicker).toBeInTheDocument();
})