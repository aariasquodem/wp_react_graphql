import React from "react";
import {gql, useQuery} from '@apollo/client';
import {CircleLoader} from 'react-spinners';
import AuthorCard from '../AuthorCard';

const ALL_AUTHORS = gql`query AllAuthors {
  users {
    nodes {
      avatar {
        url
      }
      firstName
      lastName
      name
      nickname
      slug
    }
  }
}`

const Author = () => {

  const {data, loading, error} = useQuery(ALL_AUTHORS);

  const paintCards = () => data.users.nodes.map((author, id)=> <AuthorCard author={author} key={id}/>)

  if(error) return <h2>{error.message}</h2>

  return <>
          {loading 
          ? <div className="spinner"><CircleLoader speedMultiplier={0.5} color={'#00857a'}  size={100}/></div>
          : <div>{paintCards()}</div>}
        </>
};

export default Author;
