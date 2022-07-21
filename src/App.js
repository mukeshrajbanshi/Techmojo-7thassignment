import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';


function App() {
  const [apiData , setApiData] = useState(null);
  const fetchApi = async (() => {
    const result = await axios.get("https://localhost:3004/blogs");
    setApiData(result.data);
  })
  useEffect (() => {
    fetchApi();
  },[]);
  return (
    <div className="App">
     <h1>My Blogs</h1>
     <Link to = {`/posts`}><button>CreateBlogs</button></Link>
     {apiData && apiData.map((data) => {
      return <div key={data.id}>
        <h4>{data.title}</h4>
        <Link to = {`/blog/${data.id}`}>
        <img src= {data.url} alt = {data.title}/>
        </Link>
        <h4>{data.description}</h4>

      </div>
      
     })}
 
    </div>
  );
}

export default App;
