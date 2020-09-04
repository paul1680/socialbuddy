import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import './Top.css'

const useStyles = makeStyles({
    root: {
      height: '200px',
      width: '250px',
      border:'1px solid gray',
      margin: '5px',
      float: 'left',
      backgroundColor:' #f2ccff'
    },
  });

const Top = () => {
    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    const history = useHistory();
    const forClick = (postDetails) => {
      const url = `/Details/${postDetails}`;
      history.push(url)
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>response.json())
        .then(info=>setPosts(info))
    },[]);
    return (
      
      <div className='top'>
        <h1 id='name'><u>Social-Buddy</u></h1>
        {
          posts.map(n=>

        <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              UserId: {n.id}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {n.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={()=>forClick(n.id)} size="small" color="primary">
            Get Details
          </Button>
        </CardActions>
      </Card>
      )
      }
      </div>
    );
};

export default Top;
