import React, {Component} from "react";
import { Container, 
        Row, 
        Col} from 'reactstrap';

import Pets from "./components/Pets";
import Wrapper from "./components/Wrapper";
import 'bootstrap/dist/css/bootstrap.css';
import pets from "./pets.json";
import "./App.css";

let shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let refresh = () => {
  window.location.reload();
}
  
class App extends Component {

  state = {
    score: 0,
    total: 0,
    visited: [],
    pets: shuffle(pets)
  }



  activeClick = (id) => {
    let visited = this.state.visited;
    if(visited.includes(id)){
      this.setState({
        score: 0,
        total: this.state.total,
        visited: []
      });
    }
    this.state.visited.push(id);
    let correctNumbers = (new Set(this.state.visited)).size;
    this.state.score = correctNumbers;
    if(correctNumbers > this.state.total){
      this.state.total += 1;
    }
    
    this.setState({pets: shuffle(pets)});
  }


  render() {
    return (

      <div className="text-center">

        <h1>Clicky Game</h1>
        <h2>Click on an image to begin and earn points, but don't click on any more than once!</h2>
        <Wrapper>
          
          <Container>
          <Col>
                <Row>
                
                {this.state.pets.map(item =>(

                  <Pets 
                  image={item.image}
                  id={item._id}
                  activeClick={this.activeClick}
                  />
                ))}
               
                </Row>
                 </Col>
          </Container>
        </Wrapper>
        <Container>
          <Row>
            <Col xs="6" sm="4"><h3>Memorize the images!</h3></Col>
            <Col xs="6" sm="4"><h3>Your Score: {this.state.score}</h3></Col>
            <Col sm="4"><h3>Top Score: {this.state.total} </h3> </Col>
          </Row>
        </Container>
      </div> 

    );
  }
}

export default App;
