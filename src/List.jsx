import PropTypes from "prop-types";


//function List(){
    // const fruits = [{id:1,name:"apple",calories:95}, 
    //                  {id:2,name:"orange",calories:45}, 
    //                  {id:3,name:"banana",calories: 105}, 
    //                  {id:4,name:"coconut",calories:159}, 
    //                  {id:5,name:"pineapple",calories:37}];

   //fruits.sort((a,b) =>a.name.localeCompare(b.name)); //ALPHABETICAL
   //fruits.sort((a,b) =>b.name.localeCompare(a.name));//Reverse ALPHABETICAL
   // fruits.sort((a, b) => a.calories - b.calories) ; //NUMERIC
   // fruits.sort((a, b) => b.calories - a.calories) ; //  REVERSE NUMERIC
//////////////////////////////////////////////////////////////////////////////////////
  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

//    const listItems = highCalFruits.map(lowCalFruit =>   <li key={lowCalFruit.id}>
//                                                        {lowCalFruit.name}: &nbsp;
//                                                         <b> {lowCalFruit.calories}</b></li>)
//}
//export default List

///////////////////////////////////////////////////////////////////////
    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                        {fruit.name}: &nbsp;
    //                                       <b> {fruit.calories}</b></li>)

    // return(<ol key={fruits}>{listItems}</ol>)
    ///////////////////////////////////////////////////////////////////////
   function  List(props){

       const category = props.category;
       const itemList = props.items;

        const listItems = itemList.map(item =>     <li key={item.id}>
                                                   {item.name}: &nbsp;
                                                   <b> {item.calories}</b></li>)
  
  
  return( <>
              

              <h3 className="list-category">{category}</h3>
              <ol className="list-items" key={listItems}>{listItems}</ol>
        </>)
  
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
   // category: PropTypes.arrayOf(PropTypes.string).isRequired,
   /////////////////////////////////////////////////////////
    category: PropTypes.arrayOf(PropTypes.shape({     id: PropTypes.number,
                                              
                                                       name:PropTypes.string,
                                                      calories: PropTypes.number })).isRequired,
  };
List.defaultProps = {
  category: "Category",
  items: [],

}




export default List