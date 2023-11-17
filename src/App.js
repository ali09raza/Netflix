import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Firstcontainer from './components/First_container';
import Secndcontainer from './components/Secnd_container';
import Thirdcontainer from './components/Third_container';
import Fourcontainer from './components/Four_container';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <Firstcontainer/>
    <Secndcontainer/>
    <Thirdcontainer/>
    <Fourcontainer/>
    <Questions/>
    <Footer/>  
    </>
  );
}

export default App;
