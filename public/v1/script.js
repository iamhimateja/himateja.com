var container = $('body > .container'),
    a = $('#a'),
    b = $('#b'),
    ad = $('#a .details'),
    bd = $('#b .details'),
    bdd = $('#b .bd'),
    am = $('#am'),
    wrk = $('#wrk'),
    con = $('#con'),
    close = $('#close'),
    drawer = $('.drawer'),
    mobile = $('.mobile_nav'),
    add = $('.ad'),
    mam = $('#mam'),
    mwrk = $('#mwrk'),
    mcon = $('#mcon'),
    mcol = $('#mcol'),
    aclose = $('.a__close'),
    adsense = $('.adsense'),
    adclose = $('.adsense .ad > .close');

function showAd() {
  container.addClass('blur');
  adsense.addClass('active');
}

function hideAd() {
  container.removeClass('blur');
  adsense.removeClass('active');
}

function showDetailsa() {
  ad.addClass('left');
  bd.addClass('left');
  close.addClass('show');
  bdd.attr('class','bd showa');
}

function showDetailsaa() {
  aclose.addClass('show');
  add.attr('class','ad showa');
}

function showDetailsb() {
  ad.addClass('left');
  bd.addClass('left');
  close.addClass('show');
  bdd.attr('class','bd showb');
}

function showDetailsab() {
  aclose.addClass('show');
  add.attr('class','ad showb');
}

function showDetailsc() {
  ad.addClass('left');
  bd.addClass('left');
  close.addClass('show');
  bdd.attr('class','bd showc');
}

function showDetailsac() {
  aclose.addClass('show');
  add.attr('class','ad showc');
}

function hideDetails() {
  ad.removeClass('left');
  bd.removeClass('left');
  close.removeClass('show');
  bdd.attr('class','bd');
}

function hideDetailsa() {
  aclose.removeClass('show');
  add.attr('class','ad');
}

$(document).ready(function() {

am.on('click', function(event) {
  event.preventDefault();
  $('.nav').find('li.selected').removeClass('selected');
  $(this).parent('li').addClass('selected');
  showDetailsa();
});
wrk.on('click', function(event) {
  event.preventDefault();
  $('.nav').find('li.selected').removeClass('selected');
  $(this).parent('li').addClass('selected');
  showDetailsb();
});
con.on('click', function(event) {
  event.preventDefault();
  $('.nav').find('li.selected').removeClass('selected');
  $(this).parent('li').addClass('selected');
  showDetailsc();
});
close.on('click', function(event) {
  event.preventDefault();
  $('.nav').find('li.selected').removeClass('selected');
  hideDetails();
});


$('ul[works] li a').on('click', function() {
  var iframeSrc = $(this).data('link');
  $('.iframe').find('iframe').attr('src', iframeSrc).end().addClass('visible');
});

$('.iframe .cls_frame').on('click', function() {
  $('.iframe').find('iframe').attr('src', '').end().removeClass('visible');
});

drawer.on('click',function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  mobile.toggleClass('active');
});

mam.on('click', function(event) {
  event.preventDefault();
  showDetailsaa();
  drawer.removeClass('active');
  mobile.removeClass('active');
});

mwrk.on('click', function(event) {
  event.preventDefault();
  showDetailsab();
  drawer.removeClass('active');
  mobile.removeClass('active');
});

mcon.on('click', function(event) {
  event.preventDefault();
  showDetailsac();
  drawer.removeClass('active');
  mobile.removeClass('active');
});

aclose.on('click', function(event) {
  event.preventDefault();
  drawer.removeClass('active');
  mobile.removeClass('active');
  hideDetailsa();
});

function getRandomColors(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function stringToArray(fullString, separator) {
  var fullArray = [];

  if (fullString !== undefined) {
    if (fullString.indexOf(separator) == -1) {
      fullAray.push(fullString);
    } else {
      fullArray = fullString.split(separator);
    }
  }

  return fullArray;
}

var colors = ['#5CACC4','#00A0B0','#FE4B74','#457D97','#248F8D','#B9D7D9','#A8E6CE','#FFAAA6','#FF8C94','#F36A71','#A9C1D9','#215A6D','#AD849A','#99B898','#5E9FA3','#058789','#A8A39D','#2B4C7E','#3299BB','#E21B5A','#E5625C','#F9BF76','#6DA67A','#028F76','#45ADA8','#E86F9E','#F0D399','#7DBEB8','#0B8185','#36BBA6','#30C4C9','#88ABC2','#161616','#336666','#A38A5F','#5B756C','#127A97','#1E8C93'];

var myString = ""+ getRandomColors(colors, 12) +"";
var colorsArray = stringToArray(myString, ',');
for (var i = 0; i < colorsArray.length; i++) {
  console.log(colorsArray[i]);
};
var colors = $('#colors');
var list = $('.colors');
var o = 0;
for (var i = 0; i < colorsArray.length; i++) {
  colors.append('.color'+ (i+1) +' #a {background:'+ colorsArray[i] +' !important;}.color'+ (i+1) +' section#b div.details {color:'+ colorsArray[i] +' !important;}.color'+ (i+1) +' #close,.color'+ (i+1) +' .cls_frame {background:'+ colorsArray[i] +' !important;}.color'+ (i+1) +' .nav {box-shadow:inset 0.2vw 0px '+ colorsArray[i] +' !important;}.color'+ (i+1) +' .nav li.selected {box-shadow:inset 0.3vw 0px '+ colorsArray[i] +' !important;}.color'+ (i+1) +' .nav a {color: '+ colorsArray[i] +' !important;}.nav a:after {background: '+ colorsArray[i] +' !important;}.color'+ (i+1) +' #bdb .container ul[works] li a:hover,.color'+ (i+1) +' {box-shadow: 0 0 0 0.5vw #fff, 0 0 0px 0.65vw '+ colorsArray[i] +' !important;}.color'+ (i+1) +' #bdb .container ul[works] li a h1 {color:'+ colorsArray[i] +'; !important}.colors span:nth-child('+ (i+1) +'){background-color:'+ colorsArray[i] +' !important}.colors span:nth-child('+ (i+1) +'):after {content:"'+ colorsArray[i] +'" !important}');
  list.append('<span data-color="color'+ (i+1) +'"></span>');
};

var picker = $('#theme-picker');
var closecol = $('.close_colors');
picker.on('click',function(event){
	event.preventDefault();
	$('.theme').addClass('show');
});

closecol.on('click',function(event){
  event.preventDefault();
  $('.theme').removeClass('show');
});

var color_item = $('.colors > span');
var body = $('body');
color_item.on('click',function(event) {
  var data_color = $(this).data('color');
  body.attr('class',data_color);
  $('.colors').find('span.current').removeClass('current');
  $(this).addClass('current');
  $('.theme').removeClass('show');
});

var reset = $('.reset');

reset.on('click',function(event) {
  event.preventDefault();
  body.removeAttr('class');
  $('.colors').find('span.current').removeClass('current');
  $('.theme').removeClass('show');
});
});