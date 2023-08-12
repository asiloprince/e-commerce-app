import { useViewProductDetailsQuery } from "../../state/slices/productsSlice";
import { useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaBook,
  FaBarcode,
  FaGlobeAsia,
  FaBuilding,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookDetailsSlider() {
  const { id: productId } = useParams();
  const { data: product } = useViewProductDetailsQuery(productId);

  // react-slick slider
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
  };

  // format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="mb-10">
      <Slider {...settings} dots={true}>
        <div className="w-full md:w-4/12 p-3 mt-4 flex flex-col items-center">
          <div className="flex flex-row items-center">
            <span className="text-black font-bold text-sm">Print length</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-black font-bold px-2 text-sm">
              <span className="inline-flex items-center p-2">
                <FaBook className="text-2xl" />
              </span>
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-sm inline-flex items-center p-2 ">
              {product.printLength}
            </span>
          </div>
        </div>
        <div className="w-full md:w-4/12 p-3 mt-4 flex flex-col items-center">
          <div className="flex flex-row items-center">
            <span className="text-black font-bold text-sm">Language</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-black font-bold px-2 text-sm">
              <span className="inline-flex items-center p-2">
                <FaGlobeAsia className="text-2xl" />
              </span>
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-sm inline-flex items-center p-2">
              {product.language}
            </span>
          </div>
        </div>
        <div className="w-full md:w-4/12 p-3 mt-4 flex flex-col items-center">
          <div className="flex flex-row items-center">
            <span className="text-black font-bold text-xs">
              Publication Date
            </span>
          </div>
          <span className="text-black font-bold px-2 text-sm">
            <span className="inline-flex items-center p-2">
              <FaCalendarAlt className="text-2xl" />
            </span>
          </span>
          <div className="flex flex-row items-center">
            <span className="text-xs inline-flex items-center p-2 ">
              {formatDate(product.publicationDate)}
            </span>
          </div>
        </div>
        <div className="w-full md:w-4/12 p-3 mt-4 flex flex-col items-center">
          <div className="flex flex-row items-center">
            <span className="text-black font-bold text-sm">Publisher</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-black font-bold px-2 text-sm">
              <span className="inline-flex items-center p-2">
                <FaBuilding className="text-2xl" />
              </span>
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-sm inline-flex items-center p-2">
              {product.publisher}
            </span>
          </div>
        </div>

        <div className="w-full md:w-4/12 p-3 mt-4 flex flex-col items-center">
          <div className="flex flex-row items-center">
            <span className="text-black font-bold text-sm ">ISBN-10</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-black font-bold px-2 text-sm">
              <span className="inline-flex items-center p-2">
                <FaBarcode className="text-2xl" />
              </span>
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-xs inline-flex  p-2">{product.isbn10}</span>
          </div>
        </div>
        <div className="w-full md:w-4/12 p-3 mt-4 flex flex-col items-center">
          <div className="flex flex-row items-center">
            <span className="text-black font-bold text-sm">ISBN-13</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-black font-bold px-2 text-sm">
              <span className="inline-flex p-2">
                <FaBarcode className="text-2xl" />
              </span>
            </span>
          </div>
          <div className="flex flex-row">
            <span className="text-xs inline-flex p-2 ">{product.isbn13}</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default BookDetailsSlider;
