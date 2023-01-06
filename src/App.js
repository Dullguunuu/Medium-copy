import './App.css';
import Navbar from './components/navbar';
import MainSection from './components/mainSection';
import Trending from './components/trending';

const navbar = ["Our story", "Membership", "Write", "Sign in", "Get started"];
const trendingNews = [
  {
    id: "01",
    img: "../src/images/01Barack.png.png",
    text1: "Barack Obama",
    text2: "My 2022 End of Year Lists",
    date: "Dec 23, 2022",
    read: "3 min read"
  },
  {
    id: "02",
    img: require("../src/images/02Natassha.jpeg.png"),
    text1: "Natasha Selvaraj in Towards Data Science",
    text2: "How to Make Money While Learning Data Science in 2023",
    date: "Dec 28, 2022",
    read: "7 min read",
    icon: require("../src/images/star.png")
  },
  {
    id: '03',
    img: require("../src/images/03Maria.png.png"),
    text1: "Maria Milojkovic, MA in Lessons from History",
    text2: "He Used AI to See Today's Looks of The Famous People From the Past",
    date: "Dec 28, 2022",
    read: "10 min read",
    icon: require("../src/images/star.png")
  },
  {
    id: '04',
    img: require("../src/images/04YangZhou.png.png"),
    text1: "Yang Zhou in TechToFreedom",
    text2: "9 Python Built-In Decorators That Optimize Your Code Significantly",
    date: "Jan 1, 2022",
    read: "7 min read",
    con: require("../src/images/star.png")
  },
  {
    id: '05',
    img: require("../src/images/05Hanit.png.png"),
    text1: "Hanif Abdurraqib",
    text2: "100 Favorite Albums of 2022",
    date: "Dec 30, 2022",
    read: "9 min read"
  },
  {
    id: '06',
    img: require("../src/images/06Christopher.jpeg.png"),
    text1: "Christopher Clemmons in Level Up Coding",
    text2: "Structure Your React Project Like a Senior Developer",
    date: "Dec 31, 2022",
    read: "3 min read"
  },
];

function App() {
  return (
    <div>
      <Navbar navbar={navbar} />
      <MainSection />
      <Trending trending={trendingNews} />
      {/* <Posts /> */}
    </div>
  );
}

export default App;
