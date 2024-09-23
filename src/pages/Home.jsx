import AnalystEstimates from "../components/analystEstimates/AnalystEstimates"
import AboutBitcoin from "../components/bitcoin/AboutBitcoin"
import TradingViewChart from "../components/bitcoin/charts/TradingViewChart"
import GetStarted from "../components/get_started/GetStarted"
import Team from "../components/team/Team"
import Tokenomic from "../components/tokenomics/Tokenomic"

const Home = () => {
  return (
    <div className="max-w-[1140px] mx-auto w-full px-3 pb-8">

      <div className="grid sm:grid-cols-[1fr_20rem] gap-3 w-full">
       <div>
         <TradingViewChart />
          <div className="my-3">

     <AnalystEstimates />
     </div>
     <div className="my-4">
      <AboutBitcoin />
     </div>
     <div>
      <Tokenomic />
     </div>
     <div>
      <Team />
     </div>
     <div className="sm:hidden">
       <GetStarted />
     </div>
       </div>
       <div className="hidden sm:block">
         <GetStarted />
       </div>
    </div>
     
     {/* TODO: Performance */}
     {/* TODO: Sentiment */}
    
    </div>
  )
}

export default Home