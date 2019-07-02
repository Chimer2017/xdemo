var coll = document.getElementsByClassName("collapsible");
var i;
var prodData = [];

$(document).ready(function() {
    filterTableListener();
    // populateTable();


});


function populateTable() {

  
};

function filterTableListener() {
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          } 
        });
      }
}
