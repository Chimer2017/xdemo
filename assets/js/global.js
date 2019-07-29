var i;
var prodData = [];
var watchLater = [];
var studios = [];
var years = [];
var producers = [];
var disStudios, disYears,disProducers;


getProdMapData();

$(document).ready(function() {
    $("#searchBar").on("keyup",function(){return searchTable($(this).val().toLowerCase());});
    $('#prodList td a.link-prod-info').on("click",showProdInfo);
    $('#watchLater').on("click",addToWatchLater);
    $('#watchNow').on('click',watchNow);
    
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
  var and = ' AND ';
  var value;
  var triggerValue = $(this).attr('value');
  var triggerFilter = $(this).attr('rel');
  console.log(triggerValue);

  if ( triggerFilter == 'display-num') {
    console.log(triggerValue);
    displayNum(triggerValue);
    $('span.filter-header.display-num').text("Displaying: " + triggerValue);
    return;
  }

  $.each(filters,function(){
    
    var filter = $(this).attr('name');
    // console.log("Filter: " + filter);
    // console.log($(this).attr('name')+ ":"+$(this).attr('value'));
    filter = filter.toLowerCase();
    filter = filter.replace(/:/g,'');
    value = $(this).attr('value');
    console.log("Filter: " + filter);
    console.log($(this).attr('name')+ ":"+$(this).attr('value'));
    if((value != "null") || (filter == triggerFilter)) {
      
      
      if (filter == 'rating') {
        if ( value == 'null') value = triggerValue;
        console.log("In Rating -->");
        value = value.replace(/-/g,'');
        if (value =="Not Rated") value = "NR";
        var temp = filter + ' = "' + value + '"';
        qryStr += temp + and;
        $('span.filter-header.rating').text("Rating: " + value);

      }

      if (filter == 'genre') {
        console.log("In Genre -->");
        if (value == 'null') value = triggerValue;
        var temp = filter + ' = "' + value + '"';
        qryStr += temp + and;
        $('span.filter-header.genre').text("Genre: " + value);

      }

      if (filter == 'studio') {
        console.log("In Studio -->");
        if (value == 'null') value = triggerValue;
        var temp = filter + ' = "' + value + '"';
        qryStr += temp + and;
        $('span.filter-header.studio').text("Studio: " + value);

      }

    }
    $('#prodList td a.link-prod-info').on("click",showProdInfo);
    $('span.filter-header.' + triggerFilter).attr('value',triggerValue);
    
  });
  
  console.log(qryStr);
  $.getJSON('/users/filter/' + 'rating = "R"',function(data){
    repopulateTable(data,'all');
  });
}

function getProdMapData() {
  console.log("Getting data");
  $.getJSON('/users/100',function(data) {
    $.each(data, function(index,el){
      studios.push(el['studio']);
      producers.push(el['producer']);
      years.push(el['theaterdate']);

    })
    fillFilters();
    prodData = data;
    $('a.collapse-item.filter-option').on('click',filterTable);
  });
  console.log("Got that data");
  
};

function valTest() {
  console.log($(this).attr('val'));
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
  if (!checkButtonDisabled(prodID)) {
    $('#watchLater').removeClass('disabled');
  } else {
    $('#watchLater').addClass('disabled');
  }
  if (!checkButtonDisabled(prodID)) {
    var pos = dataPosMap(prodID);
    watchLater.push(prodData[pos]);
    console.log(watchLater);
    $(this).addClass('disabled');
    repopulateTable(watchLater,'later');
  }
  
}

function watchNow() {
  alert("watching now");
}

function repopulateTable(arr,table_type) {
  var tableContent = '';
  console.log("len: " + arr.length);
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

function fillFilters() {
  disStudios = [...new Set(studios)];
  var temp = [];
  // console.log(producers);
  producers.forEach(function(el) {
    el.forEach(function(e) {
      temp.push(e);
    });
  });
  disProducers = [...new Set(temp)];
  temp = [];
  years.forEach(function(el){
    var val = parseInt(el.substring(el.length-4,el.length),10);
    temp.push(val);
  });
  disYears = [...new Set(temp)];
  disYears.sort();
  disYears = disYears.slice(0,disYears.length-1);
  fillFiltersHelper(disStudios,'studio');
  fillFiltersHelper(disProducers,'producer');
  fillFiltersHelper(disYears,'theaterdate');

};

function fillFiltersHelper(array,rel) {
  var filterContent = '';
  for(var i = 0; i < array.length; i++)
  {
    filterContent += '<a href="#" class="collapse-item filter-option" rel="' + rel + '" value="' + array[i].toString() +'">' + array[i].toString() + '</a>' ;
  }
  $('#'+rel+' div.bg-white.border.rounded.py-2.collapse-inner').html(filterContent);
 
  


};

