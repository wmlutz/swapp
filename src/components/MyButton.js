import React from 'react';

function MyButton({children, color, onClick, textColor, margin}) {
  return (
    <button style={{
        backgroundColor: color,
        color: textColor,
        padding: '10px 20px',
        margin: margin,
        fontSize: 16
      }} onClick={onClick}>
      {children}
    </button>
  )
}

MyButton.defaultProps = {
  children: 'Click Me',
  color: 'blue',
  textColor: 'white',
  margin: 0,
  onClick: () => console.log('clicked button')
};

export default MyButton