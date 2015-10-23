/**
 * Created by scottbromander on 10/23/15.
 */
var peopleArray = ["Dana", "Pui", "Kelly", "Sam", "Tom", "Dane"];

var indexTracker = 0;

$(document).ready(function(){
    createCarousel(peopleArray);
    updateIndexPoints();
    appendPerson();

    $("#next").on('click', nextSlide);
    $("#prev").on('click', prevSlide);


});

function createCarousel(array){
    $("#lecture").append("<div class='main'></div>");
    var $el = $("#lecture").children().last();

    createIndexPoints(array, $el);
    createNavButtons($el);
}

function nextSlide(){
    indexTracker++;
    if(indexTracker >= peopleArray.length){
        indexTracker = 0;
    }
    updateIndexPoints();
    appendPerson();
}

function prevSlide(){
    indexTracker--;
    if(indexTracker < 0){
        indexTracker = peopleArray.length - 1;
    }

    updateIndexPoints();
    appendPerson();
}

function createNavButtons($el){
    $el.prepend("<div id='prev' class='nav-button btn btn-info'><</div>");
    $el.append("<div id='next' class='nav-button btn btn-info'>></div>");
}

function createIndexPoints(array, $el){
    //create something visual, Divs will work
    for(var i = 0; i < array.length; i++){
        //we need i, 1 for each element
        $el.append("<div class='index-point' id='index" + i + "'></div>")

    }
}

function appendPerson() {
    //$('#mainContent').children().remove(); //remove anything in maincontent
    for(var i = 0; i < peopleArray.length; i++) {
        if (indexTracker == i){
            $('#mainContent').html("<h1 class>" + peopleArray[i] + "</h1>");
        }//append Name of person on a click to main content
        //peopleArray index to equal index tracker
        //
    }
}

function updateIndexPoints(){
    for(var i = 0; i < peopleArray.length; i++){
        $("#index" + i).removeClass("index-point-active");

        if(i == indexTracker){
            $("#index" + i).addClass("index-point-active");
        }
    }
}