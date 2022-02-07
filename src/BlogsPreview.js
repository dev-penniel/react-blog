import {Link} from 'react-router-dom';

const BlogsPreview = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2 className="title">{title}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`blogs/${ blog.id }`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.authur}</p>
                </Link>
            </div>
            ))}
        </div>
     );
}
 
export default BlogsPreview;