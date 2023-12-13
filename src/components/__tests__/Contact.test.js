import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
    //Helper function in jest

    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // beforeEach(() => {
    //     console.log("Before Each");
    // });

    // afterAll(() => {
    //     console.log("After All");
    // });

    // afterEach(() => {
    //     console.log("After Each");
    // });

    test("Should load contact us page", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it("Should load Button inside Contact component", () => {
        render(<Contact />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });

    test("Should load 2 input boxes of Contact component", () => {
        render(<Contact />);

        const inputBoxes = screen.getAllByRole("textbox");

        // console.log(inputBoxes);

        expect(inputBoxes.length).toBe(2);
    });
});

// Use it/test
