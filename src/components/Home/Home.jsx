import React from "react";
import {gql, useQuery} from '@apollo/client';
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
            ? <h2>Loading...</h2>
            : <div>{paintCards()}</div>
            }
        </>
};

export default Home;
