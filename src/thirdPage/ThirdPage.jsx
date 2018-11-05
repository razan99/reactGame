import React, {
  Component
} from 'react';
import './thirdPageStyle.css';
import '../startPage/startPageStyle.css';

import '../App.css';

class ThirdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players:[],
      gameName:''
    }
    }

componentDidMount = () => {
  this.setState({ players: this.props.players,
    gameName:this.props.nameGame
  }) 
}

addOne = (e) => {
const newScore= this.state.players.map((item)=>{
   if(item.id == Number( e.target.id)){     
     item.score+=1;
   }
   return item;
 })
  this.setState({ players :newScore});
}


addFive = (e) => {
  const newScore= this.state.players.map((item)=>{
     if(item.id == Number( e.target.id)){     
       item.score+=5;
     }
     return item;
   })
    this.setState({ players :newScore});
  }


addTen = (e) => {
  const newScore= this.state.players.map((item)=>{
     if(item.id == Number( e.target.id)){     
       item.score+=10;
     }
     return item;
   })
    this.setState({ players :newScore});
  }


  // componentWillMount(){
  //   this.setState({
  //    players: JSON.parse(window.localStorage.getItem('players')),
  //   })
  // }

  render() {  
   
    //  const name = JSON.stringify(this.state.players);
    // window.localStorage.setItem('players',name) ;

    return (
      <div className= 'backgroung-image App'>
        <div className='overlay'>

           <div className='header'>
            <div className='container-logo-name'>
              <div className='logo' />
              <div className='app-name'>Score Bucket</div>
            </div>
           </div>

           <div className='container-game-name'>
              <div className='game-name-label'>{this.props.nameGame}</div>
           </div>

           <div className='container-score-input'>
              <input className='score-input' value='Score' readOnly/>
           </div>

          <div className='container-score-tabel'>

          {this.props.players.map(({ id, name , score}) => (
             <div key={id}>
              <input className='player-name-input-score' value={name} readOnly/>
              <button className='plus-one-btn' id={id} onClick={this.addOne} >+1</button>
              <button className='plus-five-btn' id={id} onClick={this.addFive}>+5</button>
              <button className='plus-ten-btn' id={id} onClick={this.addTen} >+10</button> 
              <div className='score-num'>{score}</div>

            </div>
            ))}

          </div>

           <button className='start-btn next-btn end-btn' onClick={() => this.props.changingFun('WinnerPage',this.state.gameName,this.state.players)}>End game</button>

        </div>
      </div>
    );
  }

}
export default ThirdPage;
