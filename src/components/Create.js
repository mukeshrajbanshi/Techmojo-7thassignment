import React,{ useState } from "react"
import axios from "axios";
import {Link} from  "react-router-dom";

function CreateBlog (){
const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: ''
});

function handleChange(e){
    const {name, value} = e.target
    setFormData(prevFromData =>{
        return{
            ...prevFromData,
            [name]: value
        }
    })
}

const handleSubmit = async () =>{
const api = axios.create({
    baseURL: 'http://localhost:3000/products'
   })
let res = await api.post('/', ({
    name: JSON.stringify(""),
    url: JSON.stringify(""),
    description: JSON.stringify(""),
    Headers:{
        "Content-Type": "data/json"
    }
})).then(console.log(res)).catch(console.error())
console.log(res);
}
return(
    <>
        <form method="post" action="http://localhost:3000/products">
            <input type="text" 
                className="input"
                placeholder="Enter Name of blog" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
            /><br />
            <input type="url" 
                className="input"
                placeholder="enter url of image" 
                name="url" 
                value={formData.url}
                onChange={handleChange}
            /><br />           
            <input type="text"
                placeholder="description of blog"
                name="descripton"
                value={formData.description}
                onChange={handleChange}
            /><br />
            <Link to="/createblog">
            <button onClick={handleSubmit}>Submit</button>
            </Link>
            
        </form>
    </>
)
}

export default CreateBlog;