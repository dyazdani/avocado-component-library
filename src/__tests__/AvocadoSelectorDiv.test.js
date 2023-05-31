import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AvocadoSelectorDiv from "../components/AvocadoSelectorDiv/AvocadoSelectorDiv";


describe("elements render", () => {
    test("AvocadoSelectorDiv renders", () => {
        render(<AvocadoSelectorDiv
                />);
        const selectorDiv = screen.getByTestId("avocado-selector-div");
        expect(selectorDiv).toBeInTheDocument();
    })

    test("Selector renders", () => {
        render(<AvocadoSelectorDiv
                />);
        const selector = screen.getByTestId("avocado-selector");
        expect(selector).toBeInTheDocument();
    })

    test("label renders", () => {
        render(<AvocadoSelectorDiv
                />);
        const label = screen.getByTestId("avocado-label");
        expect(label).toBeInTheDocument();
    })
})

test("selecting and deselecting options works", async () => {
    render(<AvocadoSelectorDiv
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