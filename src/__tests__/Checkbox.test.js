import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Checkbox from "./../components/Checkbox/Checkbox";

describe("checkbox renders", () => {
    test("div renders", () => {
        render(<Checkbox 
                name="avocado-checkbox" 
                id="avocado-checkbox" 
                label="avocado checkbox"
                checked={false}
                disabled={false}
                />);
        const div = screen.getByTestId("avocado-checkbox");
        expect(div).toBeDefined();
    })
        test("input renders", () => {
        render(<Checkbox 
                name="avocado-checkbox" 
                id="avocado-checkbox" 
                label="avocado checkbox"
                checked={false}
                disabled={false}
                />);
        const input = screen.getByLabelText("avocado checkbox");
        expect(input).toBeDefined();
    })
    test("label renders", () => {
        render(<Checkbox 
                name="avocado-checkbox" 
                id="avocado-checkbox" 
                label="avocado checkbox"
                checked={false}
                disabled={false}
                />);
        const label = screen.getByText("avocado checkbox");
        expect(label).toBeDefined();
    })
})