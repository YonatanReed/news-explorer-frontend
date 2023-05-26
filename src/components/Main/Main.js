import React from 'react';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NothingFoundPage from '../NothingFoundPage/NothingFoundPage';

function Main(props) {
  return (
    <main className='main'>
      {props.isNotFoundOpen && <NothingFoundPage />}
      {props.isLoading && <Preloader />}
      <About />
    </main>
  );
}

export default Main;
