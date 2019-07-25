var i;
var prodData = [];
// var filters = $("table.filter-section tbody");
var watchLater = [];

getProdMapData();

$(document).ready(function() {
    $('a.collapse-ite,.filter-option').on('click',filterTable);
    $("#searchBar").on("keyup",function(){return searchTable($(this).val().toLowerCase());});
    $('#prodList td a.link-prod-info').on("click",showProdInfo);
    $('#watchLater').on("click",addToWatchLater);
    $('#watchNow').on('click',watchNow);
//     $("#defaultOpen").click();
});

function searchTable(value) {
  $("#prodList tbody tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
}

function filterTable() {



  console.log("Recieved request to filter table!");
  var filters = $("span.filter-header");
  filters.splice(0,1);
  var qryStr = "";
  var value;
  var triggerValue = $(this).attr('value');
  var triggerFilter = $(this).attr('rel');

  if ( triggerFilter == 'display-num') {
    console.log(triggerValue);
    displayNum(triggerValue);
    $('span.filter-header.display-num').text("Displaying: " + triggerValue);
    return;
  }

  $.each(filters,function(){
    console.log($(this).attr('name')+ ":"+$(this).attr('value'));
    var filter = $(this).attr('name');
    filter = filter.toLowerCase();
    filter = filter.replace(/:/g,'');
    value = $(this).attr('value');
    if((value != "null") || (filter == triggerFilter)) {
      
      if (filter == 'rating') {
        if ( value == 'null') value = triggerValue;
        value = value.replace(/-/g,'');
        if (value =="Not Rated") value = "NR";
        var temp = filter + ' = "' + value + '"';
        qryStr = temp;
        $('span.filter-header.rating').text("Rating: " + triggerValue);

      }

      if (filter == 'genre') {
        if (value == 'null') value = triggerValue;
        var temp = filter + ' = "' + value + '"';
        qryStr = temp;
        $('span.filter-header.genre').text("Genre: " + triggerValue);

      }

     

    }
    $('#prodList td a.link-prod-info').on("click",showProdInfo);
    
  });
  
  console.log(qryStr);
  $.getJSON('/users/filter/' + qryStr,function(data){
    repopulateTable(data,'all');
  });
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
  var arr = [];
  $.getJSON('/users/' + num, function(data) {
    console.log(data);
    repopulateTable(data,'all');
  });
  $('#prodList td a.link-prod-info').on("click",showProdInfo);
};

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
    if (rating === searchStr) {
      $(this).parent().show();
    } else {
      $(this).parent().hide();
    }

  });

  $('span.filter-header.rating').text("Rating: " + value);

}

function rateByGenre(value) {
    var searchStr = value + "";
    var tds = $("#prodList tr td.genre");
    $.each(tds,function() {
        var genre = $(this).text();
        if (genre === searchStr) {
        $(this).parent().show();
        } else {
        $(this).parent().hide();
        }

    });
    $('span.filter-header.genre').text("Genre: " + value);
};

function dataPosMap(prodID) {
  var pos = prodData.map(function(prod) {
    return prod.id;
  }).indexOf(prodID);

  return pos;
}

// function showProdInfo(e) {
//   e.preventDefault();
//   var prodID = $(this).attr('rel');
//   var pos = dataPosMap(prodID);

//   if (!checkButtonDisabled(prodID)) {
//       $('#watchLater').removeClass('disabled');
//   } else {
//     $('#watchLater').addClass('disabled');
//   }

//   $('#prodInfoTitle').text(prodData[pos]['title']);
//   $('#prodInfoYear').text(prodData[pos]['theaterdate']);
//   $('#prodInfoProducer').text(prodData[pos]['producer']);
//   $('#prodInfoGenre').text(prodData[pos]['genre']);
//   $('#prodInfoRating').text(prodData[pos]['rating']);
//   $('#prodInfoDesc').text(prodData[pos]['desc']);
//   $('.stream-actions').attr('rel',prodData[pos]['id'])
// }

function showProdInfo(e) {
    console.log("Link clicked");
    e.preventDefault();
    $('#prodInfo').removeClass('hidden');
    var prodID = $(this).attr('rel');
    $.getJSON('/users/prodID/' + prodID,function(data) {
        $('#prodInfoTitle').text(data['title']);
        $('#prodInfoYear').text(data['theaterdate']);
        $('#prodInfoProducer').text(data['producer']);
        $('#prodInfoGenre').text(data['genre']);
        $('#prodInfoRating').text(data['rating']);
        $('#prodInfoDesc').text(data['desc']);
        $('.stream-actions').attr('rel',data['id']);
    });
  
    if (!checkButtonDisabled(prodID)) {
        $('#watchLater').removeClass('disabled');
    } else {
      $('#watchLater').addClass('disabled');
    }
  
}

function checkButtonDisabled(prodID) {
    for (var i = 0; i < watchLater.length;i++)
    {
        if (watchLater[i]['id'] == prodID) {
            return true;
        }
    }
    return false;



}

function addToWatchLater(e) {
  e.preventDefault();
  var prodID = $('span.stream-actions').attr('rel');
  // if (!checkButtonDisabled(prodID)) {
  //   $('#watchLater').removeClass('disabled');
  // } else {
  //   $('#watchLater').addClass('disabled');
  // }
  if (!checkButtonDisabled(prodID)) {
    var pos = dataPosMap(prodID);
    watchLater.push(prodData[pos]);
    $(this).addClass('disabled');
    repopulateTable(watchLater,'later');
  }
  
}

function watchNow() {
  alert("watching now");
}

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
      $('#watchLaterList thead tr').html('<th>Title</th><th>Producer</th><th>Genre</th><th>Rating</th>');
      tableQuery = '#watchLaterList tbody';
  }
  $(tableQuery).html(tableContent);
  $('#prodList td a.link-prod-info').on("click",showProdInfo);


}

