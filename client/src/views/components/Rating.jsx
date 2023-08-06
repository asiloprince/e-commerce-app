import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";

export const Rating = ({ value = 0, text }) => {
  Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string,
  };

  return (
    <div className="flex items-center">
      <span className="flex mr-1">
        {value >= 1 ? (
          <FaStar className="text-yellow-500" />
        ) : value > 0.5 ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <FaRegStar className="text-yellow-500" />
        )}
      </span>
      <span className="flex mr-1">
        {value >= 2 ? (
          <FaStar className="text-yellow-500" />
        ) : value > 1.5 ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <FaRegStar className="text-yellow-500" />
        )}
      </span>
      <span className="flex mr-1">
        {value >= 3 ? (
          <FaStar className="text-yellow-500" />
        ) : value > 2.5 ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <FaRegStar className="text-yellow-500" />
        )}
      </span>
      <span className="flex mr-1">
        {value >= 4 ? (
          <FaStar className="text-yellow-500" />
        ) : value > 3.5 ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <FaRegStar className="text-yellow-500" />
        )}
      </span>
      <span className="flex mr-1">
        {value >= 5 ? (
          <FaStar className="text-yellow-500" />
        ) : value > 4.5 ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <FaRegStar className="text-yellow-500" />
        )}
      </span>
      {text && <span className="text-sm font-semibold">{text}</span>}
    </div>
  );
};
