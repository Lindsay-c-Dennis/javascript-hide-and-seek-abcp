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
  
  for (let i=0; i<lis.length; i++) {
    lis[i].innerHTML = (i+1+n).toString();
  }
}
function deepestChild() {
  const child = document.querySelectorAll('div#grand-node');
  
  for (let i=0; i<child.length; i++) {
    return document.querySelector('div');
  }
}