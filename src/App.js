import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import Header from './components/Header'
import Button from './components/Button'
import Word from './components/Word'
import Rhymes from './components/Rhymes'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  var randomWords = require('random-words');
  var rhyme = require('rhymes');

  const [currentWord, setWord] = useState("CLICK");
  const [rhymes, setRhymes] = useState(["FOR", "YOUR", "WORD"])

  const generateWord = async () => {
    var new_word = await randomWords();
    new_word = new_word.toUpperCase();
    console.log(new_word);

    setWord(new_word);
    getRhymes(new_word);
  }

  const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getRhymes = (word) => {
    var rhyme_list = rhyme(word);
    var new_rhymes = [];

    if (rhyme_list.length < 1) {
      setRhymes(["No rhymes in database D:"])
      return;
    }
    else if (rhyme_list.length < 3) {
      rhyme_list.forEach(item => {
        new_rhymes.unshift(item['word'].toUpperCase())
      })
    }
    else {
      for(var i = 0; i < 3; i++) {
        var randInt = randomInt(1, rhyme_list.length)
        var lastWord = "";
        var rh = rhyme_list[randInt]['word'].toUpperCase()

        if (new_rhymes.includes(rh) || lastWord.charAt(0) === rh.charAt(0) || rh === word) {
          i -= 1;
          lastWord = "";
        } else {
          new_rhymes.unshift(rh)
          lastWord = rh
        }
      }
    }

    setRhymes(new_rhymes);
  }

  return (
    <HashRouter basename='/'>
      <div className="App">
        <Header className = "head"/>
        <Route path = '/' exact render = {(props) => (
          <>
            <Button class = "btn" divName = 'btndiv' text = "Let's Go!" onClick = {generateWord}/>

            <Word word = {currentWord} class = "wrd"/>
            <Rhymes rhymes = {rhymes} class = "subwrds"/>
            <Footer />
          </>
        )} />

        <Route path = '/about' exact component = {About} />
      </div>
    </HashRouter>
  );
}

export default App;
