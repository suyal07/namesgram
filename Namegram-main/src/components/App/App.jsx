import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
const name=require('@rstacruz/startup-name-generator');
class App extends React.Component{
 state={
    headerText:'Namegram!',
    headerExpanded:true,
    suggestedname:[],
  };
  handleinputchange=(inputText)=>{
    // name(inputText);
      this.setState({ headerExpanded: !inputText,suggestedname:inputText?name(inputText):[]});
  }

 render()
 {
  //  console.log(name('cloud'));
   return(
     <div>
     <Header headerExpanded={this.state.headerExpanded} headtitle={this.state.headerText}/>
     {/* <h3>{this.state.headerText}</h3> */}
     <SearchBox oninputchange={this.handleinputchange}/>
     <ResultsContainer suggestedname={this.state.suggestedname}/>
     </div>
   );
 }
  
      
}
export default App;