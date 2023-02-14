var inputvalue="";
var btnelement=document.getElementsByTagName("button");
function Evaluate(expression){
    try{
        var answer=eval(expression);
    }
    catch(err){
        answer="";
    }
    if(answer==""){
        return "Incorrect expression";
    }else{
        return answer;
    }
}
function displaydata(keyvalue){
     if(keyvalue!='C'&&keyvalue!='X'&&keyvalue!='='&&keyvalue!='c'&&keyvalue!='x'&&keyvalue!='Backspace'&&keyvalue!='Delete'&&keyvalue!='Enter'){
        inputvalue+=keyvalue;
     }
     else if(keyvalue=='C'||keyvalue=='c'){
        inputvalue="";
     }else if(keyvalue=='X'||keyvalue=='x'){
        inputvalue+="*";
     }else if(keyvalue=='Backspace'||keyvalue=='Delete'){
        if(inputvalue.length>0){
            inputvalue=inputvalue.slice(0,-1);
        }
     }
     else{
        inputvalue=Evaluate(answer.value);
     }
     answer.value=inputvalue;
}
for(let i=0;i<btnelement.length;i++){
    btnelement[i].addEventListener("click",function(event){
        // console.log(typeof(event.target.innerText));
        displaydata(event.target.innerText);
    })
}
addEventListener('keydown',function(event){
    var keypressed=event.key;
    if(keypressed!='Shift'){
        displaydata(keypressed);
    }
   
})