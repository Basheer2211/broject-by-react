import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Order() {
    const [getorder, setGetorder] = useState([]);
    const [visibleTables, setVisibleTables] = useState({}); // ✅ تخزين حالة كل طلب بشكل مستقل

    // ✅ دالة تفعيل/تعطيل الجدول للطلب المحدد فقط
    const toggleTable = (orderId) => {
        setVisibleTables((prev) => ({
            ...prev,
            [orderId]: !prev[orderId], // ✅ تبديل حالة الطلب الذي تم النقر عليه فقط
        }));
    };
    const removeFunc=async(orderId)=>{
        const token=localStorage.getItem("userToken");
        try{
            const response=await axios.patch(`https://ecommerce-node4.onrender.com/order/cancel/${orderId}`,
                {},
                {
                    headers: {
                        Authorization: `Tariq__${token}`
                    }
                }
            ) 
            setGetorder((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
            setVisibleTables((prevVisibleTables) => {
                const updatedVisibleTables = { ...prevVisibleTables };
                delete updatedVisibleTables[orderId]; // إزالة الجدول المرتبط بالطلب
                return updatedVisibleTables;
            });
            toast.success('done')
            console.log(response)
        }catch(err){
            console.log(err);
        }
    }
    const faild=()=>{
        toast.error('not done')
    }

    const getOrder = async () => {
        const token = localStorage.getItem("userToken");
        try {
            const response = await axios.get("https://ecommerce-node4.onrender.com/order", {
                headers: {
                    Authorization: `Tariq__${token}`,
                },
            });
            setGetorder(response.data.orders);
            console.log("Response Data:", response.data.orders);
        } catch (err) {
            console.error("Error fetching orders:", err);
        }
    };

    useEffect(() => {
        getOrder();
    }, []);

    return (
        <div>
            <table className="border w-100 h-100">
                <thead>
                    <tr>
                        <th className="p-2">Status</th>
                        <th>Remove Item</th>
                        <th>Display Item</th>
                    </tr>
                </thead>
                <tbody>
                    {getorder.map((data) => (
                        <React.Fragment key={data._id}>
                            {data.status !=="cancelled"&&(
                            <tr>
                                <td className="text-danger p-2">Order Status: {data.status}</td>
                                <td className="d-flex justify-content-center">
                                    <button className="bg-info p-2" onClick={data.status === "pending" ? () => removeFunc(data._id) : faild}>
                                        Remove
                                    </button>
                                </td>
                                <td className="text-center">
                                    <button className="bg-warning p-2" onClick={() => toggleTable(data._id)}>
                                        Display
                                    </button>
                                </td>
                            </tr>
                            )}
    
                            {/* ✅ عرض الجدول فقط إذا كان الطلب المحدد مفتوحًا */}
                            {visibleTables[data._id] && (
                                <tr>
                                    <td colSpan="3">
                                        <table className="border h-100 w-100">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.products?.map((data1) => (
                                                    <tr key={data1._id}>
                                                        <td>
                                                            <img
                                                                src={data1.productId?.mainImage?.secure_url}
                                                                alt="Product"
                                                                width={50}
                                                                height={50}
                                                            />
                                                        </td>
                                                        <td>{data1.quantity}</td>
                                                        <td>${data1.productId?.finalPrice}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                             
                            )}
                       
                        </React.Fragment>
                    
                    ))}
                </tbody>
            </table>
        </div>
    );  }       