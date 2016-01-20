$(document).ready(function(){
  var box="";
  for(var r=0;r<8;r++){
            for(var c=0;c<8;c++){
              if(r%2==0){
                    box+='<td class="block"></td>';
              }
              else {
                    box+='<td class="bric"></td>';
              }


    }
      box+="</tr>";

  }
    $('.board').append(box);
});
