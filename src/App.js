import React, { Component } from "react";
import Header from './Header.js'
import './App.css'
import './Header.css'

class App extends Component {
  render() {

    let subscriber= [
      {
        id :1,
        name: "Tushar Bhutada",
        phone : 9035941239
       
      },

      {
        id :2,
        name: "Raghu Bhutada",
        phone :9483028878
      }
    ];

    return (
      <div>
     
        <Header/>
        {/* <button>ADD</button>

        <div>
          <span>Name</span> <br />
          <span> Phone</span>
        </div>  */}
        <div className="component-body-container">
           <button className="custom-btn add-btn"> ADD</button>
           <div className="gird-container heading-container">
             <span className="grid-item name-heading"> Name</span>
             <span className="grid-item name phone-heading"> Phone</span>
           
           </div>   
           {
             subscriber.map(sub=>{
               return <div  key={sub.id} className="grid-container">
               <span className="grid-item">{sub.name}</span>
               <span className="grid-item">{sub.phone}</span>
               <button className="custom-btn delete-btn"> Delete</button>
               </div>
             })
           }

        </div>
        
        </div>

       

      );
     
  }
}

export default App;
