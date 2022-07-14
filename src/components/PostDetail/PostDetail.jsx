import React, {useEffect, useState} from "react";
import {gql, useQuery} from '@apollo/client';

const id = window.location.href.split('=')[1];
const POST_DETAIL = gql`
query PostById($id: ID = "${id}") {
  post(id: $id) {
    author {
      node {
        name
        slug
      }
    }
    content
    comments {
      edges {
        node {
          id
          author {
            node {
              name
            }
          }
        }
      }
    }
    title(format: RENDERED)
    featuredImage {
      node {
        mediaItemUrl
        altText
      }
    }
  }
}`

const PostDetail = () => {
  // const id = window.location.href.split('=')[1];
  // console.log(`"${id}"`)
  const [post, setPost] = useState({})
  const {data, loading, error} = useQuery(POST_DETAIL);

  if(error) return <h2>Error: {error.message}</h2>

  if(data) console.log(data);

  return <>
          {loading
            ? <h2>Loading...</h2>
            : <div>
                <h2>{data.post.title}</h2>
                <h5>{data.post.author.node.name}</h5>
                <img src={data.post.featuredImage.node.mediaItemUrl} alt={data.post.featuredImage.node.altText} />
                <p>{data.post.content.replace( /(<([^>]+)>)/ig, '')}</p>
              </div>
            }
        </>
};

export default PostDetail;
