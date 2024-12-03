//import {useState} from 'react';


// function Tablitsia() {

//    const [tablit, setTablit] = useState();

//    function myTablitsiya(event){
//     setTablit(event.target.value);
    
//    }

//   return(<>

// <input  value={tablit} onChange={myTablitsiya} />

//   </>)
// }
// export default Tablitsia
// ////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';

//function MultiplicationTable() {
  // Son uchun state yaratamiz
  //const [number, setNumber] = useState(1);

  // Sonni o'zgartirish funksiyasi
//   const handleChange = (e) => {
//     setNumber(Number(e.target.value));
//   };

//   return (
//     <div>
//       <h1>umnojeniya</h1>
      
//       {/* Sonni tanlash uchun input */}
//       <input 
//         type="number" 
//         value={number} 
//         onChange={handleChange} 
//         min="1" 
//         max="10" 
//       />

//       {/* Ko'paytirish jadvalini yaratish */}
//       <table border="1">
//         <thead>
//           <tr>
//             <th>umnojeniya</th>
//             {/* <th>Natija</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {/* 1 dan 10 gacha jadvalni generatsiya qilamiz */}
//           {[...Array(10)].map((_, index) => (
//             <tr key={index}>
//               <td>{number} x {index + 1} = {number * (index + 1)} </td>
//               {/* <td>{number * (index + 1)}</td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MultiplicationTable;

////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//import  { useState } from 'react';

function MultiplicationTable() {
  // Son uchun state yaratamiz
 // const [number, setNumber] = useState(1);

  // Sonni o'zgartirish funksiyasi
//   const handleChange = (e) => {
//     setNumber(Number(e.target.value));
//   };

  return (
    <div>
      <h1>umnojeniya</h1>
      
      {/* Sonni tanlash uchun input */}
      {/* <input 
        type="number" 
        value={number} 
        onChange={handleChange} 
        min="1" 
        max="9" 
      /> */}

      {/* Ko'paytirish jadvalini yaratish */}
      <table border="1">
        <thead>
          <tr>
            <th>umnojeniya</th>
            
          </tr>
        </thead>
        <tbody>
          {/* 1 dan 9 gacha jadvalni generatsiya qilamiz */}
          {/* {(() => {
            const rows = [];
            for (let i = 1; i <= 9; i++) {
              rows.push(
                <tr key={i}>
                  <td>{number} x {i} = {number * i}</td>
                  
                </tr>
              );
            }
            return rows;
          })()} */}
          
            {(() => {
            const rows = [];
            for (let i = 1; i <= 9; i++) {
                for(let j = 1; j <=10; j++){

                    rows.push(
                        <tr key={i}>
                 
                  <td>{i} x {j} = {i * j}  </td>
                  
                </tr>
              
              );
            }
            }
            return rows;
          })()}
        </tbody>
      </table>
    </div>
  );
}

export default MultiplicationTable;

