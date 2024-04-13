import React from 'react';

const Loading = () => {
  return (
    <main>
      {[...new Array(10)].map((e, index) => (
        <div key={index} className="load-usercard">
          <h3 className="load-name"></h3>
          <p className="load-mail"></p>
          <p className='load-web'></p>
          <p></p>
        </div>
      ))}
    </main>
  );
};

export default Loading;