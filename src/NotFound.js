import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 page not fout</h2>
            <Link to='/'>Back to home page</Link>
        </div>
     );
}
 
export default NotFound;