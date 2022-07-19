import React from "react";
import {gql, useQuery} from '@apollo/client';
import {CircleLoader} from 'react-spinners';
import PostCard from '../PostCard';

const ALL_POSTS = gql`
query AllPosts {
  posts {
    nodes {
      author {
        node {
          name
          slug
          id
          username
          uri
        }
      }
      id
      title
      excerpt
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
      uri
    }
  }
}
`

const Home = () => {

  const {data, loading, error} = useQuery(ALL_POSTS);

  // console.log(data)
  const paintCards = () => data.posts.nodes.map((post, id)=> <PostCard post={post} key={id}/>)
  

  if(error) return <h2>{error.message}</h2>

  return <>
          {loading
            ? <div className="spinner"><CircleLoader speedMultiplier={0.5} color={'#00857a'}  size={100}/></div>
            : <div>{paintCards()}</div>
            }
        </>
};

export default Home;
