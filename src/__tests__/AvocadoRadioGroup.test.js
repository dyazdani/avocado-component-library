import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AvocadoRadioGroup from "../components/AvocadoRadioGroup/AvocadoRadioGroup";

describe("Elements render", () => {
    test("fieldset renders", () => {
        render(<AvocadoRadioGroup
                />);
        const radioGroup = screen.getByTestId("avocado-radio-group");
        expect(radioGroup).toBeInTheDocument();
    })
    
    test("legend renders", () => {
        render(<AvocadoRadioGroup
                legend="This is a legend"
                />);
        const legend = screen.getByTestId("radio-legend");
        expect(legend).toBeInTheDocument();
    })
    
    test("AvocadoRadioDivs render", () => {
        render(<AvocadoRadioGroup
                idOne="1"
                idTwo="2"
                idThree="3"
                />);
        
        const radioDivOne = screen.getByTestId("avocado-radio-group-item-1");
        const radioDivTwo = screen.getByTestId("avocado-radio-group-item-2");
        const radioDivThree = screen.getByTestId("avocado-radio-group-item-3");
    
        expect(radioDivOne).toBeInTheDocument();
        expect(radioDivTwo).toBeInTheDocument();
        expect(radioDivThree).toBeInTheDocument();
    })
})

    test("Inputs check and uncheck", async() => {
        render(<AvocadoRadioGroup
                idOne="1"
                idTwo="2"
                idThree="3"
                />);
        
        const radios = screen.getAllByRole("radio");
        console.log(radios);
    
        expect(radios[0]).not.toBeChecked();
        expect(radios[1]).not.toBeChecked();
        expect(radios[2]).not.toBeChecked();
    
        await userEvent.click(radios[0]);
        expect(radios[0]).toBeChecked();
    
        await userEvent.click(radios[1]);
        expect(radios[1]).toBeChecked();
    
        await userEvent.click(radios[2]);
        expect(radios[2]).toBeChecked();
    })