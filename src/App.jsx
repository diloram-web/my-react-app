//REACT HOOK = Special function that allows functional components
//             to use React features without writing class components (REACT V16.8)
//            (useState,useEffect,useContent,useReduser,useCallback, and more...)
//

//useState() = A React hook that allows the creation of a stateful variable
//             AND a setter function to update its value in the Virtual DOM.
//             [name, setName]


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


// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing through each level
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// useContext() = React Hook allows  you to share values
//                between multiple levels of components
//                without passing props through each level

//PROVEDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//     <Child/>
//    </Mycontext.Provider>


//CONSUMER COMPONENTS
// 1. import React,{useContext} from 'react';
// import {MyContext} from './ComponentA.jsx' ;
// 2. const value = useContext(MyContext);

///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Doesnot cause re-renders when its value changes.
//            when you want a component to "remember" some information,
//             but you don't want that information to trigger new renders.


//           1.Accessing/Interacting with DOM elements
//           2.Handling Focus,Animations, and Transitions
//           3.Managing Timers and Intervals






import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Button1 from "./Button1.jsx";
//import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
//import Student from "./Student.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import MultiplicationTable from "./Tablitsia";
import Car from "./Car.jsx";
import Add from "./Add.jsx";
import ToDolist from "./ToDoList.jsx";
import DigitalClock from "./DigitalClock.jsx";
import ComponentA from "./ComponentA.jsx";
import MyCompon from "./Mycompon.jsx";
import StopWatching from "./StopWatching.jsx";
//import React from 'react';
//import UseEffect from "./UseEffect.jsx";



function App() {

  const fruits = [{id:1,name:"apple",calories:95}, 
                 {id:2,name:"orange",calories:45}, 
                 {id:3,name:"banana",calories: 105}, 
                 {id:4,name:"coconut",calories:159}, 
                 {id:5,name:"pineapple",calories:37}];
  const vegetables = [{id:6,name:"potatoes",calories:110}, 
                     {id:7,name:"celery",calories:15}, 
                     {id:8,name:"carrots",calories: 25}, 
                     {id:9,name:"corn",calories:63}, 
                     {id:10,name:"broccoli",calories:50}];
 
  return(
    <>

      <Header/>
      <DigitalClock/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Button/>
      <br/>
      <br/>
      <Button1/>
      <ProfilePicture/>
      <MyComponent/>
      <Counter/>
      <ColorPicker/>
      <MultiplicationTable/>
      <Car/>
      <Add/>
      <ToDolist/>
      <DigitalClock/>
      <DigitalClock/>
      <DigitalClock/>
      <ComponentA/>
      <MyCompon/>
      <StopWatching/>
      {/* <UseEffect/> */}
      {/* <Student name="Diloram" age={37} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Dil" age={20} isStudent={true}/>
      <Student name="Sandy" age={50} isStudent={false}/>
      <Student name="Larry" />  */}
      {/* <UserGreeting isLoggedIn={false} username="DiloramAkhmadalieva"/>
      <List/>*/}




      <Food/>

      {fruits.length > 0 && < List items={fruits} category="Fruits"/> }
      {vegetables.length > 0 &&  < List items={vegetables} category="Vegetables"/> }
      <Footer/>
    </>
  );
}

export default App
//React Lessons #1

//How to style React components with css
//......................................
//(not including external frameworks or preprocessors)


//1.External
//2.Modules
//3.Inline

////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//   props = read-only properties that are shared between components.
//           A parent component can send data to child component.
//          <Component key=value />
