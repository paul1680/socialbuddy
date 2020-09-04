import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Comment.css';

const Comment = () => {
    const{postDetails}= useParams();
    const [comment, setComment] = useState([]);
    console.log(comment);

    useEffect(() =>{
        const link = `https://jsonplaceholder.typicode.com/comments?postId=${postDetails}`;
        fetch(link)
        .then(response => response.json())
        .then(info =>setComment(info))
    },[])

    return (
        <div className='comments'>
            <h2><u>Top Comments</u></h2>
       {
                comment.map(n=>
                    <div className='eachComment'>
                      <h3> name: {n.name}</h3>
                       <h4>email: {n.email}</h4>
                       <p>{n.body}</p>
                    </div>
                
                    )
            }
        </div>
    );
};

export default Comment;