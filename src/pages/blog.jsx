import { useState, useEffect } from "react"
import Card from "./components/card"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import axios from "axios"
import { Link, useBeforeUnload } from "react-router-dom"
import CardDetail from "./components/CardDetail"
import Loading from "./components/Loading"
import SearchPost from "./components/SearchBlog"
// import { FaSearch } from "react-icons/fa";


function Blog() {
    const [loading, setLoading] = useState(true) // stores the loading status
    // const [blogs, setBlogs] = useState([]); // state to store the fetched data 
    const [blog, setBlog] = useState([]); // state to store the fetched data 
    // const [selectedBlog, setSelectedBlog] = useState(null);
    const [search, setSearch] = useState("");


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
    const responseData = blog.filter((blg) => {
        return blg.title.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <>
            <Navbar />
            <div className="flex flex-col flex-wrap gap-10 p-5">

                <div id="search-add" className="px-3 flex justify-around items-center">
                    <div className="relative w-full max-w-xl bg-white rounded-full">
                        <input placeholder="e.g. Blog" onChange={(e) => setSearch(e.target.value)} value={search} className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200" type="text" />
                        <button type="submit" className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full  outline-none right-3 top-3 bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7     7 0 11-14 0 7 7 0    0114 0z" />
                            </svg>
                            Search
                        </button>
                    </div>

                    <Link
                        to={{
                            pathname: "/create",
                            search: "?query=string",
                            hash: "#hash",
                        }}
                    >
                        <button class="relative border-2 hover:cursor-pointer border-gray-800 text-gray-800 px-6 py-3 rounded-lg overflow-hidden group">
                            <span class="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
                            <span class="relative z-10 group-hover:text-white">
                                Add
                            </span>
                        </button>

                    </Link>



                </div>


                <div id="blog-content" className="flex flex-wrap gap-5 py-2">
                    {
                        loading ? (
                            <Loading blog={blog} />
                        ) : (
                            responseData.map((blg) => {
                                return <Card key={blg.id} blog={blg} />
                            })  // curly braces haalyo vaney chai return garnei parxa.
                        )
                    }
                </div>

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