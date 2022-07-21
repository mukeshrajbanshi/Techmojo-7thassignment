import React from 'react'
// import Records from '../db.json'
import axios from 'axios'
import {useEffect,useState} from "react";
import { useParams } from 'react-router-dom';

function Blogs() {
  const [blogData , setBolgData] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState("");
   const {id} = useParams();
  let navigate = useNavigate();
  
  useEffect(() => {
    async () => { 
      const response = await axios.get("https://localhost:3004/blogs/" + id);
      console.log(response.data);
      setBolgData(response.data);

    }
  },[]);

  const handleClick = () => {
    axios.delete("https://localhost:3004/blogs/" + id);
    navigate("/");
  }

  const handleEdit = () => {
    setEdit(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("https://localhost:3004/blogs/" + id, {
      title,
      url,
      description
    });
    navigate("/");
  }

  return (
    <div>
      <h1>Blogs Site</h1>
      <button onClick={() => navigate("/")}>Home</button>

      <img src = {blogData.url} alt = {blogData.title} />

      <div>
      <h4>{blogData.title}</h4>
      <button onClick={handleClick} disabled={edit}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
      {edit && <button onClick={setEdit(false)}>Cancel</button>}
      
      {edit && <form onSubmit={handleSubmit} >
        
      <label htmlFor='title'>Title : </label>
      <input type="text" placeholder='enter the title' value={title} onChange = {(e) => setTitle(e.target.value)}/>
      <label htmlFor='url'>URL :</label>
      <input type="url" placeholder = "enter the image url" value={url} onChange = {(e) =>setUrl(e.target.value)}/>
      <label htmlFor='description'>Description :</label>
      <input type="text" placeholder = "enter the description of blog" value={description} onChange = {(e) => setDescription(e.target.value)}/>
      
    </form>}
    </div>
  
    </div>
  )
}

export default Blogs;