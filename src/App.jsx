import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";



const App = () => {
  const [blogs,setBlogs] = useState([])

  const allBlogs = async ()=>{
    try {
      const response = await axios.get("http://localhost:3000/api/blogs/allBlogs");
      console.log(response.data.data);
      setBlogs(response.data.data)
    } catch (error) {
      console.error(error);
      setBlogs([])

    }
  }

  useEffect(()=>{
    allBlogs();
  },[])

 
  return (
    <>
    <Navbar/>
    <Outlet/>

    {
      blogs.map((blog)=>{
        return (
          <div key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        )
      })
    }
    
    </>
  );
};

export default App;
