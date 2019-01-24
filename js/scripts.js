var vowels = ["a","A","e","E","i","I","o","O","u","U"];
function pigLatin(input){
  if(vowels.includes(input[0])){
    input = input.join('') + "way";
  }else{
    if (input.length > 1){
      var i = 0;
      while(vowels.includes(input[i])===false)
      {
          i++;
      }
      if(input[i-1] === 'q' || input[i-1] === 'Q')
      {
        i++;
      }
      input = input.slice(i,input.length).concat(input.slice(0,i)).join('')+"ay";
    }else{
      input = input.join('');
    }
  }
  return input;
}

$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
      var input = $("#phrase").val();
      if(input.includes(" ")){
        input = input.split(" ");
        input = input.map(function(inp){
           return pigLatin(inp.split(''));
        })
        input = input.join(" ");
      }else{
      input = pigLatin(input.split(''));}
    console.log(input);
    event.preventDefault();
    });
  });
