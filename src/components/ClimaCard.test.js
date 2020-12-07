import React from 'react';
import {render} from '@testing-library/react';
import ClimaCard from "./ClimaCard";

describe("ClimaCard", () => {
    it("should render", () => {
    const props = {
        dt_txt: "2020-12-06 18:00:00",
        temp_min: 20,
        temp_max: 22,
        temp_main: 21,
        main: "Clear",
        icon: "01d",
    };
    const { container } = render(<ClimaCard {...props} />);
    expect(container).toMatchSnapshot();
    });
});