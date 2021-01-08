import "./App.css";
import Main from "./Main";
import Nav from "./Nav";
import Section from "./Section";

import { useEffect, useState } from "react";
import { getRSS } from "./services/seattle-times";

function App() {
  const [feed, setList] = useState([]);
  console.log(`start App`);

  useEffect(() => {
    console.log(`useEffect`);
    let mounted = true;

    getRSS().then((rss) => {
      console.log(`getRSS Response`, rss);
      if (mounted) {
        setList(feed);
      }
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Main />
      {[1, 2, 3].map((num) => (
        <Section num={num} />
      ))}
      <section />
      <article />
      <aside />
      <footer />
    </div>
  );
}
// https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/
export default App;
