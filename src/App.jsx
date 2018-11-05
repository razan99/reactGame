import React, {
  Component
} from 'react';

import StartPage from './startPage/StartPage.jsx';
import SecondPage from './secondPage/SecondPage.jsx';
import ThirdPage from './thirdPage/ThirdPage.jsx';
import WinnerPage from './winnerPage/WinnerPage.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nameOfView : 'StartPage',
    nameOfGame:'',
    nameOfPlayers:[]
   }

    this.changeView=this.changeView.bind(this);
  
  }

  changeView(newView,namegame,players){
    this.setState({nameOfView:newView,
      nameOfGame :namegame,
      nameOfPlayers: players
    })
  }

  componentWillMount(){
    this.setState({
      nameOfView: JSON.parse(window.localStorage.getItem('nameof')),
      nameOfPlayers: JSON.parse(window.localStorage.getItem('players')),
    })
  }


  render() {
     const pl = JSON.stringify(this.state.nameOfPlayers);
     const name = JSON.stringify(this.state.nameOfView);
     window.localStorage.setItem('players',pl) ;
     window.localStorage.setItem('nameof',name) ;
     


      switch (this.state.nameOfView) {
        case 'StartPage':
          return (<StartPage changingFun={this.changeView} />);

        case 'SecondPage':
          return (<SecondPage changingFun={this.changeView} />);

        case 'ThirdPage':
          return (<ThirdPage changingFun={this.changeView} nameGame={this.state.nameOfGame} players={this.state.nameOfPlayers} />);
          
        case 'WinnerPage':
          return (<WinnerPage changingFun={this.changeView} nameGame={this.state.nameOfGame} players={this.state.nameOfPlayers} />);

        default:
          return (<StartPage changingFun={this.changeView} />);
    }
  }
}
export default App;
