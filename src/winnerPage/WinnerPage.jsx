import React, {
    Component
  } from 'react';
  import '../startPage/startPageStyle.css';
  import './winnerPageStyle.css';

  import '../App.css';

  class WinnerPage extends Component {
    constructor(props) {
      super(props);
      this.state={
        // palyers:[],
        winner:'',
        gameName:'',
        heightScore:0

      }
      }

      componentDidMount = () => {
      
        const scores=this.props.players.map(item=>{
          return item.score;
        });
       const maxScore=  Math.max(...scores);
       const maxx= this.props.players.filter((item)=>{
      return item.score == maxScore;
    
      })
      
          this.setState({ players: this.props.players,
          gameName:this.props.nameGame,
          winner:maxx[0].name,
          heightScore:maxx[0].score
        }) 
     
     
     }
     
     
     
      

    render() {
      return (
        <div className= 'backgroung-image App'>
          <div className='overlay'>

             <div className='header'>
              <div className='container-logo-name'>
                <div className='logo' />
                <div className='app-name'>Score Bucket</div>
              </div>
             </div>


        <div className="container">
         <h1 className="gameName">{this.state.gameName}</h1>
            <div className="cupImage">
              <img className="cup" src={require('./trophy.png')} alt="Smiley face" />
           </div>
           <p className="congrat">Congratulations</p>
            <p className="winnerName">{this.state.winner}</p>

            <div className="stars">
             <div className="star1 " >
              <img src={require('./star.png')}   alt=""/>
             </div>

            <div className="scoreNoDiv">
             <p className="scoreNo">{this.state.heightScore}</p>
            </div>

            <div className="star2">
             <img  src={require('./star.png')}  alt="" />
            </div>

            </div>
    </div>
             <button className='done-btn' onClick={() => this.props.changingFun('StartPage')}>Done</button>

          </div>
        </div>
      );
    }

  }
  export default WinnerPage;
