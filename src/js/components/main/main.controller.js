(function() {

  'use strict';

  angular
    .module('denver-cloud.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */

    this.changeDisplayImage = function(cloud) {
      this.currentImage = cloud.imgL;
      this.stonerQuote = cloud.stoner;
      this.fact1 = cloud.fact1;
      this.fact2 = cloud.fact2;
    }

    this.clouds = {
      "cirrus":{
        "imgS":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cirrus_clouds2.jpg/220px-Cirrus_clouds2.jpg",
        "imgL":"https://static1.squarespace.com/static/559951b2e4b0b41e79738182/560711fae4b090376bf673ab/5846d03f4402433c43db056e/1481035980728/3.png?format=1500w",
        "imgNoBack":"",
        "stoner":"It's thin and wispy, the highest of the clouds, heh",
        "fact1":"Heights greater than 20,000 feet.",
        "fact2":"From the freezing of supercooled water droplets."
      },
      "cirrostratus":{
        "imgS":"http://www.weatheronline.co.uk/daten/gifs/Cs_und_fib_thumb.jpg",
        "imgL":"https://s-media-cache-ak0.pinimg.com/736x/55/09/f3/5509f30e7d83b5f2a4d162efc7053dcd.jpg",
        "stoner":"Crystal is bad man, don't mess with that stuff.",
        "fact1":"It is reported in the SYNOP code as CH8 or as CH5 or 6 (depending on the amount of sky covered)",
        "fact2":"Mother Clouds - Genitus and Mutatus."
      },
      "cirrocumulus":{
        "imgS":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cirrocumulus_clouds_Thousand_Oaks_July_2010.jpg/300px-Cirrocumulus_clouds_Thousand_Oaks_July_2010.jpg",
        "imgL":"http://images.wisegeek.com/cirrocumulus-clouds.jpg",
        "stoner":"Looks like shatter.",
        "fact1":"Each cloudlet appears no larger than a finger held at arm's length.",
        "fact2":"tend to reflect the red and yellow colours during a sunset and sunrise."
      },
      "altostratus":{
        "imgS":"http://media.buzzle.com/media/images-en/gallery/earth-science/clouds/450-139961449-altostratus-undulatus.jpg",
        "imgL":"http://cloud-maven.com/wp-content/uploads/2016/10/DSC_9007-1024x683.jpg",
        "stoner":"Hanging in the middle. Not too high. Just high enough.",
        "fact1":"Pattern-based varieties: Radiatus, duplicatus, and undulatus are all occasionally associated with altostratus.",
        "fact2":"Tends to form ahead of a warm or occluded front, the altostratus gradually thickening into rain bearing nimbostratus."
      },
      "altocumulus":{
        "imgS":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Altocumulus.jpg/220px-Altocumulus.jpg",
        "imgL":"http://epod.usra.edu/.a/6a0105371bb32c970b01b7c7e7d4e7970b-pi",
        "stoner":"Like little buds",
        "fact1":"Signifies convection.",
        "fact2":"Similar to cirrocumulus, but individual segments are larger and darker."
      },
      "nimbostratus":{
        "imgS":"https://c1.staticflickr.com/9/8514/8425711995_bf10772db2.jpg",
        "imgL":"https://upload.wikimedia.org/wikipedia/commons/3/3b/2014_Nimbostratus.jpg",
        "stoner":"Just above the fog",
        "fact1":"Forms in the middle level or étage of the troposphere.",
        "fact2":"Cumulus clouds are puffy, like cotton floating in the sky."
      },
      "culmulus":{
        "imgS":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/GoldenMedows.jpg/300px-GoldenMedows.jpg",
        "imgL":"https://i.ytimg.com/vi/2hCIgsCKoWE/maxresdefault.jpg",
        "stoner":"It's your regular. Your go too.",
        "fact1":"Often, when an altostratus cloud thickens and descends into lower altitudes, it will become nimbostratus.",
        "fact2":"Cumulus clouds are puffy, like cotton floating in the sky."
      },
      "stratus":{
        "imgS":"http://www.canadiangeographic.com/atlas/Images/Glossary/Stratus.jpg",
        "imgL":"https://coclouds.com/wp-content/uploads/2011/08/leopard-spot-stratus-clouds-2011-08-18.jpg",
        "stoner":"Smoking inside on a rainy day because of these clouds. Dude, you know.",
        "fact1":"",
        "fact2":""
      },
      "cumulonimbus":{
        "imgS":"http://victoria-weather.com/wp-content/uploads/2016/12/cumulonimbus.jpg",
        "imgL":"https://i.ytimg.com/vi/232LFz-aiz4/maxresdefault.jpg",
        "stoner":"It brings the thunder.",
        "fact1":"Describe flat, hazy, featureless clouds of low altitude varying in color from dark gray to nearly white.",
        "fact2":"Some call these clouds \"high fog.\""
      },
      "straocumulus":{
        "imgS":"https://vignette2.wikia.nocookie.net/weather/images/e/ef/Large_Stratocumulus.jpeg/revision/latest?cb=20120822164515",
        "imgL":"http://www.windows2universe.org/earth/Atmosphere/images/stratocumulus1_small.jpg",
        "stoner":"Weak like brick weed, stay away from that schwag man.",
        "fact1":"dense towering vertical cloud[1] associated with thunderstorms and atmospheric instability, forming from water vapor carried by powerful upward air currents/",
        "fact2":"Tut tut it looks like rain."
      },
      "asperitas":{
        "imgS":"https://pbs.twimg.com/media/C8KSvuCVoAAxy7D.jpg",
        "imgL":"https://4.bp.blogspot.com/-cUwpGEbeovQ/VxZPXUCzMBI/AAAAAAAAlVc/BFYAAARc8kkogx3slwtN8ZaDFZ1wP4pygCLcB/s1600/wow.jpg",
        "stoner":"Looks like a delicious dessert",
        "fact1":"blah blah",
        "fact2":"No one knows."
      }
    }

  this.currentImage = 'http://40.media.tumblr.com/19258df95c3dc6c93d8bf1f99e115156/tumblr_n6xb7h7uC21tuwt3oo1_500.png';
  this.stonerQuote = '';
  this.fact1 = '';
  this.fact2 = '';

  }

})();
