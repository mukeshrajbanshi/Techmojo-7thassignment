import React from 'react'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Blogs from '../containers/Blogs';
import CreateBlogs from './CreateBlogs';
function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path = "/" element = {<App />}>
                <Route path='/posts' element = {<CreateBlogs />} />
                <Route path='/blog/: id' element = {<Blogs />}/>
                </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing