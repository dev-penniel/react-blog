import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const Blogdetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error} = useFetch("http://localhost:8000/Blogs/" + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/Blogs/" + blog.id , {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            { blog && (
                <article>
                    <h2 className="blog-title">{ blog.title }</h2>
                    <p className="blog-author"> Writen By { blog.authur }</p>
                    <p className="blog-body"> { blog.body } </p>
                    <button className="blog-btn" onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default Blogdetails;