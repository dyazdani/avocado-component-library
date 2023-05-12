import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import DatePicker from "../components/DatePicker/DatePicker";

test("renders", () => {
    render(<DatePicker 
            name="avocado-date-picker" 
            required={false}
            />);
    const datePicker = screen.getByTestId("avocado-date-picker");
    expect(datePicker).toBeInTheDocument();
})