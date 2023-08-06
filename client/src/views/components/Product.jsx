import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  Product.propTypes = {
    product: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      numReviews: PropTypes.number.isRequired,
    }).isRequired,
  };

  return (
    <div className="my-3 p-3 rounded shadow-md bg-white">
      <Link to={`/product/${product._id}`}>
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 object-cover rounded-t"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col">
        <Link to={`/product/${product._id}`}>
          <div
            className="text-lg font-semibold mb-2"
            style={{ height: "100px" }}
          >
            <strong>{product.name}</strong>
            <h2 className="text-sm mb-3 opacity-75">{product.author}</h2>
          </div>
        </Link>

        <div className="mt-auto flex justify-center">
          <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            <h3 className="text-xl">₱{product.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
