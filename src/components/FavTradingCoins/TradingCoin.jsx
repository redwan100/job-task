import FavTradingCoin from "./FavTradingCoin"

const TradingCoin = () => {
  return (
    <div className="w-full space-y-2 bg-white rounded-md overflow-hidden">
        <FavTradingCoin title={"You May Also Like"}/>
        <FavTradingCoin title={"Trending Coins"}/>
    </div>
  )
}

export default TradingCoin