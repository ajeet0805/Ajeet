import React , {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
//import Pagination from "react-js-pagination";

class App extends Component {
constructor(){
	super();
	this.state      = {list:[],searchs:'', fromdate:new Date(),todate:new Date(),activePage:2};	
	this.chageData1 = this.chageData1.bind(this);
    this.convert    = this.convert.bind(this);
   
}
chageData=(e)=>{
 var state = this.state;
 var name  = e.target.name;
 state[name]= e.target.value; 
 this.setState({state:state});
}
chageData1=(e)=>{
this.setState({fromdate:e});
}	
FindData=()=>{
	console.log(this.state.fromdate,this.state.todate,this.state.searchs);
     var data = new FormData();
     data.append('search',this.state.searchs);
     data.append('fromdate',this.convert(this.state.fromdate));
     data.append('todate',this.convert(this.state.todate));
	 const mysend = {
        method: 'POST',
       // headers: { 'Content-Type': 'application/json'},
        body:data// JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('http://ajeettech.in/res.php', mysend)
        .then(response => response.json())
        .then(data => this.setState({list:data.record},()=>console.log(this.state.list)));
}
convert(str) {
  var d= str.getDate();
  var m = str.getMonth()+1;
  var y = str.getFullYear();
   if(d < 10)
    d ='0'+d;
   if(m < 10)
    m ='0'+m;
  const date = y+"-"+m+"-"+d;
  return date;
}
render(){ 
  return (
    <div className="App">
	<div className="w3-bar w3-black">
     <h4>Police Department Of Berlin</h4>
	
	 </div>
	 <div className="w3-container">
	  <p>Police Department Of Berlin</p>
	   <div className="w3-row">
		<input type="text" name="searchs" value={this.state.searchs}  onChange={(e)=>this.chageData(e)} placeholder="Search case description" style={{width:"250px",height:"35px"}}/>&nbsp;
	
	    <DatePicker  dateFormat="Y-M-d"selected={this.state.fromdate}  name="fromdate"  onChange={this.chageData1} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	   <DatePicker dateFormat="Y-M-d"selected={this.state.todate}  name="todate"  onChange={this.chageData1} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  
		<input className="w3-btn w3-black" type="button" value="Find Case" onClick={(e)=>this.FindData(e)} />
	   </div>
	    <div className="w3-row">
         {

          this.state.list.map(item=>{
			 return <div className="w3-panel w3-card" key={item}><p>{item.msg}</p></div>
             })
           }
		  
		   
		   
        </div>
		
		
	
	  </div>
    </div>
  );
}
}

export default App;
