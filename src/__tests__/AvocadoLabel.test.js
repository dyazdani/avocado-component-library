import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvocadoLabel from "../components/AvocadoLabel/AvocadoLabel";

test("label renders", () => {
    render(<AvocadoLabel 
            name="avocado-checkbox" 
            id="avocado-checkbox" 
            label="avocado checkbox"
            checked={false}
            disabled={false}
            />);
    const label = screen.getByTestId("avocado-label");
    expect(label).toBeInTheDocument();
})
