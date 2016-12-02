import React from 'react';

const Root = () => {
  return (
    <div>
      <h1>test</h1>
      <button onClick= {() => {
        alert(1);
      }}
      >click</button>
    </div>
  )
}

export default Root;
