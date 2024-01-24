import { useState, useEffect } from "react";
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const response = await res.json();
                setPosts(response);
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false);
        } 
        fetchData();
    }, []);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => {
    //             setPosts(json);
    //         })
    //         .catch(err => setError(err.message))
    //         .finally(() => setIsLoading(false));
    // }, [])


    if (error) {
        return <h1>Error: { error }</h1>
    }

    return (
        <div>
            <h1>Posts</h1>
            <hr />
            {
                (isLoading) ?
                    <h1>Loading...</h1> :
                    posts.map(item => {
                        return <Post {...item} key={item.id} />
                    })
            }
        </div>
    )
}

export default Posts;