import { useState } from "react";
import CommentsForm from "./CommentsForm.jsx";
export default function Comment() {
    let [comments, setComments] = useState([
        {username: "samarth", remark: "great post", rating: 5},
    ]);
    const addNewComment = (newComment) => {
        setComments((currComments) => {
            return [...currComments, newComment];
        });
    };

    return (<>
        <div>
            <h2>All Comments </h2>
            {comments.map((comment, index) => (
                <div key={index}>
                    <h3>{comment.username} </h3>
                    <p>{comment.remark}</p>
                    <b>Rating: {comment.rating} </b>
                </div>
            ))}
        </div>
        <hr />
        <hr />
        <CommentsForm addNewComment={addNewComment} />
        </>
    );
    }