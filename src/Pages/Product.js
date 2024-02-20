import useFetch from "./useFetch";
import {Link} from "react-router-dom";
export default function Product() {
  const[data] = useFetch("https://fakestoreapi.com/products")

  return(
    <>
    {
      data && data.map((item)=>(
        <div key={item.id} className="div">
        <img src={item.image} alt={item.title} />
     <h3>{item.title}</h3>
     <p>
          {item.description}
        </p>
     
          <Link to={`/Item/${item.id}`}>View Details>>></Link>
      </div>
      ))
    } < />
  );
}