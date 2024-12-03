import styles from './Button.module.css';


// function Button(){
//     //const handleClick = () => console.log("OUCH!S");

//     let count = 0;

//     const handleClick2 = (name) => {
//         if(count < 3){
//             count++;
//          console.log(`${name} you clicked me ${count} time/s`);
//         }
//         else{
//             console.log(`${name} stop clicking me!`)
//         }
//     }

//     return(<button onClick={() => handleClick2("Diloram ")} className={styles.button}>Click me 😆</button>)
// }

// export default Button
////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function Button(){
     const handleClick = (e) => e.target.textContent = "OUCH!";

    //  return(<button onClick={(e) => handleClick(e)} className={styles.button}>Click me 🙃</button>);
    return(<button onDoubleClick={(e) => handleClick(e)} className={styles.button}>Click me 🙃</button>)




}
export default Button