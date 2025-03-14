// ملف UserContext.jsx
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const token = localStorage.getItem('userToken');

        if (!token) {
            setUser(null);
            return;
        }

        try {
            const response = await axios.get('https://ecommerce-node4.onrender.com/user/profile', {
                headers: {
                    Authorization: `Tariq__${token}`,
                },
            });
            console.log("contet is"+response.data.user)
            setUser(response.data.user);
        } catch (e) {
            setUser(null);
        }
    };

    return (
        <UserContext.Provider value={{ user,setUser }}>
            {children}
        </UserContext.Provider>
    );
}
