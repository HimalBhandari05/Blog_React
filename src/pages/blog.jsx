import { useState, useEffect } from "react"
import Card from "./components/card"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import axios from "axios"
import { useBeforeUnload } from "react-router-dom"
import CardDetail from "./components/CardDetail"
import Loading from "./components/Loading"
import SearchPost from "./components/SearchBlog"

function Blog() {
    const [loading, setLoading] = useState(true) // stores the loading status
    const [blogs, setBlogs] = useState([]); // state to store the fetched data 
    const [blog, setBlog] = useState([]); // state to store the fetched data 
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        fetchBlog();
    }, [])

    async function fetchBlog() {
        try {
            setLoading(true)
            const response = await fetch('https://687a74a3abb83744b7eceb2d.mockapi.io/api/v1/blogs', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json()
            setBlog(data)
        }
        catch (error) {
            alert(`There was an error fetching blogs: ${error.message}`);
            console.error('Fetch error:', error);
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap gap-10 p-5">
                {
                    loading ? (
                        <Loading blog={blog} />
                    ) : (
                        blog.map((blg) => {
                            return <Card key={blg.id} blog={blg} />
                        })  // curly braces haalyo vaney chai return garnei parxa.
                    )
                }

                {/* // if(loading){
                    //     <Loading />
                    // }
                    // else{
                    //     blog.map((b)=>{
                    //         return(
                    //         <Card key={b.id} blog={b}/>
                    //     )
                    //     })
                    // }
                } */}
            </div>
            <Footer />
        </>
    )
}

export default Blog