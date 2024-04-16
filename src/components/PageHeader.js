import React from 'react';
import '../styles/PageHeader.css';





function PageHeader() {
  return (
    <section>
      <h1>A new way to notebook</h1>
      <p>Full SQL and Python support. Fast, scalable execution. Integrated AI assist. Powerful app builder.</p>
      <div className='button-container'>
      <a href='https://google.com' className='button'>Get started for free</a>
      <a href='https://google.com' className='button'>Talk to us</a>
      </div>
    </section>
  );
}

export default PageHeader;
