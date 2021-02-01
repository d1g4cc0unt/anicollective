import React from 'react'
import Header from './components/Header/Header';
import AlbumList from './components/Album/AlbumList';
import About from './components/About/About';
import Event from './components/EventList/Event';
import SocialIcon from './components/SocialIcon';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrolledNavigation from './components/ScrolledNavigation';
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

const custom_theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Orbitron',
    ].join(','),
    fontSize: 12,
  },
});



function Root() {
  return (
        <MuiThemeProvider theme={custom_theme}>
          <div className="App">
            <div className="head">
              <Header />
            </div>
            <div>
              <Navbar />
            </div>
            <div className="about">
              <About />
              <SocialIcon />
            </div>
            <div className="eventpage">
              <Event />
            </div>
            <div className="albumpage">
              <AlbumList />
            </div>
            <div className="Footer">
              <Footer />
            </div>
              <ScrolledNavigation />      
          </div>
        </MuiThemeProvider>
  );
}

export default Root;