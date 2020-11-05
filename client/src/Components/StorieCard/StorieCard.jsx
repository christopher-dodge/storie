import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../App.css';

const useStyles = makeStyles({
  root: {
    width: 345,
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 140,
    maxHeight: 140,
  },
});

// In CardMedia - Image and title needs to pull from the specific storie image

export default function StorieCard({storie}) {
  const classes = useStyles();

  return (
    <div className="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1241&q=80"
            title="Typewriter"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {storie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This will be the storie summary
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            View More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
