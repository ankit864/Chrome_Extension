document.addEventListener('DOMContentLoaded', function() {
  //The addEventListener() method attaches an event handler to the specified element.
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      //d = document;

      var form = document.createElement('form'); 
      //create form element
      form.action = 'http://www.espncricinfo.com/ci/engine/match/index.html?view=live';
      form.method = 'post';

      var input = document.createElement('input');
       //create input element
      input.type = 'hidden';  
      //it will not show url 
      
      input.name = 'url';                         
      input.value = tab.url;
      form.appendChild(input);                    
      //append the text to button
      
      document.body.appendChild(form);            
      //append test to body
      form.submit();
    });
  }, false);
}, false);
