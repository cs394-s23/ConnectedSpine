import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ZipCode from './pages/ZipCode';
import BasicInfo from './pages/TermsAgreement';
import IntroQ2 from './pages/IntroQ2';
import IntroQ3 from './pages/IntroQ3';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="zipcode" element={<ZipCode />}></Route>
        <Route path="termsagreement" element={<BasicInfo />}></Route>
        <Route path="IntroQ2" element={<IntroQ2 />}></Route>
        <Route path="IntroQ3" element={<IntroQ3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
