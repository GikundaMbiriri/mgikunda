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
import social from './img/social.png'
import './card.css'
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
            <a href="https://github.com/GikundaMbiriri/task-manager-api" target="blank">view code</a>
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
            image={social}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Social Media app
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             This is an app that allows interaction between its users by chatting on specific topics.
             The data is stored using firebase cloud functions which allows for realtime transmission of data.

              <br />
              <b>Technologies:</b>
              <span>Node.js,Firebase,React,Redux</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <a href="https://github.com/GikundaMbiriri/social" target="blank">view code</a>

          </Button>
          <Button size="small" color="primary">
          <a href="https://mgsocial.netlify.app" target="blank">view demo</a>

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
              Hotel mgt system
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             This is a hotel rooms filter UI .It has an appealing frontend wich ensures that the user gets the best experience.
              <br />
              <b>Technologies:</b>
              <span>React,git</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <a href="https://github.com/GikundaMbiriri/hotel-management-system" target="blank">view code</a>
          </Button>
          <Button size="small" color="primary">
           <a href="https://hotel-rooms-filter.netlify.app/" target="blank">view demo</a>
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
              Blogging App
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            This is a blog that I created to provide counselling to youths on the various issues they are facing in their lives.
            The app will be launched on 30th January 2021.
              <br />
              <b>Technologies:</b>
              <span>Node.js,Firebase,React,Redux</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <a href="https://github.com/GikundaMbiriri/gracie" target="blank">view code</a>
          </Button>
          <Button size="small" color="primary">
          <a href="https://pizzes.netlify.app/" target="blank">view demo</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Mycard;
