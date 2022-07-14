import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import PostDetail from '../PostDetail';

const Main = () => {
  return <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post" element={<PostDetail/>}/>
          </Routes>;
};

export default Main;
