import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Details = () => {

    const{postDetails}= useParams();
    const [detail, setDetail] = useState([]);
    const {id, title, body} = detail;
    

    useEffect(()=>{
        const api = `https://jsonplaceholder.typicode.com/posts/${postDetails}`;
        fetch(api)
        .then(response => response.json())
        .then(info =>setDetail(info))
    },[]);

    const [comment, setComment] = useState([]);
    

    useEffect(() =>{
        const link = `https://jsonplaceholder.typicode.com/comments?postId=2`;
        fetch(link)
        .then(response => response.json())
        .then(info =>setComment(info))
    },[])


    return (
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography component="div"
           style={
               {
                backgroundColor: '#cfe8fc',
                height: '70vh', 
                padding:'15px',
                marginBottom:'20px' 
               }
            }>
            <h1>UserId: {id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            </Typography>
        </Container>
        <Comment></Comment>
      </React.Fragment>

    );
};

export default Details;