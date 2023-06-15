import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AvocadoSelector from "../components/AvocadoSelector/AvocadoSelector";


describe("elements render", () => {
    test("AvocadoSelector renders", () => {
        render(<AvocadoSelector
                />);
        const selector = screen.getByTestId("avocado-selector");
        expect(selector).toBeInTheDocument();
    })

    test("Select renders", () => {
        render(<AvocadoSelector
                />);
        const selector = screen.getByTestId("avocado-select");
        expect(selector).toBeInTheDocument();
    })

    test("label renders", () => {
        render(<AvocadoSelector
                />);
        const label = screen.getByTestId("avocado-label");
        expect(label).toBeInTheDocument();
    })
})

test("selecting and deselecting options works", async () => {
    render(<AvocadoSelector
            valueOne="one"
            valueTwo="two"
            valueThree="three"
            />);
    
    const select = screen.getByTestId('avocado-select')
    
    await userEvent.selectOptions(select, 'one');

    expect(select).toHaveValue('one');
    expect(select).not.toHaveValue('two');
    expect(select).not.toHaveValue('three');

    await userEvent.selectOptions(select, 'two');

    expect(select).not.toHaveValue('one');
    expect(select).toHaveValue('two');
    expect(select).not.toHaveValue('three');






       
})