import { Link } from "react-router-dom";

const BackButton = () => {
   return (
      <btn>
         <Link to="/MessageBoard" className=" text-decoration-none p-2 btn btn-sm btn-outline-dark" style={{ width: 50 }}>
            <span> <i>&#x2190;</i> </span>
         </Link>
      </btn>
   );
}

export default BackButton;