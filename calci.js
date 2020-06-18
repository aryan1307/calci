function getHistory(){
  //gives the value in console
  return document.getElementById('history_value').innerHTML;
}
function printHistory(num){
  document.getElementById('history_value').innerHTML=num;
}
function getOutput(){
 return document.getElementById('output_value').innerHTML;
}
function printOutput(num){
  if(num=="")
  {
    document.getElementById('output_value').innerHTML="";
    // We use ths because if the numwas empty then it printed 0
  }
  else{
    document.getElementById('output_value').innerHTML=getFormattedNumber(num);
  }
}
function getFormattedNumber(num){
  var n=Number(num);
  var value=n.toLocaleString("en");
  return value;
}

function reverseNumber(num){
  //to convert the number back to string
  return Number(num.replace(/,/g,''));
}
var operator=document.getElementsByClassName('operator');
  for(var j=0;j<operator.length;j++)
  {
    operator[j].addEventListener('click',function(){
    if(this.id=="clear")
    {
      printHistory("");
      printOutput("");
    }
    else if(this.id=="backspace")
    {
      output
    }
   else
   {
     var output=getOutput();
     var history=getHistory();
     if(output!="")
     {
       output=reverseNumber(getOutput());
       history=history+output;
       if(this.id=="=")
       {
         var result=eval(history);
         printOutput(result);
         printHistory("");
       }
       else
       {
         printHistory(history+this.id);
         printOutput("");
       }
     }
   }}
    
    )
  
  }

var number=document.getElementsByClassName('number');
  for(var i=0;i<number.length;i++)
  {
    number[i].addEventListener('click',function(){
      var output=reverseNumber(getOutput());
      if(output!=NaN){
      output=output+this.id;
      printOutput(output);
      }
    })
  }
  
  
  


  

