import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("McDonald's");

    expect(name).toBeInTheDocument();
});
