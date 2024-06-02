import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Library from './components/Pages/Library';
import Podcast from './components/Pages/Podcast';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Wrapper from './components/Wrapper';
import PopularArtist from './components/Pages/PopularArtist';
import TrendingPlaylist from './components/Pages/TrendingPlaylist';
import FeaturedThisWeek from './components/Pages/FeaturedThisWeek';
import Album from './components/Pages/Album';


function App() {
  return (
    <div className="App">
      {/* // WE USING WRAPPER IN THIS BY WHICH WE WRITE CLEAN AND GOOD CODE INSIDE IT */}
      <Wrapper>
      <BrowserRouter>
      <Routes>
        {/* THESE ARE ALL THE ROUTE WE USED IN THIS WEBPAGE WE ADDED IN THIS WEBPAGE */}
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
      
    </div>
  );
}

export default App;
