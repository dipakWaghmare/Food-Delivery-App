import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    // While using selector try to subscribing the small items
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="flex justify-end mr-96">
                <button
                    className="border border-solid shadow-sm border-black bg-white-200 px-4 my-2 rounded-md hover:bg-gray-600 hover:text-white "
                    onClick={handleClearCart}>
                    Clear Cart
                </button>
            </div>
            {cartItems.length === 0 && (
                <h1>Your cart is empty. Add items to the cart!</h1>
            )}
            <div className="mx-auto p-3 border border-gray-300 border-b-[12px] w-6/12 text-left rounded-md cursor-pointer m-2  shadow-sm ">
                <ItemLists items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
