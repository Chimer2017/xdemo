// var coll = document.getElementsByClassName("collapsible");
var i;
var prodData = [];
// var filters = $("table.filter-section tbody");
var watchLater = [];

getProdMapData();

$(document).ready(function() {
    $('a.collapse-ite,.filter-option').on('click',filterTable);
    $("#searchBar").on("keyup",function(){return searchTable($(this).val().toLowerCase());});
    $('#prodList td a.link-prod-info').on("click",showProdInfo);
//     $('#watchLater').on("click",addToWatchLater);
    $('#watchNow').on('click',watchNow);
//     $("#defaultOpen").click();
});

function searchTable(value) {
  $("#prodList tbody tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
}

// function populateFilters() {
//   //for item in data
//   $.each(filters,function(){
//     var filterType = $(this).attr('rel');
//     var filterDict = {};
//     // console.log(filterType);
//     // console.log(prodData[i]);
//     for (var i = 0; i < prodData.length;i++)
//     {
//       // console.log(prodData[i]['title']);
//     }
//   });
//     // check if in object
//       //if yes, then next item
//       //else add item to filter table



// }

// function activateSearch() {
//   var input = $('#search');
//   //input.val("hello");
// }

function filterTable() {
  console.log("Recieved request to filter table!");
  var value = $(this).attr('value');
  var filter = $(this).attr('rel');
  if ( filter == 'display-num') {
    displayNum(value);
    console.log(value);
    $('span.filter-header.display-num').text("Displaying: " + value);
  } else if ( filter == 'rating') {
    value = value + "";
    rateByFilter(value);

  }
}

function getProdMapData() {
  $.ajax(
    {
      url: 'users/100', 
      success: function(result){
        var prodList = result;
        prodData = prodList;
      }
    }
  );
}

function displayNum(num) {
  var copyArr = prodData.slice(0);
  copyArr.splice(num);
  repopulateTable(copyArr,'all');
  $('#prodList td a.link-prod-info').on("click",showProdInfo);


}

function rateByFilter(value) {
  var searchStr = value.replace(/-/g,'');
  searchStr = searchStr.toLowerCase();
  if (searchStr == "not rated") {
      searchStr = "nr";
  }
  var tds = $("#prodList tr td.rating");
  $.each(tds,function() {
    var rating = $(this).text();
    rating = rating.toLowerCase();
    rating = rating.replace(/-/g,'');
    console.log(rating);
    if (rating === searchStr) {
      $(this).parent().show();
    } else {
      $(this).parent().hide();
    }

  });

  $('span.filter-header.rating').text("Rating: " + value);

}


function dataPosMap(prodID) {
  var pos = prodData.map(function(prod) {
    return prod.id;
  }).indexOf(prodID);

  return pos;
}

function showProdInfo(e) {
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

// function addToWatchLater(e) {
//   e.preventDefault();
//   var prodID = $(this).attr('rel');
//   var pos = dataPosMap(prodID);
//   watchLater.push(prodData[pos]);
// }

function watchNow() {
  alert("watching now");
}

// function openTab(tableName, elmnt) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }

//   document.getElementById(tableName).style.display = "block";
//   if (tableName == "watchLaterTable") {
//     repopulateTable(watchLater);
//   }

//   elmnt.style.backgroundColor = "powderblue";
// }

function repopulateTable(arr,table_type) {
  var tableContent = '';
  for (var i = 0; i < arr.length;i++)
  {
    tableContent += '<tr>';
    tableContent += '<td class="title" value="'+ arr[i]['title'] + '" ><a href="#"  class="link-prod-info" rel="' + arr[i]['id'] +'">' + arr[i]['title'] + '</a></td>';
    tableContent += '<td class="producer" value="'+ arr[i]['producer'] + '">' + arr[i]['producer'] + '</td>';
    tableContent += '<td class="genre" value="'+ arr[i]['genre'] + '">' + arr[i]['genre'] + '</td>';
    tableContent += '<td class="rating" value="'+ arr[i]['rating'] + '">' + arr[i]['rating'] + '</td>';
    tableContent += '<tr>';
  }
  var tableQuery;
  if (table_type == "all") {
      tableQuery = '#prodList tbody';
  } else {
      tableQuery = '#watchLaterTable table tbody';
  }
  $(tableQuery).html(tableContent);


};