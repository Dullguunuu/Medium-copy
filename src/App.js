import './App.css';
import Navbar from './components/navbar';
import MainSection from './components/mainSection';
import Trending from './components/trending';
import Posts from './components/posts';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import Login from './components/subComponents/logIn';
import Admin from './components/subComponents/admin';

const navbar = ["Our story", "Membership", "Write", "Sign in", "Get started"];
const trendingNews = [
  {
    id: "01",
    img: require("../src/images/01Barack.png.png"),
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
    con: require("../src/images/star.png"),
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

const posts = [
  {
    id: "1",
    img: require('../src/images/1large.png.png'),
    head: "Understanding Long Covid",
    title: "We know more now than before, and it’s still alarming",
    date: "Dec 19, 2022",
    isTrending: false,
    category: "",
    key: "Long Covid",
    read: "9 min read",
    createdUser: { Name: "Dr. Tom Frieden", userId: "1", img: require('../src/images/1small.jpeg.png') }
  },
  {
    id: "2",
    img: require('../src/images/2large.png.png'),
    head: "Braiding Past into Future",
    title: "Nican Huehcatlahtolli, a New Futurism",
    date: "Nov 25, 2022",
    isTrending: true,
    category: "",
    key: "Futurism",
    read: "11 min read",
    createdUser: { Name: "David Bowles", userId: "2", img: require('../src/images/2small.jpeg.png') },
    con: require("../src/images/star.png")
  },
  {
    id: "3",
    img: require('../src/images/3large.jpeg.png'),
    head: "Learning to Cope with Estrangement: When Children “Cancel” Their Parents",
    title: "An estranged father reflects on the stigma and surprising prevalence of these family rifts.",
    date: "Aug 21, 2022",
    isTrending: true,
    category: "",
    key: "Parental Alienation",
    read: "6 min read",
    con: require("../src/images/star.png"),
    createdUser: { Name: "Ed Erginziger", userId: "3", img: require('../src/images/3small.jpeg.png') }
  },
  {
    id: "4",
    img: require('../src/images/4large.png.png'),
    head: "ChatGPT Is Having a Thomas Edison Moment",
    title: "Why breakthrough technologies need to be accessible",
    date: "Dec  8, 2022",
    isTrending: false,
    category: "",
    key: "Gpt 3",
    read: "4 min read",
    con: require("../src/images/star.png"),
    createdUser: { Name: "Thomas Smith", userId: "4", img: require('../src/images/4small.jpeg.png') }
  },
  {
    id: "5",
    img: require('../src/images/5large.png.png'),
    head: " Spotify’s Year-End Lists Are the Ultimate Personality Test",
    title: "Why the mass sharing of the music streaming service’s year-end lists is uniquely telling",
    date: "Dec 6, 2022",
    isTrending: false,
    category: "",
    key: "Music",
    read: "3 min read",
    con: require("../src/images/star.png"),
    createdUser: { Name: "Allegra Hobbs", userId: "5", img: require('../src/images/5small.jpeg.png') }
  },
  {
    id: "6",
    img: require('../src/images/6large.png.png'),
    head: "Why Yours/2large.png.png Team Needs a Weekly Metrics Review",
    title: "What is it, how you can start, and why it will make your product team much better builders and collaborators.",
    date: "Nov 30, 2022",
    isTrending: false,
    category: "",
    key: "Data",
    read: "7 min read",
    con: require("../src/images/star.png"),
    createdUser: { Name: "Julie Zhuo", userId: "6", img: require('../src/images/6small.jpeg.png') }
  },
  {
    id: "7",
    img: require('../src/images/7large.png.png'),
    head: "Tyrion Lannister and The 7 Habits of Highly Effective People",
    title: "A Game of Thrones-themed synopsis of The 7 Habits of Highly Effective People",
    date: "Dec 2, 2022",
    isTrending: false,
    category: "",
    key: "Game of Thrones",
    read: "14 min read",
    createdUser: { Name: "Elliot Graebert", userId: "7", img: require('../src/images/7small.jpeg.png') }
  },
  {
    id: "8",
    img: require('../src/images/8large.jpeg.png'),
    head: "Microdosing, Mastodon, and Jonah Hill.",
    title: "Seeking peace, finding kindness.",
    date: "Nov 30, 2022",
    isTrending: false,
    category: "",
    key: "Mental Health",
    read: "6 min read",
    con: require("../src/images/star.png"),
    createdUser: { Name: "Mindy Stern", userId: "8", img: require('../src/images/8small.png.png') }
  },
  {
    id: "9",
    img: require('../src/images/9large.jpeg.png'),
    head: "What if failure is the plan?",
    title: "I’ve been thinking a lot about failure lately. Failure comes in many forms, but I’m especially interested in situations in which people…",
    date: "Dec 5, 2022",
    isTrending: false,
    category: "",
    key: "Twitter",
    read: "14 min read",
    createdUser: { Name: "danah boyd", userId: "9", img: require('../src/images/9small.jpeg.png') }
  },
  {
    id: "10",
    img: require('../src/images/10large.png'),
    head: "Why are there so many Web3 startups?",
    title: "This week, Pitchbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment activity amongst the…",
    date: "Dec 4, 2022",
    isTrending: false,
    category: "",
    key: "Web 3",
    read: "6 min read",
    createdUser: { Name: "Eric Feng", userId: "10", img: require('../src/images/10small.png.png') }
  },
  {
    id: "11",
    img: require('../src/images/11large.jpeg.png'),
    head: "What Mars/2large.png.pngriage Means to Me",
    title: "After dropping the kids off, I came home and stopped in the kitchen to take in the aftermath of our chaotic morning together. And it got me…",
    date: "Nov 29, 2022",
    isTrending: false,
    category: "",
    key: "Parenting",
    read: "3 min read",
    createdUser: { Name: "Chasten Buttigieg", userId: "11", img: require('../src/images/11small.jpeg.png') }
  },
]

function App() {

  const [admin, setAdmin] = useState(false)
  return (
    <div>
      {!admin ? (
        <div>
          < Navbar navbar={navbar} setAdmin={setAdmin} />
          <MainSection />
          <Trending trending={trendingNews} />
          <Posts posts={posts} />}
        </div>
      ) : (
        <div>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
