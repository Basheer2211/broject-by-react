 import * as Usercontext from "../../../../component/user/context/Usercontext"
   import React from "react";
   import { useContext } from 'react';



export default function Info(){
      const  { user } = useContext(Usercontext.UserContext); 
    return(<div className="p-5 m-">
      <h2 className="pb-3 text-black">Information about user:</h2>
      <table className="w-100 shadow-lg">
        <tr>
          <td>
            <h2 className="text-black">Name</h2>
            
          </td>
          <td>
          <h2 className="text-black">{user.userName}</h2>
          </td>
        </tr>
        <tr>
          <td>
          <h2 className="text-black">email</h2>
          </td>
          <td>
            <h2 className="text-black">{user.email}</h2>
          
          </td>
          
        </tr>
        <tr>
          <td>
            <h2 className="text-black">status</h2>
          </td>
          <td>
            <h2 className="text-black">{user.status}</h2>
          </td>
        </tr>
        <tr>
          <td>
            <h2 className="text-black">role</h2>
          </td>
          <td>
            <h2 className="text-black">{user.role}</h2>
          </td>
        </tr>
        <tr>
          <td>
            <h2 className="text-black">
            createdAt
            </h2>
          </td>
          <td>
            <h2 className="text-black">
            {user.createdAt}
            </h2>
          </td>
        </tr>
      </table>
      </div>);
}