import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NumberSelector from "../components/NumberSelector/NumberSelector";
import { number } from "prop-types";

test("renders", () => {
    render(<NumberSelector 
            name="avocado-number-selector" 
            id="avocado-number-selector" 
            />);
    const numberSelector = screen.getByTestId("avocado-number-selector");
    expect(numberSelector).toBeInTheDocument();
})


test("placeholder text renders", () => {
    render(<NumberSelector
        name="avocado-number-selector" 
        id="avocado-number-selector" 
        placeholder="Type here"
        />);
const numberSelector = screen.getByPlaceholderText("Type here");
expect(numberSelector).toBeInTheDocument();
})

test("typing changes value of input", async() => {
    render(<NumberSelector
        name="avocado-number-selector" 
        id="avocado-number-selector" 
        />);
    const numberSelector = screen.getByTestId("avocado-number-selector");
    await userEvent.type(numberSelector, "1");
    expect(numberSelector).toHaveValue(1);

})

test("able to set max and min", () => {
    render(<NumberSelector
        name="avocado-number-selector" 
        id="avocado-number-selector" 
        max="10"
        min="5"
        />);
    const numberSelector = screen.getByTestId("avocado-number-selector");
    expect(numberSelector).toHaveAttribute("max", "10")
    expect(numberSelector).toHaveAttribute("min", "5")
})

test("Only accepts number input", async() => {
    render(<NumberSelector
        name="avocado-number-selector" 
        id="avocado-number-selector" 
        />);
    const numberSelector = screen.getByTestId("avocado-number-selector");
    await userEvent.type(numberSelector, "hello");
    expect(numberSelector).toHaveValue(null);
})

//TODO: figure out how to press increment and decrement buttons

// test("Does not go above max or below min", async() => {
//     render(<NumberSelector
//         name="avocado-number-selector" 
//         id="avocado-number-selector" 
//         max="5"
//         min="3"
//         />);
//     const numberSelector = screen.getByTestId("avocado-number-selector");
//     await userEvent.tab();
//     await userEvent.keyboard("4");
//     await userEvent.keyboard('{ArrowDown}');
//     await userEvent.keyboard('{ArrowDown}');
//     expect(numberSelector).toHaveValue(3);
//     await userEvent.keyboard('{ArrowUp}');
//     await userEvent.keyboard('{ArrowUp}');
//     await userEvent.keyboard('{ArrowUp}');
//     expect(numberSelector).toHaveValue(5);

// })