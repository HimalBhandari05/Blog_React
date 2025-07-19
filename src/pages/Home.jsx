
import { useState , useEffect } from "react"
import logo from "../assets/images/logo.png"
import Card from "./components/card"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import axios from "axios"
import { useBeforeUnload } from "react-router-dom"
import CardDetail from "./components/CardDetail"


// strict mode le garda chai duita aako ho. (error haru lai clear way ma <dekhauxa></dekhauxa>)
//  use effect hook ( koi maanxe le first time visit garyo or kei vayo vaney kunei function trigger garna lai chai yo use hunxa )
// [] here is the dependency array, and the function is anynomous function and arrow function (callback function)

function Home(){
    const [loading , setLoading] = useState(true) // stores the loading status
    const [blogs , setBlogs] = useState([]); // state to store the fetched data 
    const [blog , setBlog] = useState([]); // state to store the fetched data 
    const [selectedBlog , setSelectedBlog] = useState(null);

    // async function fetchBlogs(){
    //     const response = await axios.get("https://687a74a3abb83744b7eceb2d.mockapi.io/api/v1/blogs")
    //     if(response.status == 200){
    //         setBlogs(response.data)
    //         // console.log(response.data)
    //     }
    //     else{
    //         alert('data aayena')
    //     }
    // }

    useEffect(()=>{
        // fetchBlogs();
        fetchBlog();
    } , [])


    async function fetchBlog(){
        try{
            const response = await fetch('https://687a74a3abb83744b7eceb2d.mockapi.io/api/v1/blogs' , {
                method: 'GET' ,
                headers:{
                    'content-type':'application/json',
            },
        });
        
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()
        setBlog(data)
        }
        catch (error) {
            alert(`There was an error fetching blogs: ${error.message}`);
            console.error('Fetch error:', error);
        }
    }

    return(
        <>      
            <Navbar />
            <div className="flex flex-wrap gap-10 p-5">
                {
                    blog.map((b)=>{
                        return(
                            <Card key={b.id} blog={b}/>
                        )
                    })
                }
            <div>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Home