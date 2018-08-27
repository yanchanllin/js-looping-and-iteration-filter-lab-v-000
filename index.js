// Code your solution in this file
function findMatching(drivers,string) {
  return drivers.filter(function(st){
    return string.toLowerCase() === st.toLowerCase();
  })
}