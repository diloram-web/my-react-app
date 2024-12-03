import PropTypes from "prop-types";


// function UserGreeting(props){
//     if(props.isLoggedIn){
//        return <h2>Welcome {props.username}</h2>
//     }
//     else{
//         return <h2>Please log in to continue</h2>
//     }
// }
/////////////////////////////////////////////////////////////////////////////

// function UserGreeting(props){
   
//     return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : <h2 className="login-prompt">Please log in to continue</h2>)
// }
// UserGreeting.propTypes = {
//     isLoggedIn: PropTypes.bool.isRequired,  // 'isLoggedIn' boolean tipida va majburiy
//     username: PropTypes.string.isRequired,  // 'username' string tipida va majburiy
//   };
// export default UserGreeting
/////////////////////////////////////////////////////////////////////////

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">
                           Welcome {props.username}
                           </h2>

    const loginPrompt     = <h2 className="login-prompt">
                             Please log in to continue
                             </h2>

    return(props.isLoggedIn ? welcomeMessage :  loginPrompt)
}



UserGreeting.propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,  
        username: PropTypes.string.isRequired,  
      };


UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting