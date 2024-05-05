import React from "react";
import Layout from "../components/layout";
import { navigate } from "gatsby";

const FormPage = () => {
const handleSubmit = (event) => {
event.preventDefault();
const myForm = event.target;
const formData = new FormData(myForm); 
const myData = new URLSearchParams(formData).toString()
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: myData,
    })
    .then(() => {
        console.log(myData)
        navigate("/confirm/")
        })
    .catch((error) => console.log(error));
    };
    
    return (
    <Layout>
    <div>
    <h2>Comments about Film</h2>     
        <form method="post" 
        name="comments about film" 
        data-netlify="true"
        onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="comments about film"/>
        <label>
        <p>Name</p>
        <input type="text" name="name"/>
        </label>
        <label>
        <p>Email</p>
        <input type="email" name="email"/>
        </label>
        <label>
        <p>Comments about Film</p>
        <textarea name="comments"></textarea>
        </label><br/>    
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
        </form>
        </div>
      </Layout>
    )
  }
  
export default FormPage;