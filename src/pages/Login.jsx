import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate=useNavigate()
  return (
    <div className='bgcontainer text-gray-400 flex justify-center items-center '>
      
      <dir className="rounded-full h-[25rem] w-[25rem] flex justify-center items-center">
        <form  className='flex flex-col gap-4' onSubmit={()=> navigate("home")}>
          <img src="https://i2.wp.com/istasyemek.com/wp-content/uploads/2021/05/tabldot-yemek.png?w=512&ssl=1" alt="img" width={"200px"} draggable="false" className='mx-auto'/>
          <input className='bg-black text-white p-2 rounded-lg' type="text"  placeholder='Enter Your Name' required/>
          <input className='bg-black text-white p-2 rounded-lg w-[20rem]' type="password"  placeholder='Enter Your Password'required/>
          <button className='rounded-lg bg-black w-[10rem] mx-auto p-1'>Login</button>
        </form>
      </dir>

    </div>
  )
}

export default Login