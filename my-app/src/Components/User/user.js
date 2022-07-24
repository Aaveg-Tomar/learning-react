function User(props){

    return(
        <div>
           {/*  <h4>My name is Rohan</h4>  */}
           <h4>My name is {props.name} and my age is {props.age}  </h4>
        </div>
           
           
    );
}

export default User;