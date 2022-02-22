import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

// Class component -->>

class App extends Component {

  // 16.8 includes react hooks which is somekind of similar feature

  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
    otherProp: "some other random bullshit.."
  };

  changeBookState = newBookName => {
    this.setState({
      books: [
        { bookName: newBookName, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metamorphosis", writer: "Franz Kafka" }
      ]
    });
  }

  render() {
    console.log(this.state);
    return (

      <div className="App">

        <h1> Book List </h1>
        <button onClick={()=>this.changeBookState("Nineteen Eighty-Four")}>Change State</button>

        <Book bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer} />

        <Book bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer} />

        <Book bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer} 
          change = {this.changeBookState.bind(this, "Nineteen 84")}/>

      </div>

    );
  }
}
// State -> state a components own information,state is generally declared on class component

// -->> we can define state in outside of the constructor -> in a class function

export default App;
