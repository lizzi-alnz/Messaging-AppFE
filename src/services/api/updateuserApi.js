import { axiosPublic } from './axios';
import React, { useState, useEffect } from "react";


//cambiar el codigo estático por una peticion get
const putUser = (user, email, password, name, phone, codigo) => {
    // const [list, setList] = useState([]);
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axiosPublic({
    //         url: `http://localhost:3001/api/v1/users/update/{codigo}${valor}`,
    //       });
  
    //       setList(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
  
    //   fetchData();
    // }, [setList]);
    
    return axiosPublic.put(
        'users/update/'+ codigo,
        {
            codigo,
            user,
            email,
            password,
            name,
            phone
        }
    )
};

export default putUser;