import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TrackListData from './TrackListData';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Grid from '@material-ui/core/Grid';
import SocialIcon from '../SocialIcon';


const useStyles = makeStyles((theme) => ({
    playerWrapper:{
        position: 'relative',
        width: '100%',
        height: '0',
        paddingBottom: '56.25%',
        overflow: 'hidden',
        marginBottom: '50px'
    },
    listTitle:{
        textAlign: 'center',
        marginBottom: '50px',
        color: '#529ECC',
        fontSize: '17.6px',
        fontSize: '1.1rem'
    },
    sectionContent:{
        display: '-webkit-box',
        display: '-ms-flexbox',
        display: 'flex',
        '-webkit-box-pack': 'center',
        '-ms-flex-pack': 'center',
        'justify-content': 'center'
    },
    player:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0'
    },
    trackList:{
        display: 'table',
        width: 'auto',
        margin: '0',
        padding: '0'
    },
    ol:{
        display: 'block',
        listStyleType: 'decimal',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '70px',
        marginInlineEnd: '0px',
        paddingInlineStart: '40px'
    },
    li:{
            display: 'list-item',
    textAlign: '-webkit-match-parent'
    },
    trackContainer:{
        display: "-webkit-box",
        display: "-ms-flexbox",
        display: "flex",
        listStyle: "none",
        marginBottom: "24px",
        marginBottom: "1.5rem",
        textAlign: 'justify'
    },
    trackNumber:{
        color: '#529ECC',
        marginRight: '1em',
        fontSize: '17.6px',
        fontSize: '1.1rem',
        fontFamily: 'Helvetica Neue, Arial, Helvetica, sans-serif',
        fontWeright: 'bold'
    },
    trackContent:{
        display:'block',
                textAlign: 'justify'
    },
    trackTitle:{
        fontSize: '17.6px',
        fontSize: '1.1rem',
        fontWeight: 'normal'
    },
    trackMeta:{
        display: 'block',
        color: '#999'
    },
    buttonContainer:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainerContainer:{
        marginTop:'30px',
        marginBottom: '30px'
    }
}));

export default function AcNeo () {
    
    const classes = useStyles();

    const trackData = TrackListData;

    return(
    <React.Fragment>
      <CssBaseline />
        <Header />      

            <section className="et-slide">
                <h1>AniCollective Neo</h1>
            </section>
            <div className={classes.playerWrapper}>
                <iframe className={classes.player} src="https://www.youtube.com/embed/7XByf68oksg" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className={classes.listTitle}>
                TRACKLIST
            </div>
            <div className={classes.sectionContent}>
                <ol className={classes.trackList}>
                    {trackData.map((datas, index)=>(            
                        <li className={classes.trackContainer}>
                            <div className={classes.trackNumber}>
                                {trackData[index][0]}
                            </div>
                            <div className={classes.trackContent}>
                                <span className={classes.trackTitle}>
                                {trackData[index][2]}
                                </span>
                                <a className={classes.trackMeta} href={trackData[index][3]} target="_blank" rel="noopener">
                                {trackData[index][1]}
                                </a>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <Grid item xs={12} className={classes.buttonContainerContainer}>
                <Grid container className={classes.buttonContainer}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<GetAppIcon  />}
                        href="https://drive.google.com/file/d/1ysF-Hz1hDGmY4GqgXInJczaYuAkVDi2c/view?usp=sharing"
                        target="_blank"
                        rel="noopener"
                    >
                        DOWNLOAD
                    </Button>
                </Grid>
            </Grid>
        <SocialIcon />
        <Footer/>
    </React.Fragment>
    );
}



