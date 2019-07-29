import React, { Component } from "react";
import ClickyCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import clickys from "./clickys.json";

class App extends Component {

  // Setting this.state.clickys to the clickys json array
  constructor() {
    super()
    this.state = {
      clickys: clickys,
      score: 0,
      topscore: 0,
      footerTitle: "Copyright \u00A9 2019 Paul Raab"
    };
  }

  // Gameover method to reset variables, set topscore
  gameOver = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score }, function() {
        console.log(this.state.topscore);
      });
    }
    this.state.clickys.forEach(clicky => {
      clicky.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    // Filter this.state.clickys for clickys with an id equal to the id being clicked
    const clicky = this.state.clickys.filter(clicky => clicky.id === id);
    // Check if new selection
    if (parseInt(clicky[0].count) === 0) {
      clicky[0].count = parseInt(clicky[0].count) + 1;
      this.setState({ score: this.state.score + 1 }, function() {
        console.log(this.state.score);
      });

      // Randomize cards for next choice
      this.state.clickys.sort(() => Math.random() - 0.5);
      return true;
    } 
    // Clicked on a previously selected choice - game over
    else {
      this.gameOver();
      return false;
    }
  };

  // Another way to look for a pick
  clickCount1 = id => {
    this.state.clickys.find((o, i) => {
      if (o.id === id) {
        if (clickys[i].count === 0) {
          clickys[i].count = clickys[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.clickys.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
          return false;
        }
      }
      return true;
    });
    return true;
  };

  // Remove a card - not used
  removeClicky = id => {
    // Filter this.state.clickys for clickys with an id not equal to the id being removed
    const clickys = this.state.clickys.filter(clicky => clicky.id !== id);
    // Set this.state.clickys equal to the new clickys array
    this.setState({ clickys });
  };

  // Log a click - not used
  logClicky = id => {
    // Filter this.state.clickys for clickys with an id equal to the id being clicked
    const clicky = this.state.clickys.filter(clicky => clicky.id === id);
    // Set this.state.clickys equal to the new clickys array
    // this.setState({ clickys });
    console.log(clicky);
  };

  // Map over this.state.clickys and render a ClickyCard component for each clicky object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} topscore={this.state.topscore} />
        <Wrapper>
          {this.state.clickys.map(clicky => (
            <ClickyCard
              clickCount={this.clickCount}
              id={clicky.id}
              key={clicky.id}
              image={clicky.image}
            />
          ))}
        </Wrapper>
        <Footer footerTitle={this.state.footerTitle} />
      </Wrapper>
    );
  }
}

export default App;
