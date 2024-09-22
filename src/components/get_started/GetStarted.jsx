import logo from '../../assets/Frame.png'
import arrow from '../../assets/arrow-right.png'
import TrendingCoins from './TrendingCoins'
const GetStarted = () => {
  return (
    <div>
        <div className="bg-primary max-w-sm w-full mx-auto rounded-xl px-4 py-8 space-y-6">
            <h2 className='text-center text-white font-bold text-2xl'>Get Started with KoinX for FREE</h2>
            <p className='text-gray-200'>With our range of features that you can equip for free,
            KoinX allows you to be more educated and aware of your tax reports.</p>
            <img src={logo} alt="logo" className='mx-auto w-32'/>
      
                <button className='bg-white text-slate-950 px-4 py-2 rounded-md mx-auto flex items-center font-semibold text-lg'>Get Started for FREE 
                    <img src={arrow} alt="arrow" className='ml-2'/>                     
                </button>
        </div>
        <TrendingCoins />
    </div>
  )
}

export default GetStarted