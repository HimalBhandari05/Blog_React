import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


function Card( {blog}){
    return(
            <div className="max-w-sm mx-auto mb-6 md:md-0 flex col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg flex-wrap">
                <Link to={`/cardDetails/${blog.id}`}>
                    <img srcSet="" src={blog.image} className="w-full mb-4 rounded-lg shadow-none transition duration-500 ease-in-out group-hover:shadow-lg" alt="laravel9-1646792144.jpg"/>
                    <div className="flex items-center mb-3">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500">
                        {blog.subtitle}
                    </span>
                    <p className="font-mono text-xs font-normal opacity-75 text-black">
                        {blog.createdAt}
                    </p>
                    </div>
                    <p className="font-display max-w-sm text-2xl font-bold leading-tight">
                    <span className="link-underline link-underline-black text-black">
                        { blog.title }
                    </span>
                    </p>
                </Link>
            </div>  
    )
}

export default Card