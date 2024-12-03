import { useState } from "react";

function Car(){
    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang" });

    const [cars,setCars] = useState([]) ;
    const [carYear,setCarYear] = useState(new Date().getFullYear()) ;
    const [carMake, setCarMake] = useState(""); 
    const [carModel, setCarModel] = useState("");                    

    function handleYearChange(event){
        setCar(c => ({...c,year:event.target.value}));
    }   
    function handleMakeChange(event){
        setCar(c => ({...c,make:event.target.value}));
        
    }   
    function handleModelChange(event){
        setCar(c => ({...c,model:event.target.value}));
        
    }    
    function handleAddCar(){

        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        setCars(cars => [...cars, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
        
    }                          
    function handleRemoveCar(index){
        setCars(cars.filter((_, i) => i !== index)) 
    }
    function handleYearCarChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeCarChange(event){
        setCarMake(event.target.value);
        
    }
    function handleModelCarChange(event){
        setCarModel(event.target.value);
        
    }
    return(<div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handleYearChange}/><br/>
                <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
                <input type="text" value={car.model} onChange={handleModelChange}/><br/>



                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((cars, index) => 
                        <li key={index} onClick={() => handleRemoveCar(index)}>
                            {cars.year}{cars.make}{cars.model}

                        </li>)}
                    
                </ul>
                <input type="number" value={carYear} onChange={handleYearCarChange}/><br/>
                <input type="text" value={carMake} onChange={handleMakeCarChange}
                        placeholder="Enter Car Name"/><br/>
                <input type="text" value={carModel} onChange={handleModelCarChange}
                         placeholder="Enter Car Model"/><br/>

                <button onClick={handleAddCar}>Add Car</button>
               
           </div>);
}
export default Car