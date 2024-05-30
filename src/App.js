import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Library from './components/Pages/Library';
import Podcast from './components/Pages/Podcast';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Wrapper from './components/Wrapper';

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
      </Routes>
      </BrowserRouter>
      </Wrapper>
      {/* <Home/> */}
    </div>
  );
}

export default App;
