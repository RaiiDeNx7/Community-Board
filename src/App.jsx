import EventList from "./components/EventList";
import VSU from "./assets/VSU.png";
import "./index.css";
import game1 from "./assets/game1.webp";
import game2 from "./assets/game2.webp";
import game3 from "./assets/game3.webp";
import game4 from "./assets/game4.webp";
import game5 from "./assets/game5.webp";
import game6 from "./assets/game6.webp";
import game7 from "./assets/game7.webp";
import game8 from "./assets/game8.webp";
import game9 from "./assets/game9.webp";
import game10 from "./assets/game10.webp";
import game11 from "./assets/game11.webp";

function App() {
  const events = [
    {
      title: "@ Barton College",
      type: "August 28th, 7:00 PM",
      image: game1,
      link: "https://govsutrojans.com/news/2025/8/28/football-trojans-dominate-both-sides-of-the-ball-in-season-opening-win-over-bulldogs.aspx",
    },
    {
      title: "@ Norfolk State University",
      type: "September 6th, 6:00 PM",
      image: game2,
      link: "https://govsutrojans.com/news/2025/9/6/football-smith-and-byrd-break-100-receiving-yards-each-in-trojans-34-31-loss-to-norfolk-state.aspx",
    },
    {
      title: "@ Winston-Salem State University",
      type: "September 20th, 1:00 PM",
      image: game3,
      link: "https://theciaasn.com/wssu/",
    },
    {
      title: "@ Fayetteville State University",
      type: "September 27th, 1:00 PM",
      image: game4,
      link: "https://fsubroncos.com/sports/2018/7/30/sportsnetwork.aspx?path=general",
    },
    {
      title: "VS Johnson C. Smith University",
      type: "October 4th, 2:00 PM",
      image: game5,
      link: "https://www.theciaasn.com/vsu/",
    },
    {
      title: "@ Bowie State University",
      type: "October 11th, 1:00 PM",
      image: game6,
      link: "https://govsutrojans.com/sports/football/opponent-history/bowie-state-university/10",
    },
    {
      title: "VS Elizabeth City State University",
      type: "October 18th, 2:00 PM",
      image: game7,
      link: "https://www.theciaasn.com/vsu/",
    },
    {
      title: "VS Bluefield State University",
      type: "October 25th, 2:00 PM",
      image: game8,
      link: "https://www.theciaasn.com/vsu/",
    },
    {
      title: "VS Lincoln University",
      type: "November 1st, 2:00 PM",
      image: game9,
      link: "https://www.theciaasn.com/vsu/",
    },
    {
      title: "@ Virginia Union University",
      type: "November 8th, 1:00 PM",
      image: game10,
      link: "https://govsutrojans.com/sports/football/opponent-history/virginia-union-university/3",
    },
    {
      title: "Central Intercollegiate Athletic Association Championship",
      type: "November 15th, TBA",
      image: game11,
      link: "https://govsutrojans.com/sports/football/opponent-history/central-intercollegiate-athletic-association/102",
    },
  ];

  return (
    <div className="App">
      <div className="Header">
        <img src={VSU} alt="VSU" className="header-image" />
        <h1 className="title">Virginia State Football Schedule</h1>
      </div>
      <EventList events={events} />
    </div>
  );
}

export default App;
