var coll = document.getElementsByClassName("collapsible");
var i;
var prodData = [];

$(document).ready(function() {
    getProdMapData();
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


    $('#prodList td a.link-prod-info').on("click",showProdInfo);
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
  } else if ( filter == 'genre') {
    alert(value);
  }
}

function getProdMapData() {
  $.ajax(
    {
      url: 'users/100', 
      success: function(result){
        var prodList = result;
        prodData = prodList;
        console.log(prodData);
      }
    }
  );
}

// function displayNum(num) {
//   $.ajax(
//     {
//       url: 'users/' + num, 
//       success: function(result){
//         var prodList = result;
//         prodData = prodList;
//         var tableContent = '';
//         $.each(prodList,function() {
//               tableContent += '<tr>';
//               tableContent += '<td><a href="#"  class="linkresinfo" rel="' + this['id'] +'">' + this['title'] + '</a></td>';
//               tableContent += '<td>' + this['producer'] + '</td>';
//               tableContent += '<td>' + this['genre'] + '</td>';
//               tableContent += '<td>' + this['rating'] + '</td>';
//               tableContent += '<tr>';
//         });
//         $('#prodList table tbody').html(tableContent);
//       }
//     }
//   );
// }

function displayNum(num) {
  var tableContent = '';
  for (var i = 0; i < num; i++)
  {
    tableContent += '<tr>';
    tableContent += '<td><a href="#"  class="linkresinfo" rel="' + prodData[i]['id'] +'">' + prodData[i]['title'] + '</a></td>';
    tableContent += '<td>' + prodData[i]['producer'] + '</td>';
    tableContent += '<td>' + prodData[i]['genre'] + '</td>';
    tableContent += '<td>' + prodData[i]['rating'] + '</td>';
    tableContent += '<tr>';
  }
  $('#prodList table tbody').html(tableContent);

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

function showProdInfo(e) {
  e.preventDefault();

  var prodID = $(this).attr('rel');

  var pos = prodData.map(function(prod) {
    return prod.id;
  }).indexOf(prodID);

  $('#prodInfoTitle').text(prodData[pos]['title']);
  $('#prodInfoYear').text(prodData[pos]['theaterdate']);
  $('#prodInfoProducer').text(prodData[pos]['producer']);
  $('#prodInfoGenre').text(prodData[pos]['genre']);
  $('#prodInfoRating').text(prodData[pos]['rating']);
  $('#prodInfoDesc').text(prodData[pos]['desc']);
}