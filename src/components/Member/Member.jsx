import { makeStyles } from '@material-ui/core';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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

const useStyles = makeStyles(()=>({

}))

export default function Member () {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div>
                    <section className="et-slide">
                        <h1>Member</h1>
                    </section>
                </div>
                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: '"cfe8fc', height: '100vh' }}>aaaaa</Typography>
                </Container>
            </main>                
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    <img className="footerLogo" src={footerLogo} alt="footerLogo"></img>
                </Typography>
                <Copyright />
            </footer>
        </React.Fragment>
    );
};