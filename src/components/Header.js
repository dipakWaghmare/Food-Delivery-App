import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    // Subscrbing to the store using Selector
    const cartItems = useSelector((store) => store.cart.items);

    // console.log(cartItems);

    return (
        <div className="flex justify-between shadow-md">
            <div className="w-40 ">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="flex p-6 m-6 justify-items-center">
                <ul className="flex">
                    <li className="px-4 cursor-pointer">
                        Online Status: {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li className="px-4 hover:text-blue-500">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="px-4 hover:text-blue-500">
                        <Link to={"/About"}>About</Link>
                    </li>
                    <li className="px-4 hover:text-blue-500">
                        <Link to={"/Contact"}>Contact</Link>
                    </li>
                    <li className="px-4 hover:text-blue-500">
                        <Link to={"/grocery"}>Grocery</Link>
                    </li>
                    <li className="pl-4 pr-8 cursor-pointer hover:text-blue-500">
                        <Link to={"/cart"}>Cart ({cartItems.length})</Link>
                    </li>
                    <li className="pl-4 pr-4 cursor-pointer font-semibold">
                        {loggedInUser}
                    </li>
                    <div className="border border-solid shadow-sm border-black bg-white-200 px-4 py-1 rounded-md hover:bg-gray-600 hover:text-white">
                        <button
                            onClick={() => {
                                btnName === "Login"
                                    ? setBtnName("Logout")
                                    : setBtnName("Login");
                            }}>
                            {btnName}
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;
