function geekshubs(index) {
    var finalText="Iterador "+index;
   for (var  i = 1; i <= index; i++) {
      if(i%3==0){
           finalText+="\nGeeks"
      }else if(i%5==0){
          finalText+="\nHubs"
      }else{
          finalText+="\n"+i;
      }
       
   }


   return finalText;
}
module.exports = geekshubs;