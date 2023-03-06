import { useNavigate } from "react-router-dom"

const RecipeCard = ({data}) => {
  const navigate=useNavigate()

  return (
    <div className='flex gap-4 flex-col text-xl font-bold justify-center items-center mt-5 w-[30rem] text-center'>
      <p className="text-gray-400">{data.recipe.label}</p>
      <img src={data.recipe.image} width="200px" className='rounded-lg' alt="imic" />
      <button className='rounded-lg bg-gray-400 text-[#3C464F] p-2 w-[7rem] mt-2' onClick={()=>navigate("/details",{state:data.recipe})}>Details</button>
    </div>
  )
}

export default RecipeCard