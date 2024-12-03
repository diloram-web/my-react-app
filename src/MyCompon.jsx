

// import { useEffect, useRef} from 'react';

// function MyCompon (){

//     //let [number, setNumber] = useState(0);
//    // const ref = useRef("pizza");
//     //console.log(ref);
//     const inputRef1 = useRef(null);
//     const inputRef2 = useRef(null);
//     const inputRef3 = useRef(null);

//     useEffect(() => {
//         console.log("COMPONENT RENDERED");
//       //  console.log(inputRef1)
//     });

//     function handleClick1(){
//        // ref.current++;
//        // console.log(ref.current);
//        // setNumber(n => n + 1);
//        inputRef1.current.focus();
//        inputRef1.current.style.backgroundColor =  "yellow";
//        inputRef2.current.style.backgroundColor =  "";
//        inputRef3.current.style.backgroundColor =  "";
//     }
//     function handleClick2(){
//         // ref.current++;
//         // console.log(ref.current);
//         // setNumber(n => n + 1);
//         inputRef2.current.focus();
//         inputRef1.current.style.backgroundColor =  "";
//         inputRef2.current.style.backgroundColor =  "yellow";
//         inputRef3.current.style.backgroundColor =  "";
//      }
//      function handleClick3(){
//         // ref.current++;
//         // console.log(ref.current);
//         // setNumber(n => n + 1);
//         inputRef3.current.focus();
//         inputRef1.current.style.backgroundColor =  "";
//         inputRef2.current.style.backgroundColor =  "";
//         inputRef3.current.style.backgroundColor =  "yellow";
//      }
    
//     return(
//         <div>

//         <button onClick={handleClick1}>
//             Click me1!
//         </button>
//         <input ref={inputRef1}/>
//         <button onClick={handleClick2}>
//             Click me2!
//         </button>
//         <input ref={inputRef2}/>
//         <button onClick={handleClick3}>
//             Click me3!
//         </button>
//         <input ref={inputRef3}/>
//         </div>
//     );
// }
// export default MyCompon;
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////



import { useRef, } from 'react';

function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const handleButtonClick = (inputNumber) => {
    if (inputNumber === 1) {
      inputRef1.current.focus();
    } else if (inputNumber === 2) {
      inputRef2.current.focus();
    } else if (inputNumber === 3) {
      inputRef3.current.focus();
    }
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Click me1!</button>
      <input ref={inputRef1} placeholder="Input 1" />
      
      <button onClick={() => handleButtonClick(2)}>Click me2!</button>
      <input ref={inputRef2} placeholder="Input 2" />
      
      <button onClick={() => handleButtonClick(3)}>Click me3!</button>
      <input ref={inputRef3} placeholder="Input 3" />
    </div>
  );
}

export default MyComponent;



