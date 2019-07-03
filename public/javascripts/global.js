var coll = document.getElementsByClassName("collapsible");
var i;

$(document).ready(function() {
    filterTableListener();
    $('#filter input').on('click',filterTable);
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#prodList table tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    $('#search-btn').on('click',function(e) {
      e.preventDefault();
      $('#search').focus();
    });

});

function activateSearch() {
  var input = $('#search');
  input.val("hello");

}

function filterTable() {
  var value = $(this).attr('value');
  var filter = $(this).attr('name');
  if ( filter == 'display-num') {
    displayNum(value);
    $('#label').text("Displaying: " + value);
  }
}

function displayNum(num) {
  $.ajax(
    {
      url: 'users/' + num, 
      success: function(result){
        var prodList = result;
        var tableContent = '';
        $.each(prodList,function() {
              tableContent += '<tr>';
              tableContent += '<td><a href="#"  class="linkresinfo" rel="' + this['id'] +'">' + this['title'] + '</a></td>';
              tableContent += '<td>' + this['producer'] + '</td>';
              tableContent += '<td>' + this['genre'] + '</td>';
              tableContent += '<td>' + this['rating'] + '</td>';
              tableContent += '<tr>';
        });
        $('#prodList table tbody').html(tableContent);
      }
    }
  );
}

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
