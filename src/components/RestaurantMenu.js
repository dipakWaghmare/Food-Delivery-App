import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) {
        return <Shimmer />;
    }
    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card;

    const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    // console.log(categories);

    return (
        <div className="text-center justify-start">
            <h1 className="font-semibold font-sans text-2xl pt-5">{name}</h1>
            <p className="text-base pt-1 pb-3">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>

            {/* Accordion  */}
            {categories.map((category, index) => (
                // Controlled Component:
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
