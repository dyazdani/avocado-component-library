import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SelectorDiv from "../components/SelectorDiv/SelectorDiv";


describe("elements render", () => {
    test("SelectorDiv renders", () => {
        render(<SelectorDiv
                />);
        const selectorDiv = screen.getByTestId("avocado-selector-div");
        expect(selectorDiv).toBeInTheDocument();
    })

    test("Selector renders", () => {
        render(<SelectorDiv
                />);
        const selector = screen.getByTestId("avocado-selector");
        expect(selector).toBeInTheDocument();
    })

    test("label renders", () => {
        render(<SelectorDiv
                />);
        const label = screen.getByTestId("avocado-label");
        expect(label).toBeInTheDocument();
    })
})

test("selecting and deselecting options works", async () => {
    render(<SelectorDiv
            valueOne="one"
            valueTwo="two"
            valueThree="three"
            />);
    
    const selector = screen.getByTestId('avocado-selector')
    
    await userEvent.selectOptions(selector, 'one');

    expect(selector).toHaveValue('one');
    expect(selector).not.toHaveValue('two');
    expect(selector).not.toHaveValue('three');

    await userEvent.selectOptions(selector, 'two');

    expect(selector).not.toHaveValue('one');
    expect(selector).toHaveValue('two');
    expect(selector).not.toHaveValue('three');






       
})