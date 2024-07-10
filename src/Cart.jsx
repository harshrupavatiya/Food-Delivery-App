import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.cost);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex justify-center flex-col items-center">
      {cartItems.length > 0 ? (
        <div className="w-6/12">
          <h1 className="text-center font-bold text-4xl my-5">Your Cart</h1>
          <button
            className="relative left-full -translate-x-full px-1 italic underline"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <FoodItem itemCard={cartItems} />
          <div className="flex bg-slate-300 my-6 rounded-lg justify-between items-center">
            <p className="m-2 text-center font-bold text-lg">Total Items - {cartItems.length}</p>
            <button className="m-2 bg-green-200 py-2 px-4 rounded-md font-bold text-xl">Cashout - {total}</button>
          </div>
        </div>
      ) : (
        <div className="my-10 text-center">
          <div className="my-3 text-3xl font-medium">Your Cart is Empty</div>
          <div className=" text-2xl">Please eat something na yrr...🥺</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
