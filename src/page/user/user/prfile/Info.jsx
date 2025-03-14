 import * as Usercontext from "../../../../component/user/context/Usercontext"
   import React from "react";
   import { useContext } from 'react';



export default function Info(){
      const  { user } = useContext(Usercontext.UserContext); 
    return(<div className="p-5 m-">
      <h2 className="pb-3">Information about user:</h2>
      <table className="w-100 shadow-lg">
        <tr>
          <td>
            <h2>Name</h2>
            
          </td>
          <td>
          <h2>{user.userName}</h2>
          </td>
        </tr>
        <tr>
          <td>
          <h2>email</h2>
          </td>
          <td>
            <h2>{user.email}</h2>
          
          </td>
          
        </tr>
        <tr>
          <td>
            <h2>status</h2>
          </td>
          <td>
            <h2>{user.status}</h2>
          </td>
        </tr>
        <tr>
          <td>
            <h2>role</h2>
          </td>
          <td>
            <h2>{user.role}</h2>
          </td>
        </tr>
        <tr>
          <td>
            <h2>
            createdAt
            </h2>
          </td>
          <td>
            <h2>
            {user.createdAt}
            </h2>
          </td>
        </tr>
      </table>
      </div>);
}