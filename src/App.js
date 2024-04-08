import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route , Routes, useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  let route = useRoutes(routes)
  return (
    
    <>
    <Header />
    {route}
    <Footer />
    </>
    
  );
}

export default App;
