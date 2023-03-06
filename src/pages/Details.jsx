import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"

const Details = () => {
  const {state:detail}=useLocation()
  console.log(detail);
  return (
    <div className="min-h-screen bg-[#3C464F]">
      <Navbar/>
      <h1 className="text-3xl text-gray-400 text-center mt-5 font-bold">{detail.label}</h1>
      <div className="flex justify-evenly text-gray-400 items-center h-[30rem] flex-wrap ">
        <div>
          <p className=" font-semibold text*xl m-5">NUTRIENS</p>
          <p>
             {detail.totalNutrients.CA.label} :{' '}
             {Math.round(detail.totalNutrients.CA.quantity)}
             {detail.totalNutrients.CA.unit}
          </p>
           <p>
             {detail.totalNutrients.CHOCDF.label} :{' '}
             {Math.round(detail.totalNutrients.CHOCDF.quantity)}/{detail.totalNutrients.CHOCDF.unit}
           </p>
           <p>
            {detail.totalNutrients.CHOLE.label} :{' '}
             {Math.round(detail.totalNutrients.CHOLE.quantity)}
             {detail.totalNutrients.CHOLE.unit}
           </p>
           <p>
             {detail.totalNutrients.ENERC_KCAL.label} :{' '}
             {Math.round(detail.totalNutrients.ENERC_KCAL.quantity)}
             {detail.totalNutrients.ENERC_KCAL.unit}
           </p>
           <p>{detail.totalWeight}</p>
           <p>Calories: {Math.round(detail.calories)}</p>
              {detail.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
               {item.label} : {Math.round(item.total)}
             </p>))}             
         </div>
           <div>
              <img src={detail.image} alt={detail.label} width="200px"
              className="rounded-lg"/>
          </div>
          <ul className="mt-5">
            <p className="font-semibold text-xl">RECIPE</p>
            {detail.ingredientLines.map((item,i)=>(
              <li key={i}>{item}</li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Details