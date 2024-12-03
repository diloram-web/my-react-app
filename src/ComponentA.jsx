import  { useState,useEffect,createContext } from "react";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("BRo Code & Diloram");

    

      useEffect(() => {
    // Foydalanuvchi ma'lumotlarini yangilash
    setUser({ name: "John Doe", age: 25 });
}, []);


    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`HELLO ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
    
        </div>
    );
}

export default ComponentA