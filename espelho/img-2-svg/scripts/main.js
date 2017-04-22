function getAllSvgSrcElements(attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName('img');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
};

var imgSrcObj = getAllSvgSrcElements('svg-src');

for (var i = 0, n = imgSrcObj.length; i < n; i++)
{
    var imgSrcUrl = imgSrcObj[i].getAttribute('svg-src');
    var imgSrcEle = imgSrcObj[i];

    var span = document.createElement('span');
    span.className = 'class-' + i;

    (function(key){

       var xhr = new XMLHttpRequest();
       xhr.open('GET', imgSrcUrl);
       xhr.onload = function() {
           if (xhr.status === 200) {
             span.innerHTML = xhr.responseText;
             console.log(xhr.responseText);
             imgSrcEle.parentNode.insertBefore(span.cloneNode(true), imgSrcEle);
           }
           else {
               alert('Request failed.  Returned status of ' + xhr.status);
           }
       };
       xhr.send(key);

     })(i);

};
