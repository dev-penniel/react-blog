import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [authur, setAuthur] = useState('Penniel');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, authur};
        setIsPending(true);

        fetch("http://localhost:8000/Blogs", {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            history.push('/');
            setIsPending(false);
        })
    }

    return ( 
        <div>
            <h1 className="create-blog-title">Create New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    required
                    type = "text" 
                    value = { title }
                    onChange = { (e) => setTitle(e.target.value) }
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value = { body }
                    onChange = { (e) => setBody(e.target.value) }
                >
                </textarea>

                <label>Blog authur:</label>
                <select
                    required
                    value = { authur }
                    onChange = { (e) => setAuthur(e.target.value) }
                >

                    <option value="Penniel">Penniel</option>
                    <option value="React Dev">React Dev</option>

                </select>

                {!isPending && <button className="add-blog">Add Blog</button>}
                {isPending && <button className="add-blog" disabled>Adding Blog...</button>}
            </form>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <p>Author: {authur}</p>
        </div>
     );
}
 
export default Create;