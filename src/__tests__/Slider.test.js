import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Slider from "../components/Slider/Slider";

test("slider renders", () => {
    render(<Slider 
            name="avocado-slider" 
            id="avocado-slider"
            />);
    const slider = screen.getByTestId("avocado-slider");
    expect(slider).toBeInTheDocument();
})

test("slider slides", () => {
    render(<Slider 
            name="avocado-slider" 
            id="avocado-slider"
            />);
    const slider = screen.getByTestId("avocado-slider");
    fireEvent.change(slider, { target: { value: 15 } });
    expect(slider).toHaveValue("15");
    fireEvent.change(slider, { target: { value: 100 } });
    expect(slider).toHaveValue("100");
});

