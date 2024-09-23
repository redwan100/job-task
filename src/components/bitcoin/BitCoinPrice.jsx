import { useEffect, useState } from 'react';
import bit from "../../assets/bit.png";
import uparrow from "../../assets/polygon.png";

const BitcoinPrice = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true'
        );
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error('Error fetching bitcoin data:', error);
      }
    };
    fetchBitcoinData();
  }, []);

  
  return (
    <div className='bg-white p-4'>
        <div className="">
        <div className='flex items-center gap-10 mb-6'>
           <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
                 <img src={bit} alt="bitcoin img" />
             <span className='font-semibold'>Bitcoin</span>
            </div>
            <span className='text-xs text-gray-500 font-semibold'>BTC</span>
           </div>
            <span className='p-1 bg-slate-500 text-gray-100 text-xs font-medium rounded'>Rank #1</span>
        </div>
        </div>
      {bitcoinData ? (
        <div>
            <div className='flex items-center gap-10'>
            <p className='text-2xl font-semibold'> ${bitcoinData.usd}</p>
          <div className='flex items-center gap-3 text-sm'>
            <p className='flex items-center gap-1 bg-green-100/80 text-green-600 font-medium p-[2px_5px] rounded'>
                <img src={uparrow} alt="" />
                {bitcoinData.usd_24h_change.toFixed(2)}%</p>
            <span className='text-gray-400 text-xs font-medium'>(24H)</span>
          </div>
        </div>
          <p className='text-sm text-gray-600 font-medium'>₹{bitcoinData.inr}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BitcoinPrice;
