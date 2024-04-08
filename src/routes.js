import Allproduct from "./Components/AllProduct/Allproduct";
import ProductPopTehran from "./Components/ProductPopTehran/ProductPopTehran";
import BuyTicket from "./Components/BuyTicket/BuyTicket";
import Reservation from "./Components/Reservation/Reservation";
// import PeigiryBuy from "./Components/PeigiryBuy/PeigiryBuy";
import CelebrationMusicFajr from "./Components/CelebrationMusicFajr/CelebrationMusicFajr";
import ConsertSonati from "./Components/ConsertSonati/ConsertSonati";
// import ProductPopCities from "./Components/ProductPopCities/ProductPopCities";
import NotFound from "./Components/NotFound/NotFound";

let routes = [
    { path:"/" ,element :<Allproduct /> },
    { path:"/*" ,element :<NotFound /> },
    { path:"/allProduct", element : <Allproduct /> },
    { path:"/productPopTehran", element:  <ProductPopTehran /> },
    { path:"/buyTicket/:id" ,element : <BuyTicket /> },
    { path:"/reservation", element : <Reservation /> },
    { path:"/celebrationMusicFajr" ,element : <CelebrationMusicFajr /> },
    { path:"/consertSonati", element : <ConsertSonati /> },
]


export default routes