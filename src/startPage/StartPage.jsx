import React, {
  Component
} from 'react';
import './startPageStyle.css';
import '../App.css';
import {reactLocalStorage} from 'reactjs-localstorage';


class StartPage extends Component {
  constructor(props) {
    super(props);

    }


  render() {
    return (
      <div className='backgroung-image App'>
      <div className='overlay'>
      <h1 className='h1-title'>Score Bucket</h1>
      <h3 className='h2-subtitle'> <b>YOUR</b> choice<br />
       to track your score <br />
       <b>NO</b> paper and pen ...</h3>
       <button className='start-btn' onClick={() => this.props.changingFun('SecondPage')}>Start</button>
      </div>
      </div>
    );
  }

}


export default StartPage;
