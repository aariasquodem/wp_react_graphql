import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import PostDetail from '../PostDetail';
import Authors from '../Authors';

const Main = () => {
  return <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post" element={<PostDetail/>}/>
            <Route path="/authors" element={<Authors/>}/>
          </Routes>;
};

export default Main;
