import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
       const navigate = useNavigate()
       const users = props.users
       const setUsers = props.setUsers
       const [eusername,setEusername] = useState()
       const [epassword,setEpassword] = useState()


        function handleUinput(evt){
          setEusername(evt.target.value)
          

        }
        function handlePinput(evt)
        {
          setEpassword(evt.target.value)
        
        }
        function addUser(){
          setUsers([...users,{username:eusername,password:epassword}])
          console.log(users)
          navigate("/")
          
        
        }


  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium ">Hey Hi </h1>
        <p>Signup here!</p>
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded "
            placeholder="username"
            onChange={handleUinput}
          />
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded "
            placeholder="password"
            onChange={handlePinput}
          />
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded "
            placeholder="confirmpassword"
          />
          <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Signup</button>
          <p>Already have an account?<Link to={"/"} className="text-blue-950 underline"> Login </Link></p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
