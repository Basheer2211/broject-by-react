import React from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation  } from 'swiper/modules';
 import 'swiper/css';
import { Spinner } from "react-bootstrap"; 
import { useEffect ,useState } from "react";

export default function SwipCat(){
const [categories, setCategories] = useState([]);
const [loading,setLoad]=useState(true);

    const getCategory=async()=> {
        try{ setLoad(true)
               const response=await axios.get(`https://ecommerce-node4.onrender.com/categories/active`);
               setCategories(response.data.categories);
               console.log(response.data.categories)
         }catch(err){ setLoad(true)
            console.log(err)
        }
        finally{
            setLoad(false)
        }
     
        
    }
    useEffect(() => {
        getCategory();
      }, []);

      if (loading==true) {
        return (
        <div className="d-flex justify-content-center align-items-center vh-100">
    
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>
    
          );
        
      }
    
    return(<div className="pb-5 bg-light">
    <div className="container bg-secondary-subtle pb-5 shadow">
        <div  >
    <h2 className="text-center">Categories</h2>

    <div className="d-flex justify-content-center align-item-center">
    <div className="w-75 ">

     <Swiper
      modules={[Navigation ]}
      spaceBetween={50}
      slidesPerView={3.3}
      navigation
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
 {categories.map((data) => (
   <SwiperSlide key={data._id}>
     <img src={data.image.secure_url} alt={data.name} className="img-fluid rounded shadow" />
   </SwiperSlide>
))}

      
      
    </Swiper>
    </div>
    </div>
     </div>
    </div>
    </div>)
}