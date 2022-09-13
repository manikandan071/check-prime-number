
let randomnum=document.getElementById("randomnum");
let btn=document.getElementById("btn");

btn.addEventListener("click",function(){
	var add=document.getElementById("addval");
	var x=document.createElement("h3");
	add.appendChild(x);
	var given=randomnum.value;
	for(var i = 0; i <= given; i++){
		let find=0;
		for( var j=0; j<=i; j++){
			if(i%j==0){
				find=find+1;
			}
			
			}
			if(find == 2){
				x.innerText+=i+",";
		}
	}
	
})

