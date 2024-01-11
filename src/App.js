import './App.css';
import {useEffect, useRef, useState} from 'react';

function App() {
  const elementRef = useRef(null);
  const [os, setOs] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [noOfOs, setNoOfOs] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setNoOfOs(Math.max(scrollPosition, 1));
  }, [scrollPosition]);

  useEffect(() => {
    const _os = [];
    for (let i = 0; i < noOfOs; i++) {
      _os.push('O');
    }
    setOs(_os);
  }, [noOfOs]);

  return (
      <div className="App" ref={elementRef}>
        <p className={'b'}>B</p>
        {os.map((o, index) => {
          // I know, I know this isn't right :\, just being lazy.
          return <p key={index + '-O'} className={'o'}>{o}</p>;
        })}

        <p className="red">RED</p>


      </div>
  );
}

export default App;
