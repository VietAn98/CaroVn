import React from "react";
import "./App.css";
import Swal from "sweetalert2";

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(400).fill(null),
      isNext: true
    };
  }

  renderSquare = i => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.onHandleClick(i)}
      />
    );
  };

  onHandleClick = i => {
    const squares = this.state.squares.slice();
    if (squares[i] === null) {
      squares[i] = this.state.isNext ? "X" : "O";
      this.setState({
        squares: squares,
        isNext: !this.state.isNext
      });
      switch (squares[i]) {
        case "X":
          if (
            squares[i + 1] === "X" &&
            squares[i + 2] === "X" &&
            squares[i + 3] === "X" &&
            squares[i + 4] === "X" &&
            ((squares[i - 1] === "O" && squares[i + 5] !== "O") ||
              (squares[i - 1] !== "O" && squares[i + 5] === "O") ||
              (squares[i - 1] !== "O" && squares[i + 5] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",
              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1] === "X" &&
            squares[i + 2] === "X" &&
            squares[i + 3] === "X" &&
            squares[i - 1] === "X" &&
            ((squares[i - 2] === "O" && squares[i + 4] !== "O") ||
              (squares[i - 2] !== "O" && squares[i + 4] === "O") ||
              (squares[i - 2] !== "O" && squares[i + 4] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",
              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1] === "X" &&
            squares[i + 2] === "X" &&
            squares[i - 1] === "X" &&
            squares[i - 2] === "X" &&
            ((squares[i - 3] === "O" && squares[i + 3] !== "O") ||
              (squares[i - 3] !== "O" && squares[i + 3] === "O") ||
              (squares[i - 3] !== "O" && squares[i + 3] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1] === "X" &&
            squares[i - 2] === "X" &&
            squares[i - 3] === "X" &&
            squares[i + 1] === "X" &&
            ((squares[i - 4] === "O" && squares[i + 2] !== "O") ||
              (squares[i - 4] !== "O" && squares[i + 2] === "O") ||
              (squares[i - 4] !== "O" && squares[i + 2] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1] === "X" &&
            squares[i - 2] === "X" &&
            squares[i - 3] === "X" &&
            squares[i - 4] === "X" &&
            ((squares[i + 1] === "O" && squares[i - 5] !== "O") ||
              (squares[i + 1] !== "O" && squares[i - 5] === "O") ||
              (squares[i + 1] !== "O" && squares[i - 5] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          // hang doc
          if (
            squares[i + 20] === "X" &&
            squares[i + 40] === "X" &&
            squares[i + 60] === "X" &&
            squares[i + 80] === "X" &&
            ((squares[i - 20] === "O" && squares[i + 100] !== "O") ||
              (squares[i - 20] !== "O" && squares[i + 100] === "O") ||
              (squares[i - 20] !== "O" && squares[i + 100] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 20] === "X" &&
            squares[i + 2 * 20] === "X" &&
            squares[i + 3 * 20] === "X" &&
            squares[i - 1 * 20] === "X" &&
            ((squares[i - 2 * 20] === "O" && squares[i + 4 * 20] !== "O") ||
              (squares[i - 2 * 20] !== "O" && squares[i + 4 * 20] === "O") ||
              (squares[i - 2 * 20] !== "O" && squares[i + 4 * 20] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 20] === "X" &&
            squares[i + 2 * 20] === "X" &&
            squares[i - 1 * 20] === "X" &&
            squares[i - 2 * 20] === "X" &&
            ((squares[i - 3 * 20] === "O" && squares[i + 3 * 20] !== "O") ||
              (squares[i - 3 * 20] !== "O" && squares[i + 3 * 20] === "O") ||
              (squares[i - 3 * 20] !== "O" && squares[i + 3 * 20] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 20] === "X" &&
            squares[i - 2 * 20] === "X" &&
            squares[i - 60] === "X" &&
            squares[i + 20] === "X" &&
            ((squares[i - 80] === "O" && squares[i + 40] !== "O") ||
              (squares[i - 80] !== "O" && squares[i + 40] === "O") ||
              (squares[i - 80] !== "O" && squares[i + 40] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 20] === "X" &&
            squares[i - 40] === "X" &&
            squares[i - 60] === "X" &&
            squares[i - 80] === "X" &&
            ((squares[i + 20] === "O" && squares[i - 100] !== "O") ||
              (squares[i + 20] !== "O" && squares[i - 100] === "O") ||
              (squares[i + 20] !== "O" && squares[i - 100] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          //cheo phai
          if (
            squares[i + 1 * 19] === "X" &&
            squares[i + 2 * 19] === "X" &&
            squares[i + 3 * 19] === "X" &&
            squares[i + 4 * 19] === "X" &&
            ((squares[i - 1 * 19] === "O" && squares[i + 5 * 19] !== "O") ||
              (squares[i - 1 * 19] !== "O" && squares[i + 5 * 19] === "O") ||
              (squares[i - 1 * 19] !== "O" && squares[i + 5 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 19] === "X" &&
            squares[i + 2 * 19] === "X" &&
            squares[i + 3 * 19] === "X" &&
            squares[i - 1 * 19] === "X" &&
            ((squares[i - 2 * 19] === "O" && squares[i + 4 * 19] !== "O") ||
              (squares[i - 2 * 19] !== "O" && squares[i + 4 * 19] === "O") ||
              (squares[i - 2 * 19] !== "O" && squares[i + 4 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 19] === "X" &&
            squares[i + 2 * 19] === "X" &&
            squares[i - 1 * 19] === "X" &&
            squares[i - 2 * 19] === "X" &&
            ((squares[i - 3 * 19] === "O" && squares[i + 3 * 19] !== "O") ||
              (squares[i - 3 * 19] !== "O" && squares[i + 3 * 19] === "O") ||
              (squares[i - 3 * 19] !== "O" && squares[i + 3 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 19] === "X" &&
            squares[i - 2 * 19] === "X" &&
            squares[i - 3 * 19] === "X" &&
            squares[i + 1 * 19] === "X" &&
            ((squares[i - 4 * 19] === "O" && squares[i + 2 * 19] !== "O") ||
              (squares[i - 4 * 19] !== "O" && squares[i + 2 * 19] === "O") ||
              (squares[i - 4 * 19] !== "O" && squares[i + 2 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 19] === "X" &&
            squares[i - 2 * 19] === "X" &&
            squares[i - 3 * 19] === "X" &&
            squares[i - 4 * 19] === "X" &&
            ((squares[i + 1 * 19] === "O" && squares[i - 5 * 19] !== "O") ||
              (squares[i + 1 * 19] !== "O" && squares[i - 5 * 19] === "O") ||
              (squares[i + 1 * 19] !== "O" && squares[i - 5 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          //cheo trai
          if (
            squares[i + 1 * 21] === "X" &&
            squares[i + 2 * 21] === "X" &&
            squares[i + 3 * 21] === "X" &&
            squares[i + 4 * 21] === "X" &&
            ((squares[i - 1 * 21] === "O" && squares[i + 5 * 21] !== "O") ||
              (squares[i - 1 * 21] !== "O" && squares[i + 5 * 21] === "O") ||
              (squares[i - 1 * 21] !== "O" && squares[i + 5 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 21] === "X" &&
            squares[i + 2 * 21] === "X" &&
            squares[i + 3 * 21] === "X" &&
            squares[i - 1 * 21] === "X" &&
            ((squares[i - 2 * 21] === "O" && squares[i + 4 * 21] !== "O") ||
              (squares[i - 2 * 21] !== "O" && squares[i + 4 * 21] === "O") ||
              (squares[i - 2 * 21] !== "O" && squares[i + 4 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 21] === "X" &&
            squares[i + 2 * 21] === "X" &&
            squares[i - 1 * 21] === "X" &&
            squares[i - 2 * 21] === "X" &&
            ((squares[i - 3 * 21] === "O" && squares[i + 3 * 21] !== "O") ||
              (squares[i - 3 * 21] !== "O" && squares[i + 3 * 21] === "O") ||
              (squares[i - 3 * 21] !== "O" && squares[i + 3 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 21] === "X" &&
            squares[i - 2 * 21] === "X" &&
            squares[i - 3 * 21] === "X" &&
            squares[i + 1 * 21] === "X" &&
            ((squares[i - 4 * 21] === "O" && squares[i + 2 * 21] !== "O") ||
              (squares[i - 4 * 21] !== "O" && squares[i + 2 * 21] === "O") ||
              (squares[i - 4 * 21] !== "O" && squares[i + 2 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 21] === "X" &&
            squares[i - 2 * 21] === "X" &&
            squares[i - 3 * 21] === "X" &&
            squares[i - 4 * 21] === "X" &&
            ((squares[i + 1 * 21] === "O" && squares[i - 5 * 21] !== "O") ||
              (squares[i + 1 * 21] !== "O" && squares[i - 5 * 21] === "O") ||
              (squares[i + 1 * 21] !== "O" && squares[i - 5 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          break;
        case "O":
          if (
            squares[i + 1] === "O" &&
            squares[i + 2] === "O" &&
            squares[i + 3] === "O" &&
            squares[i + 4] === "O" &&
            ((squares[i - 1] === "X" && squares[i + 5] !== "X") ||
              (squares[i - 1] !== "X" && squares[i + 5] === "X") ||
              (squares[i - 1] !== "X" && squares[i + 5] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1] === "O" &&
            squares[i + 2] === "O" &&
            squares[i + 3] === "O" &&
            squares[i - 1] === "O" &&
            ((squares[i - 2] === "X" && squares[i + 4] !== "X") ||
              (squares[i - 2] !== "X" && squares[i + 4] === "X") ||
              (squares[i - 2] !== "X" && squares[i + 4] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1] === "O" &&
            squares[i + 2] === "O" &&
            squares[i - 1] === "O" &&
            squares[i - 2] === "O" &&
            ((squares[i - 3] === "X" && squares[i + 3] !== "X") ||
              (squares[i - 3] !== "X" && squares[i + 3] === "X") ||
              (squares[i - 3] !== "X" && squares[i + 3] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1] === "O" &&
            squares[i - 2] === "O" &&
            squares[i - 3] === "O" &&
            squares[i + 1] === "O" &&
            ((squares[i - 4] === "X" && squares[i + 2] !== "X") ||
              (squares[i - 4] !== "X" && squares[i + 2] === "X") ||
              (squares[i - 4] !== "X" && squares[i + 2] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1] === "O" &&
            squares[i - 2] === "O" &&
            squares[i - 3] === "O" &&
            squares[i - 4] === "O" &&
            ((squares[i + 1] === "X" && squares[i - 5] !== "X") ||
              (squares[i + 1] !== "X" && squares[i - 5] === "X") ||
              (squares[i + 1] !== "X" && squares[i - 5] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          // hang doc
          if (
            squares[i + 20] === "O" &&
            squares[i + 40] === "O" &&
            squares[i + 60] === "O" &&
            squares[i + 80] === "O" &&
            ((squares[i - 20] === "X" && squares[i + 100] !== "X") ||
              (squares[i - 20] !== "X" && squares[i + 100] === "X") ||
              (squares[i - 20] !== "X" && squares[i + 100] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 20] === "O" &&
            squares[i + 2 * 20] === "O" &&
            squares[i + 3 * 20] === "O" &&
            squares[i - 1 * 20] === "O" &&
            ((squares[i - 2 * 20] === "X" && squares[i + 4 * 20] !== "X") ||
              (squares[i - 2 * 20] !== "X" && squares[i + 4 * 20] === "X") ||
              (squares[i - 2 * 20] !== "X" && squares[i + 4 * 20] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 20] === "O" &&
            squares[i + 2 * 20] === "O" &&
            squares[i - 1 * 20] === "O" &&
            squares[i - 2 * 20] === "O" &&
            ((squares[i - 3 * 20] === "X" && squares[i + 3 * 20] !== "X") ||
              (squares[i - 3 * 20] !== "X" && squares[i + 3 * 20] === "X") ||
              (squares[i - 3 * 20] !== "X" && squares[i + 3 * 20] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 20] === "O" &&
            squares[i - 2 * 20] === "O" &&
            squares[i - 60] === "O" &&
            squares[i + 20] === "O" &&
            ((squares[i - 80] === "X" && squares[i + 40] !== "X") ||
              (squares[i - 80] !== "X" && squares[i + 40] === "X") ||
              (squares[i - 80] !== "X" && squares[i + 40] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 20] === "O" &&
            squares[i - 40] === "O" &&
            squares[i - 60] === "O" &&
            squares[i - 80] === "O" &&
            ((squares[i + 20] === "X" && squares[i - 100] !== "X") ||
              (squares[i + 20] !== "X" && squares[i - 100] === "X") ||
              (squares[i + 20] !== "X" && squares[i - 100] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          //cheo phai
          if (
            squares[i + 1 * 19] === "O" &&
            squares[i + 2 * 19] === "O" &&
            squares[i + 3 * 19] === "O" &&
            squares[i + 4 * 19] === "O" &&
            ((squares[i - 1 * 19] === "X" && squares[i + 5 * 19] !== "X") ||
              (squares[i - 1 * 19] !== "X" && squares[i + 5 * 19] === "X") ||
              (squares[i - 1 * 19] !== "X" && squares[i + 5 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 19] === "O" &&
            squares[i + 2 * 19] === "O" &&
            squares[i + 3 * 19] === "O" &&
            squares[i - 1 * 19] === "O" &&
            ((squares[i - 2 * 19] === "X" && squares[i + 4 * 19] !== "X") ||
              (squares[i - 2 * 19] !== "X" && squares[i + 4 * 19] === "X") ||
              (squares[i - 2 * 19] !== "X" && squares[i + 4 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 19] === "O" &&
            squares[i + 2 * 19] === "O" &&
            squares[i - 1 * 19] === "O" &&
            squares[i - 2 * 19] === "O" &&
            ((squares[i - 3 * 19] === "X" && squares[i + 3 * 19] !== "X") ||
              (squares[i - 3 * 19] !== "X" && squares[i + 3 * 19] === "X") ||
              (squares[i - 3 * 19] !== "X" && squares[i + 3 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 19] === "O" &&
            squares[i - 2 * 19] === "O" &&
            squares[i - 3 * 19] === "O" &&
            squares[i + 1 * 19] === "O" &&
            ((squares[i - 4 * 19] === "X" && squares[i + 2 * 19] !== "X") ||
              (squares[i - 4 * 19] !== "X" && squares[i + 2 * 19] === "X") ||
              (squares[i - 4 * 19] !== "X" && squares[i + 2 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 19] === "O" &&
            squares[i - 2 * 19] === "O" &&
            squares[i - 3 * 19] === "O" &&
            squares[i - 4 * 19] === "O" &&
            ((squares[i + 1 * 19] === "X" && squares[i - 5 * 19] !== "X") ||
              (squares[i + 1 * 19] !== "X" && squares[i - 5 * 19] === "X") ||
              (squares[i + 1 * 19] !== "X" && squares[i - 5 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }

          //cheo trai
          if (
            squares[i + 1 * 21] === "O" &&
            squares[i + 2 * 21] === "O" &&
            squares[i + 3 * 21] === "O" &&
            squares[i + 4 * 21] === "O" &&
            ((squares[i - 1 * 21] === "X" && squares[i + 5 * 21] !== "X") ||
              (squares[i - 1 * 21] !== "X" && squares[i + 5 * 21] === "X") ||
              (squares[i - 1 * 21] !== "X" && squares[i + 5 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 21] === "O" &&
            squares[i + 2 * 21] === "O" &&
            squares[i + 3 * 21] === "O" &&
            squares[i - 1 * 21] === "O" &&
            ((squares[i - 2 * 21] === "X" && squares[i + 4 * 21] !== "X") ||
              (squares[i - 2 * 21] !== "X" && squares[i + 4 * 21] === "X") ||
              (squares[i - 2 * 21] !== "X" && squares[i + 4 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i + 1 * 21] === "O" &&
            squares[i + 2 * 21] === "O" &&
            squares[i - 1 * 21] === "O" &&
            squares[i - 2 * 21] === "O" &&
            ((squares[i - 3 * 21] === "X" && squares[i + 3 * 21] !== "X") ||
              (squares[i - 3 * 21] !== "X" && squares[i + 3 * 21] === "X") ||
              (squares[i - 3 * 21] !== "X" && squares[i + 3 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 21] === "O" &&
            squares[i - 2 * 21] === "O" &&
            squares[i - 3 * 21] === "O" &&
            squares[i + 1 * 21] === "O" &&
            ((squares[i - 4 * 21] === "X" && squares[i + 2 * 21] !== "X") ||
              (squares[i - 4 * 21] !== "X" && squares[i + 2 * 21] === "X") ||
              (squares[i - 4 * 21] !== "X" && squares[i + 2 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          if (
            squares[i - 1 * 21] === "O" &&
            squares[i - 2 * 21] === "O" &&
            squares[i - 3 * 21] === "O" &&
            squares[i - 4 * 21] === "O" &&
            ((squares[i + 1 * 21] === "X" && squares[i - 5 * 21] !== "X") ||
              (squares[i + 1 * 21] !== "X" && squares[i - 5 * 21] === "X") ||
              (squares[i + 1 * 21] !== "X" && squares[i - 5 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              confirmButtonText: "Chơi lại",
              onAfterClose: () => {
                window.location.reload();
              }
            });
          }
          break;
      }
    }
  };

  render() {
    const status = "Next player: " + (this.state.isNext ? "X" : "O");
    let items = [];
    let listItems = [];
    for (let i = 0; i < 20; i++) {
      for (let j = 20 * i; j < 20 * (i + 1); j++) {
        items.push(this.renderSquare(j));
      }
      listItems.push(<div className="board-row">{items}</div>);
      items = [];
    }

    return (
      <div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <div>{listItems}</div>
      </div>
    );
    // return (
    //   <div>
    //     {listItems.map((val, i) => {
    //       return (
    //         <div className="board-row">
    //           {
    //             val.map((v,idx) =>{
    //               return this.renderSquare(idx);
    //             })
    //           }
    //         </div>
    //       );
    //     })}
    //   </div>
    // );
    // return this.renderSquare();
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
