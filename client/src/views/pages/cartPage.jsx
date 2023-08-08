import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
// import Message from "../components/Message"
import { addToCart, removeFromCart } from "../../state/slices/cartSlice";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // addtocart
  const addToCartHandler = async (product, quantity) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  // remove books from the cart
  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  // checkout
  const checkOutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-8/12 md:pr-4">
        <h1 className="text-2xl mb-4 mx-4 font-bold p-2">Shopping Cart</h1>
        <Link
          className="inline-block bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-5 mb-5"
          to="/"
        >
          Back
        </Link>
        {cartItems.length === 0 ? (
          <div className="bg-gray-200 p-4 rounded">
            Nothing in here{" "}
            <Link to="/">
              <span className="underline">Shop Now!</span>
            </Link>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item._id} className="py-2">
                <div className="flex items-center">
                  <div className="w-16 md:w-1/6 mx-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="w-1/2 md:w-2/6 mx-2">
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </div>
                  <div className="w-1/6 mx-2">
                    ₱{item.price}{" "}
                    <div className="border-t border-gray-200 mt-4 pt-4 ">
                      <div className="flex items-center">
                        <label htmlFor="quantity" className="mr-2">
                          Qty
                        </label>
                        <select
                          id="quantity"
                          className="border rounded-md px-3 py-2"
                          value={item.quantity}
                          onChange={(e) =>
                            addToCartHandler(item, Number(e.target.value))
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/6"></div>
                  <div className="w-1/6">
                    <button
                      type="button"
                      className="text-red-600 flex justify-center items-center bg-gray-200 rounded-md w-8 h-8 mx-2"
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-full md:w-4/12 mt-4 md:mt-0">
        <div className="bg-white rounded p-4">
          <h2 className="text-lg mb-4">
            Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
          </h2>
          <div className="font-semibold text-xl">
            ₱
            {cartItems
              .reduce((acc, item) => acc + item.quantity * item.price, 0)
              .toFixed(2)}
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white rounded mt-4 w-full py-2 disabled:opacity-50"
            disabled={cartItems.length === 0}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
