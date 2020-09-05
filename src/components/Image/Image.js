import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Image = () => {

  const classes = useStyles();
  const{postDetails}= useParams();
  const[initial, setInitial] = useState([]);
  const initial1 = initial.slice(1,2)
 


  useEffect(()=>{
      const ap = `https://jsonplaceholder.typicode.com/photos?albumId=${postDetails}`;
      fetch(ap)
      .then(response => response.json())
      .then(info =>setInitial(info))
  },[]);
  return (
   <div>
     {
     initial1.map(n=> 
      <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={n.url} />
    </div>
      )
   }
   </div>
  );
};

export default Image;