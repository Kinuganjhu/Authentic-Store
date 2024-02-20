import React from "react";
import useFetch from "./useFetch";
import {  useParams } from 'react-router-dom';
import {Button} from 'react-bootstrap';
export default function Item() {
  const [data] = useFetch("https://fakestoreapi.com/products");
  const { id } = useParams();

  return (
    <>
      
      <h1>Page for {id}</h1>
      {data && data.map((item) => {
        if (item.id.toString() === id) {
          return (
            <div key={item.id}>
            <img src ={item.image} alt ={item.title}/>
              <p>{item.description}</p>
              <b>{item.category}</b>
             <br/> <b>₹{item.price}</b>
              <Button variant ='outline-primary'>Buy Now</Button>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
