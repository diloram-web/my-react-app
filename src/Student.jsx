//proTypes = a mechanism that ensures that the passed value 
//           is of the correct datatype.
//           age: ProTypes.number
///////////////////////////////////////////////
import PropTypes from "prop-types"
function Student(props){
    return(
        <div className="student">
           <p>Name: {props.name}</p> 
           <p>Age: {props.age}</p>
           <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
// Student.PropTypes= {
//      name: PropTypes.string,
//      age: PropTypes.number,
//      isStudent: PropTypes.bool,
// }
Student.propTypes = {
    name: PropTypes.string.isRequired,     // 'name' string bo'lishi kerak va majburiy
    age: PropTypes.number.isRequired,      // 'age' number bo'lishi kerak va majburiy
    isStudent: PropTypes.bool.isRequired,  // 'isStudent' boolean bo'lishi kerak va majburiy
  };
Student.defaulProps = {
    name:"Guest",
    age:37,
    isStudent: true
}


export default Student