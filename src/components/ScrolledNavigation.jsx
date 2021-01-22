import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/Dehaze';
import { pink } from '@material-ui/core/colors';

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

    return(
        <>
            <div className={classes.scnav}>
                <ul className={classes.scnavul}>
                    <li>About</li>
                    <li>Events</li>
                    <li>Releases</li>
                    <li>Member</li>
                </ul>
                <Fab className={classes.fab} aria-label="Up">
                    <UpIcon />
                </Fab>
            </div>
        </>
    );
}

export default ScrolledNavigation;

