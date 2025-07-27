import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const getApi = "https://687a74a3abb83744b7eceb2d.mockapi.io/api/v1/blogs/";
    const [formData, setFormData] = useState({
        title: "",
        subTitle: "",
        description: "",
        // image: "",
    });

    // handle the input

    const handleInput = (e) => {
        const { name, value, type, files } = e.target  // yesle chai kun input field ma handleinput call vako xa tesko event chai capture garxa

        // let inputValue;    // yesle chai file haru sanga deal garxa ani respected input value jun hamile deko xamm tyo chai update garera dekhauxa.s
        // if ( type == "file"){
        //     inputValue = files[0];
        // }
        // else{
        //     inputValue = value;
        // }
        // console.log(name, value)
        setFormData({
            ...formData ,
            [name]: value
    });
    };

    const getExistingData = async (e) => {
        const response = await axios.get(getApi + id)
        console.log("The existing response ", response)
        if (response.status == 200 || response.status == 201) {
            setFormData(response.data)
        }
        else {
            console.log("the data couldn't come ! ")
        }
    }

    // to get the default form data 

    useEffect(() => {
        getExistingData();
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit working")
        try {
            const response = await axios.put(
                getApi + id,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status == 200) {
                console.log(response)
                navigate('/')
                
            } else {
                alert('Failed to update blog.');
            }
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('An error occurred while updating.');
        }
    }


    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex flex-col">
                <section className="flex-grow container mx-auto p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Edit Blog Post
                    </h1>

                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInput}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Sub Title */}
                        <div className="mb-4">
                            <label htmlFor="subTitle" className="block text-gray-700 font-semibold mb-2">
                                Sub Title
                            </label>
                            <input
                                type="text"
                                id="subTitle"
                                name="subTitle"
                                value={formData.subTitle}
                                onChange={handleInput}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInput}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        {/* Image Upload */}
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                                Upload Image
                            </label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                onChange={handleInput}
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition"
                            >
                                Update Blog
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Edit;


// for images we should not pass the form data directly but create a FormData object and manually assign value to the key and then we pass the data
// in the handleInput part too we have to handle for the files too . 
