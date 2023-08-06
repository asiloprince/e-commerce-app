import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetBooksProductsQuery } from "../../state/slices/productsSlice";

function HomePage() {
  const { data: products, isLoading, error } = useGetBooksProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold ml-4">Featured Books</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4">
              {products.map((product) => (
                <Product key={product._id} product={product} className="my-4" />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
