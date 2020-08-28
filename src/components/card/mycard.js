import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import rest1 from "./img/rest1.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Mycard = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <Card
        className={classes.root}
        style={{
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={rest1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Task Manager
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A restful Api that helps track the tasks that have been
              completed,those that are yet to be completed and those that you
              are doing.
              <br />
              <b>Technologies:</b>
              <span>Node.js,Express,Mongodb</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card
        className={classes.root}
        style={{
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={rest1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Task Manager
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A restful Api that helps track the tasks that have been
              completed,those that are yet to be completed and those that you
              are doing.
              <br />
              <b>Technologies:</b>
              <span>Node.js,Express,Mongodb</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card
        className={classes.root}
        style={{
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={rest1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Task Manager
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A restful Api that helps track the tasks that have been
              completed,those that are yet to be completed and those that you
              are doing.
              <br />
              <b>Technologies:</b>
              <span>Node.js,Express,Mongodb</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card
        className={classes.root}
        style={{
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={rest1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Task Manager
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A restful Api that helps track the tasks that have been
              completed,those that are yet to be completed and those that you
              are doing.
              <br />
              <b>Technologies:</b>
              <span>Node.js,Express,Mongodb</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Mycard;
