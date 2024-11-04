import React from 'react'
function MainPage(){
    return(
        <>
        <div className='flex flex-row mt-11 mx-16'>
            <div className='mr-36'>
                <h1 className='text-7xl font-extrabold mb-4'>YOUR FEET<br />DESERVE<br />THE BEST</h1>
                <p className='text-semibold text-xs text-gray-600 mb-4'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />THE BEST AND WE'RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
                <div className='flex text-white mb-4'>
                <button className='mr-4 border bg-red-600 p-1'>Shop Now</button>
                <button className=' border p-1 text-semibold text-gray-600'>Category</button>
                </div>
                <p>Also available on</p>
                <div className='flex '>
                    <img className='mr-4' src="./public/amazon.png" alt="" />
                    <img src="./public/flipkart.png" alt="" />
                </div>
                
            </div>
            <div className='h-full w-5/12'>
                <img className='h-full' src="./public/shoe_image.png" alt="" />
            </div>
        </div>

        </>
    )

}

export default MainPage