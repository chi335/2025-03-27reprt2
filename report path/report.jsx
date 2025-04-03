import React from 'react';

// StockInfo 컴포넌트는 주식 이름, 지수, 변동률을 props로 받아서 표시합니다.
function StockInfo({ name, index, change }) {
  const changeClass = change.startsWith('-') ? 'down' : 'up';  // 변동률이 음수일 경우 'down' 클래스 적용

  return (
    <div className="stock-info">
      <h2>{name}</h2>
      <p>현재 지수: <span className={changeClass}>{index}</span></p>
      <p>변동률: <span className={changeClass}>{change}</span></p>
    </div>
  );
}
