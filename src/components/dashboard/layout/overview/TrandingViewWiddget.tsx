import React, { useEffect, useRef } from 'react';

interface TradingViewWidgetProps {
  width?: string | number;
  height?: number;
  defaultColumn?: string;
  screenerType?: string;
  displayCurrency?: string;
  colorTheme?: string;
  locale?: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
  width = '95%',
  height = 400,
  defaultColumn = '',
  screenerType = 'crypto_mkt',
  displayCurrency = 'USD',
  colorTheme = 'dark',
  locale = 'en',
}) => {
  const scriptAddedRef = useRef<boolean>(false);  // Ref to track if the script has been added

  useEffect(() => {
    const container = document.getElementById('tradingview-widget-container');

    if (container && !scriptAddedRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        width,
        height,
        defaultColumn,
        screener_type: screenerType,
        displayCurrency,
        colorTheme,
        locale,
      });

      container.appendChild(script);
      scriptAddedRef.current = true;  // Mark that the script has been added
    }
    return () => {
      if (container) {
        container.innerHTML = '';  // Clear the container
        scriptAddedRef.current = false;  // Reset the ref
      }
    };
  }, [width, height, defaultColumn, screenerType, displayCurrency, colorTheme, locale]);

  return (
    <div className="tradingview-widget-container" id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
