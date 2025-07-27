import { useState } from "react";
import Card from "./card";

function SearchPost({ blog }) {
    console.log(blog)
    const [search, setSearch] = useState("")

    const filterData = blog.filter((post) => {
        return post.title.toLowerCase().includes(search.toLowerCase())
    });

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    // we add the filtered object in the 
    console.log(blog)
    return (
        <>
            <input className="border h-10 w-48" type="text" onChange={handleChange} value={search} />
            <div>

                <h1> Nice </h1>
                
            </div>
        </>
    )
}
export default SearchPost