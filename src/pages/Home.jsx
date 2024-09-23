import Bitcoin from "../components/bitcoin/Bitcoin"
import Team from "../components/team/Team"
import Tokenomic from "../components/tokenomics/Tokenomic"

const Home = () => {
  return (
    <div className="max-w-[1040px] mx-auto w-full px-3">
    <Bitcoin />
    <Team />
    <Tokenomic />
   
    </div>
  )
}

export default Home