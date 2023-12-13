import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
        resData;
    const { deliveryTime } = resData.sla;

    // console.log(resData);

    return (
        <div
            data-testid="resCard"
            className="m-2 p-2 w-[226px] h-auto hover:border border-solid rounded-2xl hover:shadow-inner hover:bg-amber-100">
            <img
                className="w-56 h-40 rounded-2xl"
                src={CDN_URL + cloudinaryImageId}
                alt="img"
            />
            <h3 className="py-2 font-semibold">{name}</h3>
            <h4 className="pb-1 italic">{cuisines.join(", ")}</h4>
            <h4 className="text-gray-700">{costForTwo}</h4>
            <div className="flex justify-between">
                <h4 className="text-gray-600">⭐{avgRating}</h4>

                {/* <h4 className="text-gray-600 pr-5">{deliveryTime} mins</h4> */}
            </div>
        </div>
    );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const promotedLabels = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
