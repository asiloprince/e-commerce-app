import NavBar from "./views/components/NavBar";
import Footer from "./views/components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default App;
