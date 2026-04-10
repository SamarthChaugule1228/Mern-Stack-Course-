import { useState } from "react";

export default function LikeButton()
{
    let [isLiked, setIsLiked] = useState(false);
    let toggeledLike =()=> {
        setIsLiked(!isLiked);
    };
    let clicked = () => { console.log("clicked"); };
    let likeStyle = { color: "red" };
    return (
        <p onClick={toggeledLike}>
            { isLiked ?
                (
                        <i className="fa-solid fa-heart" style={likeStyle}></i>
                ) :
                (
                        <i className="fa-regular fa-heart"></i>
                )
            }
        </p>
    );
}