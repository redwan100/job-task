// TradingViewWidget.jsx
import { memo, useEffect, useRef } from 'react';

function CoinPriceChart() {
  const container = useRef();

  useEffect(() => {
    if (!container.current.querySelector('script')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
       {
          "autosize": true,
          "symbol": "MARKETSCOM:BITCOIN",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "3",
          "locale": "en",
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "hide_top_toolbar": true,
          "withdateranges": true,
          "allow_symbol_change": false,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="" ref={container} style={{ height: "80vh", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "60vh", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"></a></div>
    </div> 
  );
}

export default memo(CoinPriceChart);


