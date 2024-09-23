import { useEffect } from 'react';
import BitcoinPrice from '../BitCoinPrice';

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        "width": "100%",
        "height": 500, 
        
        "symbol": "BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "toolbar_bg": "#000000",
        "enable_publishing": false,
        "hide_side_toolbar": true,
        "allow_symbol_change": true,
          "hide_volume": true,
        "studies": [],
        "withdateranges": true,
         "hide_top_toolbar": true,
        "container_id": "tradingview_btcusd_chart"
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
   <>
   <BitcoinPrice />
    <div id="tradingview_btcusd_chart">
      
    </div>
   </>
  );
};

export default TradingViewChart;
