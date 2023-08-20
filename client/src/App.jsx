import NavBar from "./views/components/NavBar";
import Footer from "./views/components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};
export default App;
