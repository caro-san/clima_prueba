import React from "react";
import { render } from "@testing-library/react";

import ClimaLista from "./ClimaLista";
import response from '../mocks/response.json';

describe("ClimaLista", () => {
    it("should render", () => {
        const weathers = [response.list[0]];
        const { container } = render(<ClimaLista weathers={weathers} />);
        expect(container).toMatchSnapshot();
    });
});
