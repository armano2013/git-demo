
var groceryList = [{name: 'apple', price: 2}, {name: 'orange', price: 1}];

  var total = 0;
  var newElement = document.createElement('div');
  groceryList.forEach(function (item){
    total += item.price;
    newElement.innerHTML +='<p>' + item.name + ' costs $' + item.price +'</p>';
  });
  newElement.innerHTML +='<p>' +  ' total $' + total +'</p>';


  document.body.appendChild(newElement);
