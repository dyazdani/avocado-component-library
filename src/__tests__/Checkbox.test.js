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
                />);
        const div = screen.getByTestId("avocado-checkbox");
        expect(div).toBeDefined();
    })
})