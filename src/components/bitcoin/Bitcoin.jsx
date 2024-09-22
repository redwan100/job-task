import AboutBitcoin from "./AboutBitcoin"
import HoldingBitcoin from "./HoldingBitcoin"

const Bitcoin = () => {
  return (
    <div className="w-full bg-white rounded-md overflow-hidden p-4">
        <AboutBitcoin />
        <HoldingBitcoin />
    </div>
  )
}

export default Bitcoin