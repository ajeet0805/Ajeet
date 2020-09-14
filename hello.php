
<html>
<head></head>
 <body>
 </body>
</html>
<script>
let setMap = new Map();
setMap.set("test","AjeetLodhi");
console.log(setMap.keys());
/*let x  =20;
var y  =20;
{
	let x  =50;
	var y  =50;
    {
		let x  = 22;
		var y  = 22;
		console.log("Output -1 -> X : "+x  +" Y : "+y);
	}
	console.log("Output -2 -> X : "+x  +" Y : "+y);
}
 console.log("Output -3 ->X : "+x  +" Y : "+y);
 */
	/*function Student() {
		this.name = 'Jeet';
		this.gender = 'Male';
	}

	Student.prototype.age = 30;

	var studObj1 = new Student();
	console.log('studObj1.age = ' + studObj1.age); 

	var studObj2 = new Student();
	console.log('studObj2.age = ' + studObj2.age); 

	Student.prototype = { age : 20 };

	var studObj3 = new Student();
	console.log('studObj3.age = ' + studObj3.age); 

	console.log('studObj1.age = ' + studObj1.age); 
	console.log('studObj2.age = ' + studObj2.age); 
*/
var name ={
	first:'Jeet',	
	last:'lodhi',	
	age:30
};

var value = Object.keys(name).map(key =>name[key]);
console.log(value);
var val = Object.values(name);
console.log(val);

var fruits =["Apple","Mango"];
//var nFruits = [].concat(fruits);
var nFruits = fruits.concat("cherry");
//var nFruits = [...fruits];
//nFruits.push('cherry');
console.log(fruits);
console.log(nFruits);//Shallow copy

// random elelment find from array 

var ages =[10,20,30,45,98,41,57];
var nums =parseInt(Math.random()* ages.length);
console.log(ages[nums]);

//remove falsy value in array js ='',0,undefined,NaN
var temp =[10,20,30,undefined,78,0,'',NaN];
var res = temp.filter(temp=>temp);
console.log(res);
// find unique array find usimg es6 
var user=["ajeet","lodhi","Ajeet","ajeet","lodhi"];
//var ress = user.filter((name,index,array)=>array.indexOf(name)===index ? name :'');
//console.log(ress);
//set method 
//var ress = new Set(user);
 //console.log(ress);
 /// Diffrence of two array
 
 /*var arr1 =["jeet","lodhi","ms"];
 var arr2 =["jeet","lodhi","al"];
 
 var res = arr1.filter(el=> !arr2.includes(el));
 console.log(res);*/
//common element find between array
var men =["ajeet","john","mintu","moti"];
var over50 = ["ajeet","lodhi","new","mintu"];

var result = men.filter(man=>over50.includes(man));
console.log(result);


var api ="https://api.github.com/users/defunkt";
var body = document.querySelector('body');
fetch(api)
.then(res=>res.json())
.then(data=> outputinfo(data));
function outputinfo(data)
{
console.log(data);
body.innerHTML =`
<h1>Login :${data.login}</h1>
<p>${data.email ? `Email :${data.email}` : `no email`}</p>
<p>Site : ${data.site_admin}</p>
<p>id :${data.id}</p>`;	
	
}
//destructuring array
 var num =[1,2,3,4,3.4];
 var [one , two , three ,four]=num;
 console.log(one);
 console.log(two);
 console.log(three);
 console.log(four);
 
</script>

<?php
   // echo $stime= $_GET['stime'];
   // $etime= $_REQUEST['etime'];

 //echo"Hello Message</br>";
 //echo  'echo "START|BOWLER|'.$stime.'" | nc -u 192.168.122.230 22222';

?>