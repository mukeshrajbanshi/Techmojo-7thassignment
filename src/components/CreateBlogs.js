import React, { useState , useNavigate} from 'react'
import axios from "axios";
function CreateBlogs() {
    const [title, setTitle]  = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    let navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://localhost:3004/blogs", {
            title,
            url,
            description
        }).then(function(response) {
            console.log(response);
            navigate("/");
        }).catch(function(error) {
            console.log(error);
        })
        navigate("/");
    } 


  return (
    <div>
        <h1>Create a Blogs</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title : </label>
            <input type="text" placeholder = "enter the title" value = {title} onChange = {(e) =>setTitle(e.target.value)}/>
            <label htmlFor='url'>URl : </label>
            <input text = "url" placeholder='enter the url of image' value={url} onChange = {(e) =>setUrl(e.target.value)}/>
            <label htmlFor='description'>Description : </label>
            <input  text = "text" placeholder='enter the description of blog'  value={description} onChange= {(e) => setDescription(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreateBlogs