import React, { Component } from "react";
import BoxClass from "../../component/box/BoxClass";
import "./RockScissorsPaper.css";

const choice = {
  rock: {
    name: "Rock",
    img: "data:image/jpeg;base64,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",
  },
  scissors: {
    name: "Scissors",
    img: "data:image/jpeg;base64,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",
  },
  paper: {
    name: "Paper",
    img: "data:image/jpeg;base64,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",
  },
};

export default class ClassRockScissorsPaper extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };
  randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  judgement = (user, computer) => {
    // user == computer tie
    // user == rock, computer == "scissors" user 이긴거지
    // user == "rock" computer == paper   user 진거지
    // user == scissors computer paper    user 이긴거지
    // user == scissors computer rock     user 진거지
    // user == paper computer rock   user 이긴거지
    // user paper computer scissors user 진거지

    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };

  render() {
    return (
      <div>
        <div className="main">
          <h1>클래스형</h1>
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}
