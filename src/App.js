import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Library from './components/Pages/Library';
import Podcast from './components/Pages/Podcast';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Wrapper from './components/Wrapper';
// import Podcast from './components/Pages/Podcast';
import PopularArtist from './components/Pages/PopularArtist';
import TrendingPlaylist from './components/Pages/TrendingPlaylist';
import FeaturedThisWeek from './components/Pages/FeaturedThisWeek';
import Album from './components/Pages/Album';

function App() {
  return (
    <div className="App">
      <Wrapper>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/library" element={<Library/>} />
        <Route path="/podcast" element={<Podcast/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/podcast" element={<Podcast/>} />
        <Route path="/popularartist" element={<PopularArtist/>} />
        <Route path="/trendingplaylist" element={<TrendingPlaylist/>} />
        <Route path="/featuredthisweek" element={<FeaturedThisWeek/>} />
        <Route path="/album" element={<Album/>} />
      </Routes>
      </BrowserRouter>
      </Wrapper>
      {/* <Home/> */}
    </div>
  );
}

export default App;
