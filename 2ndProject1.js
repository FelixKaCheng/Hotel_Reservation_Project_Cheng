function Hotel(name, rooms, stars){
  this.name=name;
  this.rooms=rooms;
  this.stars= stars;
};
var hotel1 = new Hotel ('Royalton', 170, '&#127775; &#127775; &#127775; &#127775;' );
var hotel2 = new Hotel('The Quin', 120, '&#127775; &#127775; &#127775; &#127775; &#127775;' );
var hotel3 = new Hotel('The Roosevelt', 250, '&#127775; &#127775; &#127775;');
var hotel4= new Hotel('The Iroquois New York', 150, '&#127775; &#127775;&#127775; &#127775;' );
console.log(hotel1.name,hotel1.rooms,hotel1.stars);

// set up initial booked number for each hotel. assuming that booked initially=0

var bookedHotel1=0;
var bookedHotel2=0;
var bookedHotel3=0;
var bookedHotel4=0;

for (runs=0; runs<10; runs++){
  var randomNum = Math.floor((Math.random()*4)+1);
  console.log(randomNum);
  if(randomNum==1){
    bookedHotel1++;
}
else if(randomNum==2){
  bookedHotel2++;
}
else if(randomNum==3){
  bookedHotel3++;
}
else {
  bookedHotel4++;
}
};

var avail1=hotel1.rooms-bookedHotel1;
var avail2=hotel2.rooms-bookedHotel2;
var avail3=hotel3.rooms-bookedHotel3;
var avail4=hotel4.rooms-bookedHotel4;

document.getElementById('hotel1tr').innerHTML= "<div class='textWrapper'>" +hotel1.name+ "<p id='starDisplay'>Stars: "+ hotel1.stars + "</p> Total Rooms: "+ hotel1.rooms + "<br/><br/> Booked Rooms:"+ bookedHotel1 + "<br/><br/> Available Rooms: "+ avail1+ "</div>";

document.getElementById('hotel2tr').innerHTML="<div class='textWrapper'>"+ hotel2.name+ "<br/><br/> Stars: "+ hotel2.stars + "<br/><br/> Total Rooms: "+ hotel2.rooms + "<br/><br/> Booked Rooms:"+ bookedHotel2 + "<br/><br/> Available Rooms: "+ avail2+ "</div>";

document.getElementById('hotel3tr').innerHTML="<div class='textWrapper'>"+ hotel3.name+ "<br/><br/> Stars: "+ hotel3.stars + "<br/><br/> Total Rooms: "+ hotel3.rooms + "<br/><br/> Booked Rooms:"+ bookedHotel3 + "<br/><br/> Available Rooms: "+ avail3+ "</div>";

document.getElementById('hotel4tr').innerHTML="<div class='textWrapper'>"+ hotel4.name+ "<br/><br/> Stars: "+ hotel4.stars + "<br/><br/> Total Rooms: "+ hotel4.rooms + "<br/><br/> Booked Rooms:"+ bookedHotel4 + "<br/><br/> Available Rooms: "+ avail4 + "</div>";

var msg ='<div id="msgNote"><a id="close" href="#">X</a><h2>Hotels</h2>';
msg+= '<hr/>Close me for further details of the hotel!<br/>';
msg += '<br/><button>Safety First ! Fun Later ! </button></div>' ;

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;

document.body.appendChild(elNote);

function dismissNote(){
  document.body.removeChild(elNote);
}
var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

btn2.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "block";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

btn3.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "block";
    modal4.style.display = "none";
}

btn4.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

span2.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

span3.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

span4.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}
