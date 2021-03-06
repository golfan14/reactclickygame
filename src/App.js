import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Thumbnail from './components/Thumbnail';
import Footer from './components/Footer';
import pictures from './pictures.json';
import Style from './Style.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentscore: 0,
      highscore: 0,
      pictures: pictures,
    }
    this.isClickSuccessful = this.isClickSuccessful.bind(this)
  }
  

  thumbnails() {
    const thumbnails = this.state.pictures.sort(function() { return 0.5 - Math.random() }).map((picture, i) => 
      <Thumbnail image={picture.image} key={i} successfulClickFn = {this.isClickSuccessful}/>)
    return thumbnails
  }

  increaseScore() {
    let state = {...this.state}
    state.currentscore++;
    if (state.currentscore > state.highscore) {
      state.highscore = state.currentscore;
    } 
    this.setState(state)
  }

  resetScore() {
    this.setState({ currentscore: 0 })
  }

  isClickSuccessful(success) {
    if (success) {
      this.increaseScore()
    } else {
      this.resetScore()
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron
          currentscore={this.state.currentscore}
          highscore={this.state.highscore}
        />
        <div className="container" id="thumbnail" >
          {this.thumbnails()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
