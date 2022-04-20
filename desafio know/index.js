function main (teste){

  let result = "";

  for(let i=teste.length - 1 ; i>= 0; i--){
    result  = result+  teste[i];
  }
  return result

}

console.log(main("hello world"))
