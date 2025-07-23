import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"


function Create() {
    const navigate = useNavigate()
    const useApi = "https://687a74a3abb83744b7eceb2d.mockapi.io/api/v1/blogs"
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(false) // laoding add garna lai since fetch garna lai time laagxa
    const [user, setUser] = useState({
        title:"",
        description:"",
        subtitle:"",
        author:"",
        image:""
    })

    // main parts include: handleInput , handleSubmit 
    /*
        handleInput : this handles the input of the form fields and can store it. 
        handleSubmit : server ma data pathauna usually use hunxa.
    */

    const handleInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target; // event.target le chai object return garxa form ko hai ta
        console.log(name, value)
        setUser({ ...user, [name]: value }) // yo chai ...user le existing state leuxa ra [name]: ma chai hamro data form ko jaaney vayo
        console.log(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(user)
        try {
            setIsloading(true)
            const response = await axios.post(useApi, user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(response)
            if (response.status == 201) {
                console.log('Data post successfully')
                navigate('/')
                setUser({
                    title: "",
                    description: "",
                    subtitle: "",
                    author: "",
                    image: ""
                });

            }
        } catch (error) {
            setError(error.message);
        }
        finally {
            setIsloading(false);
        }
    }



    return (
        <>
            <Navbar />
            <div className="max-w-xl mx-auto mt-10 p-6 h-screen bg-white rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Blog Post</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={user.title}
                        onChange={handleInput}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="text"
                        name="subtitle"
                        placeholder="Subtitle"
                        value={user.subtitle}
                        onChange={handleInput}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={user.description}
                        onChange={handleInput}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows="5"
                        required
                    ></textarea>
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={user.author}
                        onChange={handleInput}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL (https://...)"
                        value={user.image}
                        onChange={handleInput}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Create Blog
                    </button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Create