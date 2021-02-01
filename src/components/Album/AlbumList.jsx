import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AlbumListData from "./AlbumListData";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const cards = AlbumListData;

export default function AlbumList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div>
          <section className="et-slide">
              <h1>Releases</h1>
          </section>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {
              cards.map((card,index) => {

                  if (index!==9) {
                    return(
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={AlbumListData[index][3]}
                          title={AlbumListData[index][0]}
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {AlbumListData[index][0]}
                          </Typography>
                          <Typography>
                            released in {AlbumListData[index][1]}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary" href={AlbumListData[index][2]} target="_blank" rel="noopener">
                            LISTEN
                          </Button>
                          <Button size="small" color="primary" href={AlbumListData[index][4]} target="_blank" rel="noopener">
                            DOWNLOAD
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                    )
                  }else if (index===9) {
                    return(
                      <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image={AlbumListData[index][3]}
                            title={AlbumListData[index][0]}
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                              {AlbumListData[index][0]}
                            </Typography>
                            <Typography>
                              released in {AlbumListData[index][1]}
                            </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small" color="primary" component={Link} to="/AniCollective-Neo">
                                MORE
                              </Button>
                            <Button size="small" color="primary" href={AlbumListData[index][4]} target="_blank" rel="noopener">
                              DOWNLOAD
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    )
                  }
                }
              )

            }
          </Grid>
        </Container>

      </main>
    </React.Fragment>
  );
}