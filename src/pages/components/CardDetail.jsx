import { useEffect, useState } from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "./Loading"
import DeleteBlog from "./DeleteBlog"
import axios from "axios"

function CardDetail() {
    const [blog, setBlog] = useState({})
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // For deleting
    async function handleDelete() {
        const response = await axios.delete("https://687a74a3abb83744b7eceb2d.mockapi.io/api/v1/blogs/" + id);
        if (response.status === 200) {
            navigate("/")
        } else {
            alert("data not fetched");
        }
    }

    // For editing the page
    function handleEdit() {
        navigate(`/edit/` + id)
    }

    async function fetchBlog() {
        try {
            const response = await fetch(`https://687a74a3abb83744b7eceb2d.mockapi.io/api/v1/blogs/${id}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Blog not found ${response.status}`)
            }
            const data = await response.json()
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

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap gap-10 p-5">
                {
                    loading ? (
                        <Loading />
                    ) : (
                        <div className="min-h-screen  m-auto flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
                            <div className="backdrop-blur-md bg-white/40 border border-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
                                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-xl mb-4" />
                                <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">{blog.title}</h2>
                                <h3 className="text-xl text-center mb-4 text-gray-600">{blog.subtitle}</h3>
                                <p className="mb-4 text-gray-700">{blog.description}</p>
                                <p className="mb-2 text-gray-500">Author: {blog.author}</p>
                                <div className="flex gap-4 mt-6">
                                    <button
                                        onClick={handleEdit}
                                        className="flex-1 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        className="flex-1 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <Footer />
        </>
    )
}

export default CardDetail