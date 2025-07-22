import { useParams } from "react-router-dom"


function DeleteBlog(){
    const {id} = useParams()
    function deleteBlog(id){
        const confirmDelete = window.confirm("Are you sure ?")
        if(confirmDelete){
            
        }
    }
    return( 
        <button className="bg-red-500 text-white px-4 py-1 rounded-sm transition-all duration-200 hover:cursor-pointer hover:bg-red-600"  onClick={ <DeleteBlog /> }> Delete </button>
    )

}

export default DeleteBlog