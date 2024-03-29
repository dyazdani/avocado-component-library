import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvocadoCheckbox from "./../components/AvocadoCheckbox/AvocadoCheckbox";

describe("container and its components render", () => {
    test("div renders", () => {
        render(<AvocadoCheckbox 
                name="avocado-checkbox" 
                id="avocado-checkbox" 
                label="avocado checkbox"
                checked={false}
                disabled={false}
                />);
        const div = screen.getByTestId("avocado-checkbox");
        expect(div).toBeInTheDocument();
    })
    test("input renders", () => {
        render(<AvocadoCheckbox 
                name="avocado-checkbox" 
                id="avocado-checkbox" 
                label="avocado checkbox"
                checked={false}
                disabled={false}
                />);
        const input = screen.getByTestId("avocado-input");
        expect(input).toBeInTheDocument();
    })
    test("label renders", () => {
        render(<AvocadoCheckbox 
                name="avocado-checkbox" 
                id="avocado-checkbox" 
                label="avocado checkbox"
                checked={false}
                disabled={false}
                />);
        const label = screen.getByTestId("avocado-label");
        expect(label).toBeInTheDocument();
    })
})
  
 