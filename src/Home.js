import {useState,useEffect} from 'react';
import BlogList from './bloglist';
import useFetch from './useFetch'
const Home = () => {
    const {data:blogs, isPending, error}=useFetch('http://localhost:5000/blogs')
    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div> }
           {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
        </div>
    );
}

export default Home;