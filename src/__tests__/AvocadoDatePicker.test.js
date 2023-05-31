import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvocadoDatePicker from "../components/AvocadoDatePicker/AvocadoDatePicker";

test("renders", () => {
    render(<AvocadoDatePicker 
            name="avocado-date-picker" 
            required={false}
            />);
    const datePicker = screen.getByTestId("avocado-date-picker");
    expect(datePicker).toBeInTheDocument();
})