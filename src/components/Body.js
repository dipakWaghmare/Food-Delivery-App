import React, { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard, { promotedLabels } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardsPromoted = promotedLabels(RestaurantCard);
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListOfRestaurants(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );

        // console.log(json);
    };

    const { loggedInUser, setUserName } = useContext(UserContext);

    return onlineStatus === false ? (
        <h3>You are offline, please check your internet connection...</h3>
    ) : listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="flex mx-7 px-6 my-4 py-4">
                <div className="mr-4 pr-4">
                    <input
                        type="text"
                        data-testid="searchInput"
                        className="border border-solid border-black rounded-md"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="mx-2 px-3 border border-solid border-black rounded-md shadow-sm hover:bg-gray-600 hover:text-white"
                        onClick={() => {
                            const filteredRestaurants =
                                listOfRestaurants.filter((res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                                );
                            setFilteredRestaurant(filteredRestaurants);
                        }}>
                        Search
                    </button>
                </div>
                <div>
                    <button
                        className="mx-4 px-4 border border-solid shadow-sm border-black rounded-md  hover:bg-gray-600 hover:text-white"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRatingString > 4
                            );
                            setFilteredRestaurant(filteredList);
                        }}>
                        Top Rated Restaurant
                    </button>
                </div>
                <div>
                    <label>User Name:</label>
                    <input
                        type="text"
                        className="border border-black rounded-md mx-2 px-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-wrap mx-4 px-4 my-1 py-1">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}>
                        {restaurant.promoted ? (
                            <RestaurantCardsPromoted
                                resData={restaurant.info}
                            />
                        ) : (
                            <RestaurantCard resData={restaurant.info} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
