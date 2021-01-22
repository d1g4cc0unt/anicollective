import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from '@material-ui/core';

function Navbar () {
    const classes = navBarStyle();
    return(
    <section className={classes.etHeroTabs}>
        <div className={classes.etHeroTabsContainer}>
          <Link className={classes.etHeroTab} href="about" to="about" smooth={true}>About</Link>
          <Link className={classes.etHeroTab} href="events" to="eventpage" smooth={true}>Events</Link>
          <Link className={classes.etHeroTab} href="releases" to="albumpage"smooth={true}>Releases</Link>
          <Link className={classes.etHeroTab} href="member" to="member" smooth={true}>Member</Link>
        </div>
      </section>
    );
}

const navBarStyleRelative = {
    "etHeroTabs":{

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        position: "relative",
        background: "rgba(0, 0, 0, 0)",
        textAlign: "center",
        padding: "0",
        overflow: "hidden",
        zIndex: "10",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",                    
    },

    "etHeroTabsContainer":{

        display: "flex",
        flexDirection: "row",
        position: "relative",
        bottom: "0",
        width: "100%",
        height: "50px",
        background: "rgb(255, 255, 255)",
    },

    "etHeroTab":{

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
        color: "#000",
        letterSpacing: "0.1rem",
        transition: "all 0.5s ease",
        fontSize: "0.8rem",
        position: "relative",
        "&:hover" :{
            color: "white",
            background: "#ee80e1",
            transition: "all 0.5s ease",
        }
    }
}

const navBarStyle = makeStyles(() => (navBarStyleRelative));

export default Navbar;