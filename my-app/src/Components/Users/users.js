import React from "react";
import User from "../User/user"
import './users.css'

const users = [
    {
        "id":"60d0fe4f5311236168a109ca",
        "title":"ms",
        "firstNAme":"Sara",
        "lastName":"Adersen",
        "picture":"https://randomuser.me/api/portraits/women/58.jpg"

    },
    {
        "id":"60d0fe4f5311236168a109cb",
        "title":"miss",
        "firstNAme":"Edita",
        "lastName":"Vestering",
        "picture":"https://randomuser.me/api/portraits/women/89.jpg"
    },
    {
        "id":"60d0fe4f5311236168a109cc",
        "title":"ms",
        "firstNAme":"Adina",
        "lastName":"Barbosa",
        "picture":"https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
        "id":"60d0fe4f5311236168a109ca",
        "title":"ms",
        "firstNAme":"Sara",
        "lastName":"Adersen",
        "picture":"https://randomuser.me/api/portraits/women/58.jpg"

    },
    {
        "id":"60d0fe4f5311236168a109cb",
        "title":"miss",
        "firstNAme":"Edita",
        "lastName":"Vestering",
        "picture":"https://randomuser.me/api/portraits/women/89.jpg"
    },
    {
        "id":"60d0fe4f5311236168a109cc",
        "title":"ms",
        "firstNAme":"Adina",
        "lastName":"Barbosa",
        "picture":"https://randomuser.me/api/portraits/women/28.jpg"
    },

]


// class Users extends React.Component {

//     constructor() {
//         super();
//     }


//     render()
//     {
//         return(

//             <div>
//                 <h>Empolyee List</h>
//                 <div className="usersDiv">

//                     {/* javaScript */}

//                     {
//                        users.map((user)=>{
//                          return <User data = {user}/>
//                        })
//                     }

//                 </div>
//             </div>
//         )
//     }

// }


function Users(){
    return(
                     <div>
                        <h>Empolyee List</h>
                        <div className="usersDiv">
        
                            {/* javaScript */}
        
                            {
                               users.map((user)=>{
                                 return <User data = {user}/>
                               })
                            }
        
                        </div>
                    </div>
                )
}







export default Users;