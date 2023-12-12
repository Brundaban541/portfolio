import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Tab from './components/Work';
import Contact from './components/Contact';
 
const App = () => {
  return (
    <div className ='bg-site bg-no-repeat bg-cover snap-y snap-mandatory overflow-hidden scrollbar-thumb-pink-600 scrollbar-thumb-rounded-lg'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Tab />
      <Contact />
    </div>
    
  );
};
export default App;

