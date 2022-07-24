import User from "../User/user"

const users = [{name:"Aman", age:"19" },{name:"Abhishek", age:"18"}]
function Users()
{
    return (
        <div>
            <h2>This is user components</h2>
            <User/>
            <User name = "Utkarsh" age = "27"/>
            <User name = "Rohan" age = "25"/>

            {/* This is JavaScript  */}

            {
                 users.map((user)=>{

                     return <User name={user.name} age={user.age} />
                })

            }
                
                    


                
            
        </div>
        
    );
}   

export default Users;