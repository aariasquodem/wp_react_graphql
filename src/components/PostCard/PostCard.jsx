import React from "react";
import {Link} from 'react-router-dom';

const PostCard = ({post}) => {
  return <div>
    <Link to={`/post/?id=${post.id}`} target="_blank"><h3>{post.title}</h3></Link>
    <p>{post.excerpt.replace( /(<([^>]+)>)/ig, '').slice(0, -11)}[&hellip;]</p>
    <p>{post.author.node.name}</p>
    <img src={post.featuredImage.node.mediaItemUrl} alt="" />
  </div>;
};

export default PostCard;
