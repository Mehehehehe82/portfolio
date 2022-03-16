import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 3
  },
  wordsPerSentence: {
    max: 7,
    min: 6
  }
});
function App(): JSX.Element {
	/** Current artifact id */
	let key = 1
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Evan Bishop
        </p>
      </header>
			{data.data.map((dat:any) => (
			<div className="App-section" key={key++}>
				<h1>Artifact {key}</h1>
				<div>
					<h2>{dat.head||"missing head"}</h2>
					<p>{dat.text||("Missing \"text\" attribute. "+lorem.generateParagraphs(1))}</p>
					{dat.imageURI && <img src={dat.imageURI} alt="" />}
				</div>
			</div>))}
    </div>
  );
}

export default App;
