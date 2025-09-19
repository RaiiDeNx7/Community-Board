import EventList from "./components/EventList";
import awning from "./assets/awning.png";
import "./index.css";
import truck1 from "./assets/truck1.webp";
import truck2 from "./assets/truck2.png";
import truck3 from "./assets/truck3.webp";
import truck4 from "./assets/truck4.jpg";
import truck5 from "./assets/truck5.jpg";
import truck6 from "./assets/truck6.jpg";
import truck7 from "./assets/truck7.jpg";
import truck8 from "./assets/truck8.jpg";
import truck9 from "./assets/truck9.jpg";
import truck10 from "./assets/truck10.jpg";
import truck11 from "./assets/truck11.jpg";
import truck12 from "./assets/truck12.jpg";

function App() {
  const events = [
    {
      title: "Birria-Landia",
      type: "Mexican",
      image: truck1,
      link: "https://thebirrialandia.com/menu/",
    },
    {
      title: "Mysttik Masala",
      type: "Indian",
      image: truck2,
      link: "https://indianfoodny.com/",
    },
    {
      title: "The Halal Guys",
      type: "Middle Eastern",
      image: truck3,
      link: "https://thehalalguys.com/menu/",
    },
    {
      title: "NY Dosas",
      type: "Vegetarian",
      image: truck4,
      link: "https://nydosas.com/menu/",
    },
    {
      title: "Jerk Pan",
      type: "Jamaican",
      image: truck5,
      link: "https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/",
    },
    {
      title: "Tong",
      type: "Bangladeshi",
      image: truck6,
      link: "https://www.facebook.com/Bangladeshistreetfoods/",
    },
    {
      title: "King Souvlaki of Astoria",
      type: "Greek",
      image: truck7,
      link: "https://kingsouvlakinyc.com/",
    },
    {
      title: "Ling's Sweet Mini Cakes",
      type: "Chinese",
      image: truck8,
      link: "https://canalstreet.market/",
    },
    {
      title: "Uncle Gussy's",
      type: "Greek",
      image: truck9,
      link: "https://unclegussys.com/menus/",
    },
    {
      title: "Patacon Pisao",
      type: "Venezuelan",
      image: truck10,
      link: "https://www.pataconpisaonyc.com/menus/",
    },
    {
      title: "Mom's Mono",
      type: "Tibetan",
      image: truck11,
      link: "https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/",
    },
    {
      title: "Makina Cafe",
      type: "Ethiopian",
      image: truck12,
      link: "https://makinacafenyc.com/",
    },
    
  ];

  return (
    <div className="App">
      <div className="Header">
        <img src={awning} alt="Awning" className="header-image" />
        <h1 className="title">Food Truck Favorites</h1>
      </div>
      <EventList events={events} />
    </div>
  );
}

export default App;
