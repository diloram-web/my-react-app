// useEffect() = React Hook that tells React DO SOME WHEN (pick one)
//              This component re-renders
//              This component mounts
//              The state of  a value
//

// useEffect(function, [dependencies])

// 1. useEffect(() => {})            //Runs after every re-render
// 2. useEffect(() => {}, [])       //Runs only on mount
// 3. useEffect(() => {}, [value])  // Runs on mount + when value changes


//USES
// #1 Event Listeners
// #2 DOM minipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an Api
// #5 Clean up when a component unmounts


//import { number } from "prop-types";
import {useState,useEffect} from "react";

function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    ///////////////////////////////////////

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    UseEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTNER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTNER REMOVED")
        }

    },[]);

    useEffect(() =>{
        document.title = `Size: ${width} x ${height}`;

    },[width, height])


    // window.addEventListener("resize", handleResize);
    // console.log("EVENT LISTENER ADDED");

    // useEffect(() => {
    //     document.title = `My counter programmer`
    // }, []);
    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }
    function subtractCount(){
        setCount(c => c - 1);
    }
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }


    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

    }
    


    return(<>
        <p style={{color: color}}>Count: {count} </p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>


        <p>Window Width: {width} px</p>
        <p>Window Height: {height} px</p>

        
        
      
    
    </>)
}

export default UseEffect