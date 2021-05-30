import React, { Component } from "react";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import spock from "../assets/spock.png";
import lizard from "../assets/lizard.png";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.startGame = this.startGame.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.repeat = this.repeat.bind(this);
    this.displayTimer = this.displayTimer.bind(this);
    this.deductTimer = this.deductTimer.bind(this);
    this.randomPicker = this.randomPicker.bind(this);

    this.state = {
      player1_score: 0,
      player2_score: 0,
      player1_selection: 0,
      player2_selection: 0,
      player1_name: "Computer",
      player2_name: "Sheldon",
      count: 5,
      timer: 5,
      countdown: 5,
    };
  }

  randomPicker() {
    const num = ((Math.floor(Math.random() * 100) + 1) % 5) + 1;
    this.setState({ player1_selection: num });
    this.checkWinner();
  }

  repeat() {
    if (this.state.count != 0) {
      setTimeout(this.randomPicker, this.state.countdown * 1000);
    }
  }

  handleSelection(selection) {
    switch (selection) {
      case 1:
        return <img src={rock} height="150" width="150" alt="player" />;
      case 2:
        return <img src={paper} height="150" width="150" alt="player" />;
      case 3:
        return <img src={scissors} height="150" width="150" alt="player" />;
      case 4:
        return <img src={spock} height="150" width="150" alt="player" />;
      case 5:
        return <img src={lizard} height="150" width="150" alt="player" />;

      default:
        return <></>;
    }
  }

  checkWinner() {
    this.setState((prev) => {
      return { count: prev.count - 1 };
    }, this.repeat);

    if (this.state.player1_selection == "") {
      switch (this.state.player2_selection) {
        case 1:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 2:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 3:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 4:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 5:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;

        default:
          console.log("No one attempted");
      }
    }

    if (this.state.player1_selection == 1) {
      switch (this.state.player2_selection) {
        case 1:
          console.log("Draw");
          break;
        case 2:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 3:
          console.log("player 1 wins");
          this.setState((prev) => {
            return { ...prev, player1_score: prev.player1_score + 10 };
          });
          break;
        case 4:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 5:
          console.log("player 1 wins");
          this.setState((prev) => {
            return { ...prev, player1_score: prev.player1_score + 10 };
          });
          break;

        default:
          console.log("Player 1 wins....player 2 did not attempt");
      }
    }

    if (this.state.player1_selection == 2) {
      switch (this.state.player2_selection) {
        case 1:
          console.log("player 1 wins");
          this.setState((prev) => {
            return { ...prev, player1_score: prev.player1_score + 10 };
          });
          break;
        case 2:
          console.log("Draw");
          break;
        case 3:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 4:
          console.log("player 1 wins");
          this.setState((prev) => {
            return { ...prev, player1_score: prev.player1_score + 10 };
          });
          break;
        case 5:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;

        default:
          console.log("Player 1 wins....player 2 did not attempt");
      }
    }

    if (this.state.player1_selection == 3) {
      switch (this.state.player2_selection) {
        case 1:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 2:
          console.log("player 1 wins");
          this.setState((prev) => {
            return { ...prev, player1_score: prev.player1_score + 10 };
          });
          break;
        case 3:
          console.log("Draw");
          break;
        case 4:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 5:
          console.log("player 1 wins");
          this.setState((prev) => {
            return { ...prev, player1_score: prev.player1_score + 10 };
          });
          break;

        default:
          console.log("Player 1 wins....player 2 did not attempt");
      }
    }

    if (this.state.player1_selection == 4) {
      switch (this.state.player2_selection) {
        case 1:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 2:
          console.log("player 1 wins");
          this.setState((prev) => {
            return { ...prev, player1_score: prev.player1_score + 10 };
          });
          break;
        case 3:
          console.log("player 1 wins");
          this.setState((prev) => {
            return { ...prev, player1_score: prev.player1_score + 10 };
          });
          break;
        case 4:
          console.log("Draw");
          break;
        case 5:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;

        default:
          console.log("Player 1 wins....player 2 did not attempt");
      }
    }

    if (this.state.player1_selection == 5) {
      switch (this.state.player2_selection) {
        case 1:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 2:
          console.log("player 1 wins");
          this.setState((prev) => {
            return { ...prev, player1_score: prev.player1_score + 10 };
          });
          break;
        case 3:
          console.log("player 2 wins");
          this.setState((prev) => {
            return { ...prev, player2_score: prev.player2_score + 10 };
          });
          break;
        case 4:
          console.log("player 1 wins");
          this.setState((prev) => {
            return { ...prev, player1_score: prev.player1_score + 10 };
          });
          break;
        case 5:
          console.log("Draw");
          break;

        default:
          console.log("Player 1 wins....player 2 did not attempt");
      }
    }
  }

  startGame() {
    setTimeout(this.randomPicker, this.state.countdown * 1000);
    this.displayTimer();
  }

  deductTimer() {
    if (this.state.timer != 0) {
      this.setState((prev) => {
        return {
          timer: prev.timer - 1,
        };
      });
    } else {
      if (this.state.count == 0) {
        console.log("game finishes");
        clearInterval(this.gameTimer);
        if (this.state.player1_score > this.state.player2_score) {
          alert("Player 1 wins");
          this.setState({
            timer: 5,
            count: 5,
            player1_score: 0,
            player2_score: 0,
            player1_selection: 0,
            player2_selection: 0,
          });
        } else if (this.state.player1_score > this.state.player2_score) {
          alert("Player 2 wins");
          this.setState({
            count: 5,
            timer: 5,
            player1_score: 0,
            player2_score: 0,
            player1_selection: 0,
            player2_selection: 0,
          });
        } else if (this.state.player1_score == this.state.player2_score) {
          alert("Game Draw");
          this.setState({
            count: 5,
            timer: 5,
            player1_score: 0,
            player2_score: 0,
            player1_selection: 0,
            player2_selection: 0,
          });
        }
      } else {
        this.setState(
          { timer: 5, player1_selection: 0, player2_selection: 0 },
          this.deductTimer
        );
      }
    }
  }

  displayTimer() {
    this.gameTimer = setInterval(this.deductTimer, 1000);
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontFamily: "fantasy", fontSize: "4em" }}>
          <b>Rock Paper Scissors Spock Lizard</b>
        </div>
        <div>
          <button onClick={this.startGame}>Start</button>
        </div>
        <div
          style={{
            padding: "5%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>
            <div>{this.state.player1_name}</div>
            <div>{this.state.player1_score}</div>
          </div>

          <div>
            <div>V/S</div>
          </div>

          <div>
            <div>{this.state.player2_name}</div>
            <div>{this.state.player2_score}</div>
          </div>
        </div>

        <div
          style={{
            padding: "5%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ height: "30vh", width: "30vw" }}>
              {this.handleSelection(this.state.player1_selection)}
            </div>
          </div>

          <div>
            <div>{this.state.timer}</div>
          </div>

          <div>
            <div style={{ height: "30vh", width: "30vw" }}>
              {this.handleSelection(this.state.player2_selection)}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={rock}
              height="100"
              width="100"
              alt="rock"
              onClick={() => {
                this.setState({ player2_selection: 1 });
              }}
            />
            <div style={{ fontFamily: "fantasy" }}>Rock</div>
          </div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={paper}
              height="100"
              width="100"
              alt="paper"
              onClick={() => {
                this.setState({ player2_selection: 2 });
              }}
            />
            <div style={{ fontFamily: "fantasy" }}>Paper</div>
          </div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={scissors}
              height="100"
              width="100"
              alt="scissors"
              onClick={() => {
                this.setState({ player2_selection: 3 });
              }}
            />
            <div style={{ fontFamily: "fantasy" }}>Scissors</div>
          </div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={spock}
              height="100"
              width="100"
              alt="spock"
              onClick={() => {
                this.setState({ player2_selection: 4 });
              }}
            />
            <div style={{ fontFamily: "fantasy" }}>Spock</div>
          </div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={lizard}
              height="100"
              width="100"
              alt="lizard"
              onClick={() => {
                this.setState({ player2_selection: 5 });
              }}
            />
            <div style={{ fontFamily: "fantasy" }}>Lizard</div>
          </div>
        </div>

        {/* <div
          class="container"
          style={{
            background: "green",
            bottom: 20,
          }}
        >
          <div class="row">
            <div >
              <img
                style={{ cursor: "pointer" }}
                src={rock}
                height="100"
                width="100"
                alt="rock"
                onClick={() => {
                  this.setState({ player2_selection: 1 });
                }}
              />
            </div>
            <div >
              <img
                style={{ cursor: "pointer" }}
                src={paper}
                height="100"
                width="100"
                alt="paper"
                onClick={() => {
                  this.setState({ player2_selection: 2 });
                }}
              />
            </div>
            <div >
              <img
                style={{ cursor: "pointer" }}
                src={scissors}
                height="100"
                width="100"
                alt="scissors"
                onClick={() => {
                  this.setState({ player2_selection: 3 });
                }}
              />
            </div>
            <div >
              <img
                style={{ cursor: "pointer" }}
                src={spock}
                height="100"
                width="100"
                alt="spock"
                onClick={() => {
                  this.setState({ player2_selection: 4 });
                }}
              />
            </div>
            <div >
              <img
                style={{ cursor: "pointer" }}
                src={lizard}
                height="100"
                width="100"
                alt="lizard"
                onClick={() => {
                  this.setState({ player2_selection: 5 });
                }}
              />
            </div>
            <div class="w-100"></div>
            <div  style={{ fontFamily: "fantasy" }}>
              Rock
            </div>
            <div  style={{ fontFamily: "fantasy" }}>
              Paper
            </div>
            <div  style={{ fontFamily: "fantasy" }}>
              Scissors
            </div>

            <div  style={{ fontFamily: "fantasy" }}>
              Spock
            </div>

            <div  style={{ fontFamily: "fantasy" }}>
              Lizard
            </div>
          </div> */}
        {/* </div> */}
      </div>
    );
  }
}
