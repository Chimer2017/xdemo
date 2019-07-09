var coll = document.getElementsByClassName("collapsible");
var i;
var prodData = [];
var filters = $("table.filter-section tbody");
var watchLater = [];



getProdMapData(populateFilters);

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


    $('#prodList td a.link-prod-info').on("click",showProdInfo);
    $('#watchLater').on("click",addToWatchLater);
    $('#watchNow').on('click',watchNow);

    $("#defaultOpen").click();
});

function populateFilters() {
  //for item in data
  $.each(filters,function(){
    var filterType = $(this).attr('rel');
    var filterDict = {};
    console.log(filterType);
    console.log(prodData[i]);
    for (var i = 0; i < prodData.length;i++)
    {
      console.log(prodData[i]['title']);
    }
  });
    // check if in object
      //if yes, then next item
      //else add item to filter table



}

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

function getProdMapData(_callback) {
  $.ajax(
    {
      url: 'users/100', 
      success: function(result){
        var prodList = result;
        prodData = prodList;
        console.log('hello');
      }
    }
  );
  _callback();
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
    tableContent += '<td><a href="#"  class="link-prod-info" rel="' + prodData[i]['id'] +'">' + prodData[i]['title'] + '</a></td>';
    tableContent += '<td>' + prodData[i]['producer'] + '</td>';
    tableContent += '<td>' + prodData[i]['genre'] + '</td>';
    tableContent += '<td>' + prodData[i]['rating'] + '</td>';
    tableContent += '<tr>';
  }
  $('#prodList table tbody').html(tableContent);
  $('#prodList td a.link-prod-info').on("click",showProdInfo);


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

function dataPosMap(prodID) {
  var pos = prodData.map(function(prod) {
    return prod.id;
  }).indexOf(prodID);

  return pos;
}

function showProdInfo(e) {
  openNav();
  e.preventDefault();
  var prodID = $(this).attr('rel');
  var pos = dataPosMap(prodID);

  $('#prodInfoTitle').text(prodData[pos]['title']);
  $('#prodInfoYear').text(prodData[pos]['theaterdate']);
  $('#prodInfoProducer').text(prodData[pos]['producer']);
  $('#prodInfoGenre').text(prodData[pos]['genre']);
  $('#prodInfoRating').text(prodData[pos]['rating']);
  $('#prodInfoDesc').text(prodData[pos]['desc']);
  $('.stream-actions').attr('rel',prodData[pos]['id'])
}

function openNav() {
  $("#prodInfo").css('width','325px');
  $('#main').css('marginRight','325px');
}

function closeNav() {
  $("#prodInfo").css('width','0');
  $('#main').css('marginRight','0');
}

function addToWatchLater(e) {
  e.preventDefault();
  var prodID = $(this).attr('rel');
  var pos = dataPosMap(prodID);
  watchLater.push(prodData[pos]);
}

function watchNow() {
  alert("watching now");
}

function openTab(tableName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(tableName).style.display = "block";
  if (tableName == "watchLaterTable") {
    repopulateTable();
  }

  elmnt.style.backgroundColor = "powderblue";
}

function repopulateTable() {
  var tableContent = '';
  for (var i = 0; i < watchLater.length;i++)
  {
    tableContent += '<tr>';
    tableContent += '<td><a href="#"  class="link-prod-info" rel="' + watchLater[i]['id'] +'">' + prodData[i]['title'] + '</a></td>';
    tableContent += '<td>' + watchLater[i]['producer'] + '</td>';
    tableContent += '<td>' + watchLater[i]['genre'] + '</td>';
    tableContent += '<td>' + watchLater[i]['rating'] + '</td>';
    tableContent += '<tr>';
  }

  $('#watchLaterTable table tbody').html(tableContent);
};