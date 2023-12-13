import { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // console.log(data);

    const handleClick = () => {
        setShowIndex();
    };
    return (
        <div>
            <div
                className="mx-auto p-3 border border-gray-300 border-b-[12px] w-6/12 text-left rounded-md cursor-pointer"
                onClick={handleClick}>
                <div className="flex justify-between">
                    <span className="font-medium">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span className="mx-4 shadow-lg">▼</span>
                </div>
                {showItems && <ItemLists items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
