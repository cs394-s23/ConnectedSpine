import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ZipCode from './pages/ZipCode';
import BasicInfo from './pages/TermsAgreement';
import IntroQ2 from './pages/IntroQ2';
import IntroQ3 from './pages/IntroQ3';
import IntroQ4 from './pages/IntroQ4';
import IntroQ5 from './pages/IntroQ5';
import IntroQ6 from './pages/IntroQ6';
import SymQ1 from './pages/SymQ1';
import SymQ2 from './pages/SymQ2';
import SymQ3 from './pages/SymQ3';
import SymQ4 from './pages/SymQ4';
import SymQ5 from './pages/SymQ5';
import SymQ6 from './pages/SymQ6';
import SymQ7 from './pages/SymQ7';
import SymQ8 from './pages/SymQ8';
import SymQ9 from './pages/SymQ9';
import SymQ10 from './pages/SymQ10';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="zipcode" element={<ZipCode />}></Route>
        <Route path="termsagreement" element={<BasicInfo />}></Route>
        <Route path="IntroQ2" element={<IntroQ2 />}></Route>
        <Route path="IntroQ3" element={<IntroQ3 />}></Route>
        <Route path="IntroQ4" element={<IntroQ4 />}></Route>
        <Route path="IntroQ5" element={<IntroQ5 />}></Route>
        <Route path="IntroQ6" element={<IntroQ6 />}></Route>
        <Route path="SymQ1" element={<SymQ1 />}></Route>
        <Route path="SymQ2" element={<SymQ2 />}></Route>
        <Route path="SymQ3" element={<SymQ3 />}></Route>
        <Route path="SymQ4" element={<SymQ4 />}></Route>
        <Route path="SymQ5" element={<SymQ5 />}></Route>
        <Route path="SymQ6" element={<SymQ6 />}></Route>
        <Route path="SymQ7" element={<SymQ7 />}></Route>
        <Route path="SymQ8" element={<SymQ8 />}></Route>
        <Route path="SymQ9" element={<SymQ9 />}></Route>
        <Route path="SymQ10" element={<SymQ10 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
