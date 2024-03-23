import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 px-4">
            <h1 className="text-2xl border-b-2 border-gray-400">Blogs : {blogs.length}</h1>
        </div>
    );
};

export default Blogs;