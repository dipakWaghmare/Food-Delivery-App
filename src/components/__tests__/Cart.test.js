import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import Mock_Data from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_Data);
        },
    });
});

it("Should load Restaurant MEnu component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    });

    const accordiansHeader = screen.getByText("Burgers (16)");
    fireEvent.click(accordiansHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(16);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(18); //This Items are ResMenu(16) + Cart(2) = 18

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getByText("Your cart is empty. Add items to the cart!"));
});
