import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/layout/Layout';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import OurProduct from './pages/ourProduct/OurProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/'  element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/store' element={<OurProduct/>}/>
          <Route path='/blogs' element={<Blog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
