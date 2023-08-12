import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Rating } from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useViewProductDetailsQuery } from "../../state/slices/productsSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/slices/cartSlice";
import BookDetailsSlider from "../components/BookDetailsSlider";

// fetch product
const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle add to cart
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigate("/cart");
  };

  const {
    data: product,
    isLoading,
    error,
  } = useViewProductDetailsQuery(productId);

  return (
    <>
      <Link
        className="inline-block bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-5 mb-5"
        to="/"
      >
        Back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>
          <Message variant="error">
            {error?.data?.message || error.error}
          </Message>
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 object-cover rounded-t"
              />
            </div>
            <div className="w-full md:w-5/12 p-3">
              <div className="py-3">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <span className="text-sm">by: {product.author} (Author)</span>
              </div>
              <div className="py-3">
                <div className="flex items-center">
                  <span className="text-yellow-500 font-bold">
                    <div className="py-3">
                      {product.rating !== undefined ? (
                        <Rating value={product.rating} />
                      ) : (
                        <Rating value={0} />
                      )}
                    </div>
                  </span>
                  <span className="text-gray-500 ml-2">{`${product.numReviews} reviews`}</span>
                </div>
              </div>
              <div className="py-3">Price: ₱{product.price}</div>
              <div className="py-3 text-sm">
                <strong>Description: </strong> {product.description}
              </div>
              <BookDetailsSlider product={product} />
            </div>

            <div className="w-full md:w-3/12 p-3">
              <div className="bg-white shadow-md rounded-md p-3">
                <div className="py-2">
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="font-semibold">₱{product.price}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-md p-3 mt-4">
                <div className="py-2">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span
                      className={`font-semibold text-${
                        product.countInStock > 0 ? "" : "red"
                      }-500 `}
                    >
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                </div>
                <div className="py-4">
                  {/* quantity */}
                  {product.countInStock > 0 && (
                    <div className="border-t border-gray-200 mt-4 pt-4">
                      <div className="flex items-center">
                        <label htmlFor="quantity" className="mr-2">
                          Quantity
                        </label>
                        <select
                          id="quantity"
                          className="border rounded-md px-3 py-2"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map(
                            (index) => (
                              <option key={index} value={index + 1}>
                                {index + 1}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                  )}

                  <button
                    className={`w-full mt-4 ${
                      product.countInStock === 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white font-semibold py-2 rounded`}
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
