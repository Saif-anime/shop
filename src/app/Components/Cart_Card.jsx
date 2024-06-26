'use client'
import React from 'react'
import Image from 'next/image';


const Cart_Card = ({cartItems}) => {

 

  

    return (
        <>

        {
        console.log(cartItems)
        }

          
                    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-left font-semibold">Product</th>
                                    <th className="text-left font-semibold">Price</th>
                                    <th className="text-left font-semibold">Quantity</th>
                                    <th className="text-left font-semibold">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-4">
                                        <div className="flex items-center">
                                            <Image className="h-16 w-16 mr-4" src={cartItems.product_Img} alt="Product image" />
                                            <span className="font-semibold">{cartItems.product_name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4">$ {cartItems.product_price}</td>
                                    <td className="py-4">
                                        <div className="flex items-center">
                                            <button className="border rounded-md py-2 px-4 mr-2">-</button>
                                            <span className="text-center w-8">{cartItems.quantity}</span>
                                            <button className="border rounded-md py-2 px-4 ml-2">+</button>
                                        </div>
                                    </td>
                                    <td className="py-4">$ {cartItems.product_price}</td>
                                </tr>
                                {/* <!-- More product rows --> */}
                            </tbody>
                        </table>
                    </div>



        </>
    )
}

export default Cart_Card