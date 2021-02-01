import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ExpandLessTwoToneIcon from '@material-ui/icons/ExpandLessTwoTone';;
import { pink } from '@material-ui/core/colors';
import { animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles(()=>({
    scnav: {
        position: 'fixed',
        right: '5px',
        bottom: '5px',
        zIndex: '900',
    },
    fab: {
        backgroundColor: pink[300],
        '&:hover':{
            backgroundColor: pink[200],
        }
    },
    scnavul: {
        margin: "auto",
        listStyle: "none",
    }
}));

function ScrolledNavigation () {
    const classes = useStyles();

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return(
        <>
            <div className={classes.scnav}>
                <Fab className={classes.fab} aria-label="Up" onClick={scrollToTop}>
                    <ExpandLessTwoToneIcon  />
                </Fab>
            </div>
        </>
    );
}

export default ScrolledNavigation;

