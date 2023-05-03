import './App.css';
import Home from './pages/Home';
import NavBar from './navigation/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ZipCode from './pages/Zipcode';

// const App = () => {
//   return <Home />;
// };

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="zipcode" element={<ZipCode />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
