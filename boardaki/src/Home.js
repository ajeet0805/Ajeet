import React ,{Component} from 'react';


class Design extends Component{
 constructor(props){
 super(props);   
 this.state = {show: true,isLogined:false,value:'',data:[],listdata:[],elementHeight:''};
 this.LaunchSuccess = this.LaunchSuccess.bind(this);
 this.LandingSuccess=this.LandingSuccess.bind(this);
 this.launchYear  = this.launchYear.bind(this);
}
componentDidMount() {   
	setTimeout(() => {
		 let ref = this.refs.showhigh;   //alert(ref.clientHeight );
		this.setState({ elementHeight:ref.clientHeight-100})
	  }, 1);
	
         fetch('https://api.spacexdata.com/v3/launches?limit=100')
       .then(
          (response)=>{	     
             return response.json();
        })
  	.then(
          (data)=> {
            // console.log(data[0].launch_success); 
			 this.setState({listdata:data});    
			// console.log(this.state.listdata);       
		  }); 	           
		  
  }

  launchYear(event)
  {
    const idx = event.target.value;
	fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year='+idx)
	.then(
	   (response)=>{	     
		  return response.json();
	 })
   .then(
	   (data)=> {
		 // console.log(data[0].launch_success); 
		  this.setState({listdata:data});    
		  //console.log(this.state.listdata);       
	   }); 
}
// launch success 
LaunchSuccess(event)
{
	console.log(event.target.value);
	const idx = event.target.value;
	this.setState({value :idx});
	fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success='+idx)
	.then(
	   (response)=>{	     
		  return response.json();
	 })
   .then(
	   (data)=> {
		 // console.log(data[0].launch_success); 
		  this.setState({listdata:data});    
		  //console.log(this.state.listdata);       
	   }); 			

}
LandingSuccess(event)
{
	//console.log(event.target.value);
	const idx = event.target.value;
	this.setState({value :idx});	
	fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success='+idx+'&land_success='+idx)
	.then(
	   (response)=>{	     
		  return response.json();
	 })
   .then(
	   (data)=> {
		 // console.log(data[0].launch_success); 
		  this.setState({listdata:data});    
		  //console.log(this.state.listdata);       
	   });   
}
render(){
	 const YearData =[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
	 const land_succ=["true","false"]; 
	 const launch_succ=["true","false"];

	return(
	<div className="w3-container">
	
		 <div className="w3-row ">
			<div className="w3-quarter w3-container w3-mobile">
				<div className="w3-bar">
				<select className="w3-input  w3-margin-top" onChange={this.launchYear}>
				<option value="">Launch Year</option>
				{
				YearData.map((item,i)=>{
					return <option value={item} key={i}>{item}</option>
				})}
		       </select>

				</div>
			
				<div className="w3-bar">
				<select className="w3-input  w3-margin-top" onChange={this.LaunchSuccess}>
					<option value="">Launch Success</option>
					{
						launch_succ.map((lidx,k)=>{
						return <option value={lidx} key={k}>{lidx}</option>
						})
					}
										
				 </select>
				</div>
				<div className="w3-bar">
			 	<select className="w3-input  w3-margin-top" onChange={this.LandingSuccess}>
					<option value="">Landing Success</option>
					{
						land_succ.map((idx,j)=>{
						return <option value={idx} key={j}>{idx}</option>
						})
					}
				 </select>
				</div>
			</div>
			<div className="w3-threequarter w3-container w3-mobile" id="showhigh" ref="showhigh" style={{overflow:'auto',height:this.state.elementHeight}}>
					
			 {this.state.listdata.map((item, i) => {
		 	//return <tr key={i}><td>{(i+1)}</td><td>{item.flight_number}</td><td>{item.flight_number}</td><td>{item.flight_number}</td><td>{item.flight_number}</td><td>{item.flight_number}</td><td>{item.flight_number}</td><td>{item.flight_number}</td></tr>
			 return <div className="w3-panel w3-card w3-quarter w3-mobile" style={{height:"390px",fontSize:'12px'}}>
				<img src={item.links.mission_patch_small} className="w3-border"  style={{padding:"16px",width:"95%"}}/>
				
				<span className="w3-bar">Mission Name :{item.mission_name}</span>
				<span className="w3-bar">Flight Number :{item.flight_number}</span>
			    <span className="w3-bar">Mission Id :{item.mission_id}</span>
			    <span className="w3-bar">Launch year :{item.launch_year}</span>			
			    <span className="w3-bar">Launch Successful :{item.launch_success ? "true":"false"}</span>
			    <span className="w3-bar">Land Successful :{item.rocket.first_stage.cars ? "true":"false"}</span>
			
			 </div>
			})}
		     
			</div>
		 </div>
	</div>
	);
   }
}
export default Design;



{/*import React from 'react';
import logo from './react.svg';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}*


export default Home;*/}
