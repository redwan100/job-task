import TradingViewChart from "../components/bitcoin/charts/TradingViewChart"

const Home = () => {
  return (
    <div className="max-w-[1040px] mx-auto w-full px-3">
     
   <div className="w-full bg-white rounded-md overflow-hidden">
     <TradingViewChart />
   </div>
    </div>
  )
}

export default Home