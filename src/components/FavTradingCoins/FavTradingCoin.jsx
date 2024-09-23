import { useEffect, useState } from 'react';
// Import Swiper React components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

const FavTradingCoin = ({title}) => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        setTrendingCoins(data.coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };
    fetchTrendingCoins();
  }, []);

  
  return (
    <div className='bg-white p-4 '>
      <h1 className='text-xl font-medium'>{title}</h1>
     <div className='w-full'>
        <Swiper
        spaceBetween={5}
        slidesPerView={2}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
       
      {
        trendingCoins.slice(0, 8).map((coin) => (
          <SwiperSlide key={coin.id} className=' p-2 m-4 border rounded-md'>
            <div className=''>
             <div className='flex items-center gap-2'>
               <img
                
                src={coin.item.thumb}
                alt={coin.item.name}
                className='size-6 rounded-full'
              />
             <p className='text-sm'>{coin.item.name} <span className='text-green-500 text-xs'>{coin.item.score}%</span></p>
             </div>
             <p className='font-medium'>{coin.item.data.price.toFixed(6)}</p>
              <div>
               
                <img src={coin.item.data.sparkline} alt="spark" className='w-16 mx-auto' />
              </div>

            </div>
          </SwiperSlide>
        ))
      }
      </Swiper>
     </div>
    </div>
  )
}

export default FavTradingCoin