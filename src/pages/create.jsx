import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"


function Create(){
    const navigate = useNavigate()
    const useApi = "https://687a74a3abb83744b7eceb2d.mockapi.io/api/v1/Crud"
    const [error , setError] = useState(null);
    const [isLoading , setIsloading] = useState(false) // laoding add garna lai since fetch garna lai time laagxa
    const [user , setUser] = useState({
        name:"",
        password:"",
    })

    // main parts include: handleInput , handleSubmit 
    /*
        handleInput : this handles the input of the form fields and can store it. 
        handleSubmit : server ma data pathauna usually use hunxa.
    */

    const handleInput = (event)=>{
        event.preventDefault();
        const { name , value } = event.target; // event.target le chai object return garxa form ko hai ta
        console.log(name , value)
        setUser({...user , [name]:value}) // yo chai ...user le existing state leuxa ra [name]: ma chai hamro data form ko jaaney vayo
        console.log(user)
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(user)
        try{
            setIsloading(true)
            const response = await axios.post(useApi, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                user
            })
            console.log(response)
            if(response.status == 201){
                console.log('Data post successfully')
                navigate('/')
                setUser({
                    name:"",
                    password:"",
                })
            }
        }catch(error){
            setError(error.message);
        }
        finally{
            setIsloading(false);
        }
    }



    return(
        <>
        <Navbar />
            <div className="max-w-md mx-auto mt-24">
                <form className="p-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" id="email" onChange={handleInput} name="email" value={user.email} className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your email address" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" id="password" onChange={handleInput} name="password" value={user.password} className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-gray-500 hover:text-blue-500 focus:outline-none focus:underline transition duration-150 ease-in-out">Forgot
                            Password?</a>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out">Submit</button>
                    </div>
                </form>
            </div>
        <Footer />
        </>
    )
}

export default Create