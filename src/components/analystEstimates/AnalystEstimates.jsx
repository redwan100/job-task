import info from "../../assets/info.png"
import SentimentSlider from "../slider/SentimentSlider"
const AnalystEstimates = () => {
  return (
    <div className='w-full bg-white p-4 rounded-md'>
      <SentimentSlider />
    <div className="flex items-center gap-1 mb-4">
       <h1 className="text-xl font-medium">Analyst Estimates</h1>
       <img src={info} alt="" className="size-4"/>
    </div>
    <div className="flex items-center gap-6">
      {/* left  */}
      <div className="size-14 rounded-full text-green-600 font-medium text-lg bg-green-100 grid place-content-center">
      76%
      </div>
      {/* left  */}

      {/* right  */}
      <div>
        {/* item 1 */}
         <div className="flex items-center gap-3 text-xs text-gray-600">
          <p>Buy</p>
        <div className="flex items-center gap-1">
            <div className="w-36 h-1 bg-green-500 rounded-md"></div>76%
        </div>
         </div>
        {/* item 1 */}
        {/* item 2 */}
         <div className="flex items-center gap-3 text-xs text-gray-600">
          <p>Hold</p>
        <div className="flex items-center gap-1">
            <div className="w-16 h-1 bg-gray-400 rounded-md"></div>8%
        </div>
         </div>
        {/* item 2 */}
        {/* item 3 */}
         <div className="flex items-center gap-3 text-xs text-gray-600">
          <p>Sell</p>
        <div className="flex items-center gap-1">
            <div className="w-24 h-1 bg-red-500 rounded-md"></div>16%
        </div>
         </div>
        {/* item 3 */}
      </div>
      {/* right  */}
    </div>
    </div>
  )
}

export default AnalystEstimates