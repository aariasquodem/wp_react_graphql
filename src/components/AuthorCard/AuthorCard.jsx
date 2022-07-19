import React from "react";

const AuthorCard = ({author}) => {

  return <div>
          <img src={author.avatar.url} alt={author.name}/>
          <h4>{author.name}</h4>
          <p>{author.slug}</p>
        </div>;
};

export default AuthorCard;
