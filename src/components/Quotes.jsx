import React, { useState } from "react";
import { useEffect } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { yellow } from "@material-ui/core/colors";

export const Quotes = () => {
  const [citas, setCitas] = useState([]);
  const [quotes, setQuotes] = useState(
    "The weak can never forgive. Forgiveness is the attribute of the strong."
  );
  const [autor, setAutor] = useState("Mahatma Gandhi");
  const [random, setRandom] = useState(0);

  const tweetURL = `https://twitter.com/intent/tweet?text=${quotes} - ${autor}`;

  var colors = [
    "#5eb9a7",
    "#65da96",
    "#133455",
    "#b17b23",
    "#e74c3c",
    "#d38fee",
    "#279fe6",
    "#534849",
    "#a70923",
    "#5c5920",
    "#a7d650",
    "#9c5d55",
  ];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    let data = await response.json();

    setCitas(data.quotes);
  };

  let changeQuote = () => {
    let posicion = 0;
    setRandom(Math.floor(Math.random() * colors.length));
    posicion = Math.floor(Math.random() * citas.length);
    setQuotes(citas[posicion] !== undefined ? citas[posicion].quote : "");
    setAutor(citas[posicion] !== undefined ? citas[posicion].author : "");
  };

  return (
    <div id="quote-box" style={{ backgroundColor: colors[random] }}>
      <div id="text">
        <span>"{quotes}"</span>
      </div>

      <div id="author">
        <span>- {autor}</span>
      </div>
      <div id="tw-and-btn">
        <div>
          <a
            id="tweet-quote"
            href={tweetURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon
              style={{
                color: "chocolate",
                backgroundColor: yellow[200],
                fontSize: 30,
              }}
            />
          </a>
        </div>
        <button
          onClick={changeQuote}
          id="new-quote"
          style={{ color: "chocolate", backgroundColor: yellow[200] }}
        >
          new quote
        </button>
      </div>
    </div>
  );
};
