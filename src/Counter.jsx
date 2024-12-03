import {useState} from 'react';


// function Counter  () {

//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     }
//     const decrement = () => {
//         setCount(count - 1);
//     }
//     const reset = () => {
//         setCount(0);
//     }

//     return(<div className='counter-container'>
//         <p className='count-display'>{count}</p>
//         <button className='counter-button' onClick={decrement}>Decrement</button>
//         <button className='counter-button' onClick={reset}>Reset</button>
//         <button className='counter-button' onClick={increment}>Increment</button>

//     </div>)

// }

//export default Counter
///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// Updater function = A function passed as an argument to setState() usally
//                    ex.setYear(Arrow function y => y +1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous funvtions
//                    Good practice to use updater functions
//



function Counter  () {

    const [count, setCount] = useState(0);

    function increment  () {


        // Uses the CURRENT state to calculate the NEXT state
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function decrement () {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    function reset () {
        setCount( 0);
    }

    return(<div className='counter-container'>
        <p className='count-display'>Count: {count}</p>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={reset}>Reset</button>
        <button className='counter-button' onClick={increment}>Increment</button>

    </div>)

}
export default Counter

