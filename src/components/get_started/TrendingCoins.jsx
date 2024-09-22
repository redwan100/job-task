import ethi from '../../assets/ethi.png'
import upArrow from '../../assets/polygon.png'
const TrendingCoins = () => {
  return (
    <div className="bg-white p-5 rounded-xl max-w-sm w-full mx-auto">
        <h2 className="text-xl font-bold mb-3">Trending Coins (24h)</h2>
        <ul>
            <li className="flex justify-between items-center">
                <div className="flex items-center gap-2 ">
                    <img src={ethi} alt="ethi" />
                    <span className='font-semibold'>Ehereum(ETH)</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100/70 py-[2px] px-[5px] rounded-md">
                    <img src={upArrow} alt="upArrow" />
                    <span className='text-green-500 font-semibold'>1.23%</span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default TrendingCoins