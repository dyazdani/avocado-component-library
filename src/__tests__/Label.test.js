import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Label from "../components/Label/Label";

test("label renders", () => {
    render(<Label 
            name="avocado-checkbox" 
            id="avocado-checkbox" 
            label="avocado checkbox"
            checked={false}
            disabled={false}
            />);
    const label = screen.getByTestId("avocado-label");
    expect(label).toBeInTheDocument();
})
