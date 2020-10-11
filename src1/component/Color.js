import React ,{Component} from 'react';
const obj = {"data": [{"id": "PRODUCT_ID_1","name": "Product1","brand": "Brand1","Variant": [{"type": "default","variationId":"PRODUCT_ID_1_VAR_ID_0","cost": 123,"color": "red","months": ["November", "December", "January"]},
{"type": "variation","variationId": "PRODUCT_ID_1_VAR_ID_1","cost": 106,"color": "orange","months": ["November", "December", "January"]}]
},
{"id": "PRODUCT_ID_2","name": "roduct2","brand": "Brand2","Variant": [{"type": "default","variationId": "PRODUCT_ID_2_VAR_ID_0","cost": 225,
"color": "green","months": ["January", "Feburary"]
},
{"type": "variation","variationId": "PRODUCT_ID_2_VAR_ID_1","cost": 350,"color": "purple","months": ["January", "February", "March"]}]
}]};
const mName=["January", "Feburary","March","April","May","June","August","September","October","November", "December"];
class Color extends Component
{
	constructor(){
	super();
	this.state={colors:"#000",porduct:[],month:mName ,serach:'',currentButton:null,costname:null,costidx:null,proname:null,brnadname:null};
	this.colorChange=this.colorChange.bind(this);
        this.filterName = this.filterName.bind(this);
	}
	colorChange=(e)=>{
	  const idx = e.target.id;
	  const id = idx.split("_");console.log(id[0],id[1]);
	  const color = e.target.name;
	  const dd = this.state.porduct[id[1]].Variant[id[2]].cost;
	  const pname = this.state.porduct[id[1]].name
	  const bname = this.state.porduct[id[1]].brand;
	  //alert(pname+"_"+bname+" "+dd);
	 // this.setState({...this.state.porduct[id[1]].Variant[id[2]], cost: dd});
	  this.setState({costidx:parseInt(id[1]),costname : dd,currentButton :  this.state.currentButton === id[1] ? null :parseInt(id[1]) ,colors:color});
	}
     componentDidMount(){
	   this.setState({porduct:[...this.state.porduct ,...obj.data]});
   }
	filterName=(e)=>{
		 this.setState({serach:e.target.value});
		
		  
	}
	render()
	{
			return(
			<div className="w3-container">
				<div className="w3-row w3-border">		
						<div className="w3-third w3-container">
						<select onChange={this.filterName}>
						<option value="">Select Month</option>	
						  {
						this.state.month.map(items=>{
						return <option value={items}>{items}</option>
						})
					           }
							   
                         </select>							 
							   	{
                                  this.state.porduct.map((itdx,index)=>{
								  return(
									<div className="w3-section">	
									  {
										itdx.Variant.map((ix,jidx)=><a className="w3-button w3-large w3-circle w3-xlarge w3-ripple w3-margin-right" name={ix.color} id={ix.color+"_"+index+"_"+jidx} style={{backgroundColor:ix.color}} onMouseEnter={this.colorChange}></a>)  
									  }
									</div>
								  )			  
								
								  })
								}
								
						
						</div>
				     <div className="w3-twothird w3-container w3-border">
				
						
						{
							this.state.porduct.map((item,index)=>{
							return(<> 
								<div className="w3-row">
								<div id={index} className="w3-half w3-container w3-border"
								 style={{height:"125px",backgroundColor:this.state.currentButton===index ? this.state.colors:this.state.porduct[index].Variant[index].color}}>
							   
								 
						   	    </div>
								<div className="w3-half w3-container w3-border">
								<div className="w3-container">
						    	<span>Product Name :{item.name}</span>
								</div>
								<div className="w3-container">
							       <span>By  :{item.brand}</span>
								</div>
								<div className="w3-container">
							<span>Cost :{this.state.costidx===index ? this.state.costname:this.state.porduct[index].Variant[index].cost}</span>
								</div>
								<div className="w3-container">
									{
										 
											<div className="w3-section">	
											  {
												item.Variant.map((idx,i)=><a className="w3-button w3-large w3-circle w3-xlarge w3-ripple w3-margin-right" name={idx.color} id={idx.color+"_"+index+"_"+i} style={{backgroundColor:idx.color}} onMouseEnter={this.colorChange}></a>)  
											  }
											</div>
										 		  
										
										  
									}
									
								</div>
							</div>
							</div>
							</>		
							)
							})
						}						
						
				  	 
				</div>
               </div>
					
			</div> 
			);
	}
}

export default Color;
