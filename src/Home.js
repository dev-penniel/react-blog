import BlogsPreview from "./BlogsPreview";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/Blogs");

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            { blogs && <BlogsPreview blogs={blogs} title={'All Blogs!'} /> }
        </div>
     );
}
 
export default Home;