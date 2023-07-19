/** @jest-environment jsdom */
import {render} from "@testing-library/react";
import App from "./App";
import React from "react";

test("Should render root app in document", () => {
    render(<App />);
});
