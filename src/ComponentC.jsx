import {useContext} from 'react';
import { UserContext } from './ComponentA';
import ComponentD from "./ComponentD.jsx";

// function ComponentC(props){
    function ComponentC(){

    const user = useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentC</h1>
            {/* <ComponentD user={props.user}/> */}
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD/>
        </div>
    );
}

export default ComponentC