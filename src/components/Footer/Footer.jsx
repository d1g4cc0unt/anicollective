import { makeStyles } from '@material-ui/core';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import footerLogo from "../../assets/img/acaclogo2.png";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <span></span>
      <span>by Animetic Anthemic 2021</span>
      <span></span>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      height: "auto",
    },
  },
}));

export default function Member () {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />          
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    <img className="footerLogo" src={footerLogo} alt="footerLogo"></img>
                </Typography>
                <Copyright />
            </footer>
        </React.Fragment>
    );
};