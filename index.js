function getFirstSelector(selector) {
  var element = selector;
  return document.querySelector(element);
}
function nestedTarget() {
  var nested = document.getElementById('nested');
  return nested.getElementsByClassName('target')[0];
}
function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  var start = 1;
  
  for (let i=0; i<lis.length; i++) {
    lis[i].innerHTML = (start + n).toString();
    start++;
  }
}
function deepestChild() {
 return document.querySelector('div#grand-node div div div div');
}