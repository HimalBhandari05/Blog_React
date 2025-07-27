import { Link } from 'react-router-dom';

function Card({ blog }) {
  return (

    <div className="max-w-sm mx-auto mb-6 h-96 w-96 flex flex-col border p-4 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
      <Link to={`/cardDetails/${blog.id}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full mb-4 rounded-lg object-cover h-48"
        />

        <div className="flex items-center mb-2 justify-between">
          <span className="text-xs font-bold text-white px-2 py-1 bg-purple-600 rounded">
            {blog.subtitle}
          </span>
          <p className="text-xs text-gray-500">{blog.createdAt}</p>
        </div>
        <h2 className="text-xl font-semibold text-black hover:text-purple-600 transition-colors">
          {blog.title}
        </h2>
      </Link>
    </div>
  );
}

export default Card;
