import React, { useState } from "react";
const obj = {"data": [{"id": "PRODUCT_ID_1","name": "Product1","brand": "Brand1","Variant": [{"type": "default","variationId":"PRODUCT_ID_1_VAR_ID_0","cost": 123,"color": "red","months": ["November", "December", "January"]},
{"type": "variation","variationId": "PRODUCT_ID_1_VAR_ID_1","cost": 106,"color": "orange","months": ["November", "December", "January"]}]
},
{"id": "PRODUCT_ID_2","name": "roduct2","brand": "Brand2","Variant": [{"type": "default","variationId": "PRODUCT_ID_2_VAR_ID_0","cost": 225,
"color": "green","months": ["January", "Feburary"]
},
{"type": "variation","variationId": "PRODUCT_ID_2_VAR_ID_1","cost": 350,"color": "purple","months": ["January", "February", "March"]}]
}]};
const mName=["January", "Feburary","March","April","May","June","August","September","October","November", "December"];
function NameForm(props) {
	const[month] = useState(mName);
	const[showMonth,setMonth] = useState('January');
    const[data] = useState(obj.data);
	const[color ,colorChange] =useState();
	const[currentItem ,setIDx] =useState(null);	
	const[costIdx ,setcost] =useState(null);
	const[costIndex,setcostindex] =useState(null);	
	
//console.log(data);
function selectMonth(e){	
	e.preventDefault();	
	setMonth(e.target.value);

}
function FilterColor(e){
	 const idx = e.target.id;
	  const id = idx.split("_"); console.log(idx);
	  const dd = data[id[1]].Variant[id[2]].cost;
	  let m = data[id[1]].Variant[id[2]].months;
	  const myIDx= m.indexOf(showMonth);
	  if(myIDx===-1)
	  {
		  alert("This color is not available for this Month");
		  return false;
	  }
	  setcostindex(parseInt(id[1]));
	  setcost(dd);
	  setIDx(parseInt(id[1]));
	  colorChange(e.target.name);

}
function colorChanges(e){
	  const idx = e.target.id;
	  const id = idx.split("_");
	  const dd = data[id[1]].Variant[id[2]].cost;
	  let m = data[id[1]].Variant[id[2]].months;console.log(m);
	  setcostindex(parseInt(id[1]));
	  setcost(dd);
	  setIDx(parseInt(id[1]));
	  colorChange(e.target.name);
}
  return (
	<div className="w3-container">
		<div className="w3-bar w3-black"><button className="w3-button">Test</button></div>
	   <div className="w3-row w3-border">		
		<div className="w3-third w3-container w3-margin-top">
		 <select onChange={selectMonth} className="w3-input w3-border">
		{
		month.map(item=>{
		return <option value={item} key={item}>{item}</option>
		})	
		}
		</select>
        

		{
		data.map((itdx,index)=>{
		return(
		<div className="w3-section" key={index}>	
			{
			itdx.Variant.map((ix,jidx)=><button className="w3-button w3-large w3-circle w3-xlarge w3-ripple w3-margin-right" key={index+"_"+ix.color} name={ix.color} id={ix.color+"_"+index+"_"+jidx} style={{backgroundColor:ix.color}} onMouseEnter={FilterColor}></button>)  
			}
		</div>
		)			  
	
		})
	}
		</div>
		<div className="w3-twothird w3-container w3-border">
			
		{
				 data.map((idx ,index)=>{
                  return(<>
				  		<div className="w3-row">
								<div className="w3-half w3-container w3-border"
								 style={{height:"125px", backgroundColor: currentItem ===index ? color :idx.Variant[index].color}}>
									{currentItem ===index ? color:idx.Variant[index].color}
								</div>
								<div className="w3-half w3-container w3-border">
								<div className="w3-container">
						    	<span>Product Name :{idx.name}</span>
								</div>
								<div className="w3-container">
							       <span>By  :{idx.brand}</span>
								</div>
								<div className="w3-container">
									<span>Cost :{costIndex===index ? costIdx : idx.Variant[index].cost}</span>
								</div>
								<div className="w3-container">
									{
										 
											<div className="w3-section">	
											  {
												idx.Variant.map((idx,i)=><button className="w3-button w3-large w3-circle w3-xlarge w3-ripple w3-margin-right" key={idx.color+"_"+index+"_"} name={idx.color} id={idx.color+"_"+index+"_"+i} style={{backgroundColor:idx.color}} onMouseEnter={colorChanges}></button>)  
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
export default NameForm;
