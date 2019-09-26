
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var refYoutube = 
{
  "pHyd":
  {
      "HH2O":
      {
          "trans":["jaranrk1YMw", "Translation", 8, 22, 2],
          "lib":["ZH20JuEhths", "Libration", 55, 100, 2],
          "bend":["3S4W-A0FlNI", "Bending", 196, 210, 5],
          "stret":["pJM9meR4lGM", "Stretching", 400, 452, 5]
      },
      "Hin":
      {
          "twist":["RkIPiaJMYs4", "Twisting", 126, 151, 5],
          "scis":["tu2GnEy1MTM", "Scissoring", 151, 166, 5],
          "stret":["cIq8u2Z0cdQ", "Stretching", 245, 375, 5]
      },
      "Hout":
      {
          "bendA":["l8gU1JEqE1M", "Bending A", 114, 124, 5],
          "bendB":["CZRCs37cXPw", "Bending B", 103, 110, 5],
          "bendC":["DqoEcYmMkLg", "Bending C", 95, 102, 5],
          "stretA":["5oBkUGO2ZH4", "Stretching A", 457, 461, 20],
          "stretBC":["abAZHLEB9N0", "Stretching B & C", 465, 470, 20]
      }
  },
  "dry":
  {
      "Hin":
      {
          "twist":["8HJitv4wDBg", "Twisting", 2, 52, 1],
          "scis":["o8FljIst79I", "Scissoring", 120, 126, 5],
          "stret":["w0gFGxQ6cFM", "Stretching", 457, 461, 20]
      },
      "Hout":
      {
          "bendA":["L5glCUrt42g", "Bending A", 114, 120, 5],
          "bendB":["m6sinzeKwc8", "Bending B", 103, 111, 5],
          "bendC":["BDKGDZ2ywn0", "Bending C", 90, 102, 5],
          "stretA":["Exq1NgVvaPw", "Stretching A", 457, 461, 20],
          "stretBC":["0DOgqdhQVZw", "Stretching B & C", 465, 470, 20]
      }
  }
}
switchFilteringVideo();

function loadStuctureImogoliteVid(){
  ytplayer_imo = new YT.Player('structureImogolite', {
    videoId: 'aH6Mv2tW6w8',
    playerVars:{
      'autoplay':1,
      'rel':0,
      'showinfo':0,}
  });
  ytplayer_imo['a'].classList.add('youtube-video');
}

function loadXANESdeconvolution(){
  var div = document.getElementById('XANES-deconvolution');
  var myScript = document.createElement('script');
  myScript.src="scripts/XANES.js";
  myScript.id="0ab3f6d5-258a-4f45-b828-2c2dd4c71277"
  div.replaceWith(myScript);
}

function loaddrx3dSiCH3(){
  var div = document.getElementById('drx3d-SiCH3');
  var myScript = document.createElement('script');
  myScript.src="scripts/drx3d_SICH3.js";
  myScript.id="c68c6c83-76b4-49cb-89e5-1f27a2d4a2ba"
  div.replaceWith(myScript);
}

function loaddrx3dSiCH3_z(){
  var div = document.getElementById('drx3d-SiCH3_z');
  var myScript = document.createElement('script');
  myScript.src="scripts/drx3d_SICH3_z.js";
  myScript.id="e44e5a9f-c0fe-4c47-998c-11e6d9ea0b65"
  div.replaceWith(myScript);
}

function loaddrx3dSiCH3_xz(){
  var div = document.getElementById('drx3d-SiCH3_xz');
  var myScript = document.createElement('script');
  myScript.src="scripts/drx3d_SICH3_xz.js";
  myScript.id="34a74f9b-2e81-4422-b3fc-cbf93383bdb2"
  div.replaceWith(myScript);
}

// Youtube Player chapter1
var ytplayer_imo, ytplayer_filtrage;
function onYouTubeIframeAPIReady() {
  ytplayer_filtrage = new YT.Player('ytplayer_filtrage', {
    videoId: 'jaranrk1YMw',
    playerVars:{
      'autoplay':0,
      'rel':0,
      'showinfo':0,}
  });
  ytplayer_filtrage['a'].classList.add('youtube-video');
}

function switchFilteringVideo(){
  var selectState, selectH, selectVib
  // document.getElementById(btn-dry);
  var element_state = document.getElementById('btn-group-state');
  for(let element of element_state.getElementsByTagName('input')){
    if (element.checked) {
      selectState = element.value;
      break;
    }
  }
  var element_selectH = document.getElementById('btn-group-H');
  for(let element of element_selectH.getElementsByTagName('input')){
    if (element.checked) {
      selectH = element.value;
      break;
    }
  }
  
  var element_Hout = document.getElementById('btn-group-Hout');
  var element_Hin = document.getElementById('btn-group-Hin');
  var element_HH2O = document.getElementById('btn-group-HH2O');

  // Hide vibration
  var id_btn_group_H;
  switch (selectH) {
    case 'Hout':
      id_btn_group_H = 'btn-group-Hout';
      element_Hout.style.display = 'inline-flex';
      element_Hin.style.display = 'none';
      element_HH2O.style.display = 'none';
      break;
    case 'Hin':
      id_btn_group_H = 'btn-group-Hin';
      element_Hout.style.display = 'none';
      element_Hin.style.display = 'inline-flex';
      element_HH2O.style.display = 'none';
      break;
    default:
      id_btn_group_H = 'btn-group-HH2O';
      element_Hout.style.display = 'none';
      element_Hin.style.display = 'none';
      element_HH2O.style.display = 'inline-flex';
      break;
  }

  // Get vibration selected
  var element_selectVib = document.getElementById(id_btn_group_H);
  for(let element of element_selectVib.getElementsByTagName('input')){
    if (element.checked) {
      selectVib = element.value;
      break;
    }
  }

  // Hide HH2O button when dry state selected
  var element_btnHH2O = document.getElementById('btn-HH2O');
  if (selectState=='dry'){
    if (selectH=='HH2O'){
      selectH='Hout';
      selectVib='stretA';
      element_Hout.style.display = 'inline-block';
      element_Hin.style.display = 'none';
      element_HH2O.style.display = 'none';
    }
    element_btnHH2O.style.display = 'none';
  } else {
    element_btnHH2O.style.display = 'inline-block';
  }

  var data_filtrage = refYoutube[selectState][selectH][selectVib];
  ytplayer_filtrage.loadVideoById(data_filtrage[0]);

  var element_caption = document.getElementById('figcaption-GeOH');
  element_caption.innerHTML = data_filtrage[1] +' - E=['+data_filtrage[2]+'meV, '+data_filtrage[3]+'meV]' + ' - s=' + data_filtrage[4];
}

$("#btn-group-Hout").on("change", function(event) { 
  console.log('bla')
  switchFilteringVideo(this);
} );

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
};

function testButton(){
  console.log('Test');
  document.getElementById('targetButton').innerHTML=
  '<script src="figures/XANES.js" id="80ea7d15-08bf-48de-bf0e-7771156f879f" async></script>';
};