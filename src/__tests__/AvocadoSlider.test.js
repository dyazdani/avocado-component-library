import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import AvocadoSlider from "../components/AvocadoSlider/AvocadoSlider";

test("slider renders", () => {
    render(<AvocadoSlider 
            name="avocado-slider" 
            id="avocado-slider"
            />);
    const slider = screen.getByTestId("avocado-slider");
    expect(slider).toBeInTheDocument();
})

test("slider slides", () => {
    render(<AvocadoSlider 
            name="avocado-slider" 
            id="avocado-slider"
            />);
    const slider = screen.getByTestId("avocado-slider");
    fireEvent.change(slider, { target: { value: 15 } });
    expect(slider).toHaveValue("15");
    fireEvent.change(slider, { target: { value: 100 } });
    expect(slider).toHaveValue("100");
});

