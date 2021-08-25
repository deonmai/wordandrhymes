import './App.css';
import { useState } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import Header from './components/Header'
import Button from './components/Button'
import Word from './components/Word'
import Rhymes from './components/Rhymes'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  var randomWords = require('random-words');

  const [currentWord, setWord] = useState("CLICK");
  const [rhymes, setRhymes] = useState(["FOR", "YOUR", "WORD"])

  const generateWord = async () => {
    var new_word =  await randomWords();
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

  const getRhymes = async (word) => {
    var res = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}&max=40`)
    var rhyme_list = await res.json()

    if (rhyme_list.length < 10)
    {
      res = await fetch(`https://api.datamuse.com/words?rel_nry=${word}&max=40`)
      var rhymes_two = await res.json()
      rhyme_list = rhyme_list.concat(rhymes_two)
    }

    console.log(rhyme_list)

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
        var rh = rhyme_list[randInt]['word'].toUpperCase()

        if (new_rhymes.includes(rh) || rh.includes(word) || rh.length < 2) {
          i -= 1;
        } else {
          new_rhymes.unshift(rh);
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
