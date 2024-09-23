import bit from '../../assets/bit.png'
import ethi from '../../assets/ethi.png'
import poly from '../../assets/poly.png'


import upArrow from '../../assets/polygon.png'
const TrendingCoins = () => {
  return (
    <div className="bg-white p-5 rounded-xl max-w-sm w-full mx-auto">
        <h2 className="text-xl font-bold mb-3">Trending Coins (24h)</h2>
        <ul className='space-y-3'>
            <li className="flex justify-between items-center">
                <div className="flex items-center gap-2 ">
                    <img src={ethi} alt="ethi" className='size-5 object-cover'/>
                    <span className='font-semibold'>Ehereum(ETH)</span>
                </div>
                <div className="flex items-center gap-1 bg-green-100/70 py-[2px] px-[5px] rounded-md">
                    <img src={upArrow} alt="upArrow" className='size-2'/>
                    <span className='text-green-500 font-medium text-sm'>1.23%</span>
                </div>
            </li>
            <li className="flex justify-between items-center">
                <div className="flex items-center gap-2 ">
                    <img src={bit} alt="ethi" className='size-5 object-cover'/>
                    <span className='font-semibold'>Bitcoin(BTC)</span>
                </div>
                <div className="flex items-center gap-1 bg-green-100/70 py-[2px] px-[5px] rounded-md">
                    <img src={upArrow} alt="upArrow" className='size-2'/>
                    <span className='text-green-500 font-medium text-sm'>15.26%</span>
                </div>
            </li>
            <li className="flex justify-between items-center">
                <div className="flex items-center gap-2 ">
                    <img src={poly} alt="polygon" className='size-5 object-cover'/>
                    <span className='font-semibold'>Polygon(MATIC)</span>
                </div>
                <div className="flex items-center gap-1 bg-green-100/70 py-[2px] px-[5px] rounded-md">
                    <img src={upArrow} alt="upArrow" className='size-2'/>
                    <span className='text-green-500 font-medium text-sm'>4.32%</span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default TrendingCoins