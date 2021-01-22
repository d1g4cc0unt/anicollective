import React from 'react'
import Header from './components/Header/Header';
import AlbumPage from './components/Album/AlbumList';
import AlbumList from './components/Album/AlbumList';
import About from './components/About/About';
import Event from './components/EventList/Event';
import SocialIcon from './components/SocialIcon';
import Navbar from './components/Navbar/Navbar';
import Member from './components/Member/Member';
import ScrolledNavigation from './components/ScrolledNavigation';
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core/styles';

const custom_theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Orbitron',
    ].join(','),
    fontSize: 12,
  },
});

function App() {
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
      <div className="member">
        <Member />
      </div>
        <ScrolledNavigation />      
    </div>
    </MuiThemeProvider>
  );
}

export default App;
