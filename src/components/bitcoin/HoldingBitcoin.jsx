import arrow from "../../assets/arrow-right.png"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
const HoldingBitcoin = () => {
  return (
    <div className="py-4">
        <h2 className="text-xl font-semibold mb-2">Already Holding Bitcoin?</h2>
        <div className="flex md:items-center gap-5 flex-col md:flex-row border-b border-gray-300 pb-2">
           {/* item one  */}
            <div className="flex items-center gap-5 bg-gradient-to-tl to-teal-400 from-blue-500 rounded-md p-2 flex-1">
                <img src={img1} alt="image" className="w-24"/>
                <div>
                    <h1 className="text-white text-lg font-semibold mb-2 max-w-32 w-full leading-6">Calculate your Profits</h1>
                    <button className="bg-white py-1 text-sm px-2 rounded-md text-black flex items-center font-medium">Check Now 
                        <img src={arrow} alt="arrow" className="w-3 ml-1" />
                    </button>
                </div>
            </div>
           {/* item one  */}
        
           {/* item two  */}
            <div className="flex items-center gap-5 bg-gradient-to-tl to-orange-600 from-red-600 rounded-md p-2 flex-1">
                <img src={img2} alt="image" className="w-24"/>
                <div>
                    <h1 className="text-white text-lg font-semibold mb-2 max-w-32 w-full leading-6">Calculate your Profits</h1>
                    <button className="bg-white py-1 text-sm px-2 rounded-md text-black flex items-center font-medium">Check Now 
                        <img src={arrow} alt="arrow" className="w-3 ml-1" />
                    </button>
                </div>
            </div>
           {/* item two  */}
        
        </div>
        <p className="text-gray-700 text-sm font-medium mt-3">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui

</p>
    </div>
  )
}

export default HoldingBitcoin