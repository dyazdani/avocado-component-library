import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RadioGroup from "../components/RadioGroup/RadioGroup";

test("fieldset renders", () => {
    render(<RadioGroup
            />);
    const radioGroup = screen.getByTestId("avocado-radio-group");
    expect(radioGroup).toBeInTheDocument();
})

test("legend renders", () => {
    render(<RadioGroup
            legend="This is a legend"
            />);
    const legend = screen.getByTestId("radio-legend");
    expect(legend).toBeInTheDocument();
})

test("RadioDivs render", () => {
    render(<RadioGroup
            idOne="1"
            idTwo="2"
            idThree="3"
            />);
    
    const radioDivOne = screen.getByTestId("avocado-radio-div-1");
    const radioDivTwo = screen.getByTestId("avocado-radio-div-2");
    const radioDivThree = screen.getByTestId("avocado-radio-div-3");

    expect(radioDivOne).toBeInTheDocument();
    expect(radioDivTwo).toBeInTheDocument();
    expect(radioDivThree).toBeInTheDocument();

})

test("Radio inputs render", async() => {
    render(<RadioGroup
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


});