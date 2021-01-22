import React from 'react';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import VideocamIcon from '@material-ui/icons/Videocam';
import { Button } from '@material-ui/core';

const cuntom_theme = createMuiTheme ( {
  Button:{
  shadows: ["none"]
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
      
    },
  },
  alignItemsAndJustifyContent:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }
}));

export default function SocialIcon() {
  const classes = useStyles();

  return (
    <div className={classes.alignItemsAndJustifyContent}>
        <div className={classes.root}>
          <MuiThemeProvider theme={cuntom_theme}>
            <Button variant="link" size="small" startIcon= {<TwitterIcon color="primary" />} href="https://twitter.com/animetic_ac" />
            <Button variant="link" size="small" startIcon= {<FilterDramaIcon color="secondary" />} href="https://soundcloud.com/animetic_anthemic" />
            <Button variant="link" size="small" startIcon= {<VideocamIcon color="secondary" />} href="https://www.twitch.tv/animetic_anthemic" />
          </MuiThemeProvider>
        </div>
        <>
        </>
    </div>
  );
}

