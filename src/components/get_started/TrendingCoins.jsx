import { useEffect } from 'react';


import { useState } from 'react';
import upArrow from '../../assets/polygon.png';
const TrendingCoins = () => {
     const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 3));
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };
    fetchTrendingCoins();
  }, []);

 
  return (
    <div className="bg-white p-5 rounded-xl w-full mx-auto">
        <h2 className="text-xl font-bold mb-3">Trending Coins (24h)</h2>
        <ul className='space-y-3'>
            {
                trendingCoins?.map((coin) => (
                    <li className="flex justify-between items-center" key={coin?.item.id}>
                <div className="flex items-center gap-2 ">
                    <img src={coin?.item.thumb} alt={coin?.item?.name} className='size-5 object-cover'/>
                    <span className='font-semibold'>{coin?.item?.name}({coin.item.symbol.toUpperCase()})</span>
                </div>
                <div className="flex items-center gap-1 bg-green-100/70 py-[2px] px-[5px] rounded-md">
                    <img src={upArrow} alt="upArrow" className='size-2'/>
                    <span className='text-green-500 font-medium text-sm'>{coin?.item?.score}%</span>
                </div>
            </li>
                ))
            }
            
        </ul>
    </div>
  )
}

export default TrendingCoins