import React from 'react'
import firstFood from '../Images/int-1.jpeg'
import firstFood1 from '../Images/int-2.jpeg'
import firstFood2 from '../Images/int-3.jpeg'
import firstFood3 from '../Images/int-4.jpeg'
import firstFood4 from '../Images/int-5.jpeg'
import firstFood5 from '../Images/int-6.jpeg'
import firstFood6 from '../Images/int-7.jpeg'
import firstFood7 from '../Images/int-8.jpeg'
import firstFood8 from '../Images/int-9.jpeg'
import firstFood9 from '../Images/int-10.jpeg'
import firstFood10 from '../Images/int-11.jpeg'
import firstFood11 from '../Images/int-12.jpeg'
import firstFood12 from '../Images/int-13.jpeg'
import firstFood13 from '../Images/int-14.jpeg'
import firstFood14 from '../Images/int-15.jpeg'
import firstFood15 from '../Images/int-16.jpeg'
import firstFood16 from '../Images/int-17.jpeg'
import firstFood17 from '../Images/int-18.jpeg'
import firstFood18 from '../Images/int-19.jpeg'
import firstFood19 from '../Images/int-20.jpeg'
import firstFood20 from '../Images/int-21.jpeg'
import firstFood21 from '../Images/int-22.jpeg'
import firstFood22 from '../Images/int-23.jpeg'
import firstFood23 from '../Images/int-24.jpeg'
import firstFood24 from '../Images/int-25.jpeg'
import firstFood25 from '../Images/int-26.jpeg'
import firstFood26 from '../Images/int-27.jpeg'
import firstFood27 from '../Images/int-28.jpeg'
import firstFood28 from '../Images/int-29.jpeg'
import firstFood29 from '../Images/int-30.jpeg'
import firstFood30 from '../Images/int-31.jpeg'
import firstFood31 from '../Images/int-32.jpeg'
import firstFood32 from '../Images/int-33.jpeg'
import firstFood33 from '../Images/int-34.jpeg'
import Productcall from '../Productlist/Productcall'
import '../Productlist/product.css'

function Product() {
const proObj = [
  { name: "Borges", prices: "$10",  images: firstFood },
  { name: "International Food", prices: "$20",  images: firstFood1 },
  { name: "International Food", prices: "$12",  images: firstFood2 },
  { name: "International Food", prices: "$12",  images: firstFood3 },
  { name: "Small Chop", prices: "$9",  images: firstFood4 },
  { name: "Borges & coffee", prices: "$8",  images: firstFood5 },
  { name: "Borges & coffee", prices: "$6",  images: firstFood6 },
  { name: "firstFood", prices: "$26",  images: firstFood7 },
  { name: "firstFood", prices: "$23",  images: firstFood8 },
  { name: "FuFu & Egusi", prices: "$10",  images: firstFood9 },
  { name: "Efo iro & garri", prices: "$13",  images: firstFood10 },
  { name: "Ofada Rice", prices: "$11",  images: firstFood11 },
  { name: "Fried Rice & dodo", prices: "$8",  images: firstFood12 },
  { name: "Bean & dodo", prices: "$16",  images: firstFood13 },
  { name: "Amala and Ewedu", prices: "$14",  images: firstFood14 },
  { name: "Semo & Egusi", prices: "$13",  images: firstFood15 },
  { name: "Fried Rice & Chicken", prices: "$12",  images: firstFood16 },
  { name: "Garri & Chicken", prices: "$12",  images: firstFood17 },
  { name: "Vegetable & Semo", prices: "$34",  images: firstFood18 },
  { name: "Vegetable and garri", prices: "$15",  images: firstFood19 },
  { name: "Egusi & Fufu", prices: "$18",  images: firstFood20 },
  { name: "Egusi & Fufu", prices: "$19",  images: firstFood21 },
  { name: "Jolof rice & Chicken ", prices: "$20",  images: firstFood22 },
  { name: "Spegheti & Fish", prices: "$25",  images: firstFood23 },
  { name: "Jolof rice and Chicken", prices: "$29",  images: firstFood24 },
  { name: "While rice & Meat", prices: "$24",  images: firstFood25 },
  { name: "Portage & fish", prices: "$27",  images: firstFood26 },
  { name: "firstFood", prices: "$22",  images: firstFood27 },
  { name: "Garri", prices: "$21",  images: firstFood28 },
  { name: "Jolof and dodo and chicken", prices: "$13",  images: firstFood29 },
  { name: "Bean & dodo", prices: "$29",  images: firstFood30 },
  { name: "firstFood", prices: "$22",  images: firstFood31 },
  { name: "firstFood", prices: "$32",  images: firstFood32 },
  { name: "firstFood", prices: "$12",  images: firstFood33 },
] 

const ProductDetails = proObj.map((item) => {
  // console.log(item)
  return(
    <div >
     <Productcall name = {item.name} prices = {item.prices} images = {item.images} />   
    </div>
  )
})


  return (
    <div>
        <div className='product_show'>
        {ProductDetails}
        </div>

    </div>
  )
}

export default Product