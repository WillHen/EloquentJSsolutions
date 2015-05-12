function every(arr, test){
  for(var prop in arr){
    if(!test(arr[prop])){return false}
  }
  return true
}

function some(arr, test){
for(var prop in arr){
  if(test(arr[prop])){return true}
}
  return false
}