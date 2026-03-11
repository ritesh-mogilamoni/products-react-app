import { useLocation } from "react-router"

function Product() {

  const {state}=useLocation()

  return (
    <div className="flex">
      <div className="w-2/5 p-10">
        <img className="" src={state?.product?.image} alt="" /></div>
      <div>
        <p className="text-3xl p-3 m-3">{state?.product?.title}</p>
        <p className="m-3 p-3">{state?.product?.description}</p>
        <p className="text-2xl m-4 p-3">${state?.product?.price}</p>
        <p className=" bg-fuchsia-950 p-2 m-6 inline text-white rounded">{state?.product?.category}</p>
      </div>
    </div>
  )
}

export default Product