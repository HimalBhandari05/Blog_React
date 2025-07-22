import { useEffect, useState } from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "./Loading"
import DeleteBlog from "./DeleteBlog"
import axios from "axios"

function CardDetail() {
    const [blog, setBlog] = useState([])
    const { id } = useParams();  // this is used to get the dynamic number from the url
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    // For deleting
    async function handleDelete() {
        const response = await axios.delete("https://687a74a3abb83744b7eceb2d.mockapi.io/api/v1/blogs/" + id);
        if (response.status == 200) {
            navigate("/")
            }
        else {
            alert("data not fetched");
        }
    }

    // For editing the page

    function handleEdit(){
        navigate(`/edit/`+id)
    }

    async function fetchBlog() {
        try {
            const response = await fetch(`https://687a74a3abb83744b7eceb2d.mockapi.io/api/v1/blogs/${id}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Blog not found ${response.status}`)
            }
            console.log(response)
            const data = await response.json()
            console.log(data)
            setBlog(data)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBlog();
    }, [id])

// jun route ma chai dynamic id hunxa or route set gareko hunxa tesma matra useParams lagauna milxa

return (
    <>
        <Navbar />
        <div className="flex flex-wrap gap-10 p-5">
            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        <img src={blog.image} className="rounded-sm h-auto max-w-1/2 p-4 bg-red-100" alt="image" />
                        <div className="max-sw-2xl mx-auto">
                            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                                <div className>
                                    <a href="https://en.wikipedia.org/wiki/Election" className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                        Election
                                    </a>,
                                    <a href="https://en.wikipedia.org/wiki/Politics" className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                        Politics
                                    </a>
                                    <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2"> {blog.title} </h1>
                                    <p className="text-gray-700 text-xs mt-2">Written By:
                                        <a href="#" className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                            {blog.author}
                                        </a>
                                    </p>
                                    <p className="text-base leading-8 my-5">
                                        {blog.description}
                                    </p>
                                    <h3 className="text-2xl font-bold my-5"> {blog.secondTitle} </h3>
                                    <p className="text-base leading-8 my-5">
                                        {blog.secondContent}
                                    </p>
                                    <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                                        {blog.blockquote}
                                    </blockquote>
                                    <p className="text-base leading-8 my-5">
                                        {blog.mainContent}
                                    </p>
                                    <div id="buttons" className="flex gap-5">
                                        <button className="bg-red-500 text-white px-4 py-1 rounded-sm transition-all duration-200 hover:cursor-pointer hover:bg-red-600" onClick={handleDelete}> Delete </button>
                                        <button className="bg-red-500 text-white px-4 py-1 rounded-sm transition-all duration-200 hover:cursor-pointer hover:bg-red-600" onClick={handleEdit}> Edit </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
        <Footer />
    </>
)
}

export default CardDetail