import React from 'react';

const TickerTap: React.FC = () => {
  return (
    <div
      style={{
        height: '40px',
        backgroundColor: '#F6F6F6',
        overflow: 'hidden',
        boxSizing: 'border-box',
        borderRadius: '4px',
        textAlign: 'right',
        lineHeight: '14px',
        blockSize: '62px',
        fontSize: '12px',
        fontFeatureSettings: 'normal',
        textSizeAdjust: '100%',
        padding: '1px',
        margin: '0px',
        width: '100%',
        borderBlock: 'none'
      }}
    >
      <div
        style={{
          height: '100%',
          padding: '0px',
          margin: '0px',
          width: '100%',
        }}
      >
        <iframe
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=no"
          width="100%"
          height="100%"
          scrolling="auto"
          marginWidth={0}
          marginHeight={0}
          frameBorder={0}
          style={{ border: 0, margin: 0, padding: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default TickerTap;
