import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props) {

       const navigate = useNavigate()
       const [eusername,setEusername] = useState()
       const [epassword,setEpassword] = useState()
       const [ruser,setRuser] = useState(true)

       const users = props.users
       const setUsers = props.setUsers


       
        function handleUinput(evt){
          setEusername(evt.target.value)
          

        }
        function handlePinput(evt)
        {
          setEpassword(evt.target.value)
          

        }
        function checkUser()
        {
          var userfound = false
          users.forEach(function(item)
          {
            if(item.username === eusername && item.password === epassword)
            {
              console.log("login Sucessfull")
              userfound = true
              navigate("/landing",{state:{user:eusername}})
                                    
            }
          })
          if(userfound === false )
          {
            console.log("login failed")
            setRuser(false)
            navigate("/signup")

          }


        }




  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium ">Hey Hi </h1>
        {ruser?  <p>I help you manage your actitities after you login </p>:<p className="text-red-700">please signup before you login</p>}
       
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
          
          <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
          <p>
            you don't have an account?
            <Link to={"./Signup"} className="text-blue-950 underline">
              {" "}
              Signup{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
