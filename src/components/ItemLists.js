import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemLists = ({ items }) => {
    const dispatch = useDispatch();

    const handleClick = (item) => {
        dispatch(addItems(item));
    };

    // console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div
                    data-testid="foodItems"
                    key={item.card.info.id}
                    className="m-2 p-2 border border-b-2 shadow-sm rounded-sm">
                    <div className="text-sm font-medium font-serif pt-1 pr-4 flex justify-between">
                        <span>{item.card.info.name}</span>
                        <button
                            className="mt-1 px-4 p-1 border border-solid border-green-700 rounded-md shadow-sm text-green-600 hover:bg-green-600 hover:text-white "
                            onClick={() => handleClick(item)}>
                            Add +
                        </button>
                    </div>
                    <div className="text-sm">
                        ₹
                        {item.card.info.price
                            ? item.card.info.price / 100
                            : item.card.info.defaultPrice / 100}
                        {/* <span>{item.card.info.offerTags[0]}</span> */}
                    </div>
                    <div className="flex justify-between py-2 pr-2">
                        <p className="text-xs pt-2 pr-4">
                            {item.card.info.description}
                        </p>

                        <img
                            className="w-24 h-24 rounded-md"
                            src={CDN_URL + item.card.info.imageId}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemLists;
