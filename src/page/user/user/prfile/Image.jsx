import react from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Regester from "../register/Register";
import { register } from "swiper/element";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Image(){
      const [error, setError] = useState(false);
    const {register ,handleSubmit,formState:{errors}}=useForm();
    const [image ,setImage]=useState(null);
    const ubdateimage =async(data)=> {
        const formData=new FormData();
        const useToken=localStorage.getItem('userToken')
        formData.append("image",data.image[0])

        try{
            setError(true);
            const response =await axios.put("https://ecommerce-node4.onrender.com/user/update-image",formData,
                 {
                    headers:{
                        Authorization:`Tariq__${useToken}`
                    }
                 }
            )
            setImage(  response.data.user.image.secure_url);
            if (response.status ==200) {
                toast.success("image update successfully")
                
            }


        }catch(err){
            setError(true);
            toast.success("image not update successfully")

        } finally{
            setError(false);
          }
        
    }
         
     
     

    return(
        <>
        <Form onSubmit={handleSubmit(ubdateimage)} encType="multipart/form-data" className="border p-5 shadow-lg mt-5 h-50">
            <Form.Group >
                <Form.Label htmlFor="imageUpload" className="pb-3"><h2>Update your image</h2></Form.Label>
                <Form.Control type="file" id="imageUpload" {...register('image')}></Form.Control>
            
            </Form.Group>
            { <img src={image}/> }
            <Button className="mt-3" variant="primary" type="submit">{error?<p>loading...</p>:<p>update</p>}  </Button>   
            
        </Form>
        </>
    )
}