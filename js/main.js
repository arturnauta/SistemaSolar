var planet_names = ["mars","tinder","uranus","venus","namekusein","earth","pluton","mercury"];
var Planet = function(){
  return {
    //Atributtes
    clockwise_translation: Math.round(Math.random()),
    size: Math.random() * (100 - 10) + 10,
    speed: Math.random() * (10 - 1) + 1, //deg/sec
    color: "#AAA",
    orbit_size: Math.random() * (400 - 200) + 200,
    orbit_position: Math.random() * 360,
    name: planet_names.pop(),
    dom_orbit: null,
    dom_planet: null,
    rotation_process_id : null,
    //Methods
    getSize: function(){
      return this.size + "px";
    },
    getSpeed: function(){
      return this.speed + "deg";
    },
    getOrbitSize: function(){
      return this.orbit_size + "px";
    },
    pushDOMElement: function(dom_parent){
      //Describe the body planet properties
      var planet_orbit = document.createElement("li");
      //Describe the body size o body properties
      var planet_body = document.createElement("span");
      planet_body.setAttribute("class","planet");
      planet_orbit.appendChild(planet_body);
      planet_body.textContent = this.name;
      planet_body.style.width = this.getSize();
      planet_body.style.height = this.getSize();
      planet_orbit.style.position = "absolute";
      planet_orbit.style.transform = "rotate("+this.orbit_position+"deg)";
      planet_orbit.style.transformOrigin = "top left";
      planet_orbit.style.top = "0";
      planet_orbit.style.left = "0";
      planet_orbit.style.width = this.getOrbitSize();
      planet_orbit.style.height = this.getOrbitSize();
      planet_body.style.position = "absolute";
      planet_body.style.bottom = 0;
      planet_body.style.right = 0;
      this.dom_orbit = planet_orbit;
      this.dom_planet = planet_body;
      dom_parent.appendChild(planet_orbit);
    },
    startRotation: function(){
      var self = this;
      var freq = 10;
      this.rotation_process_id = setInterval(function(){
        if(self.clockwise_translation === 1){
          self.orbit_position += self.speed/freq;
        }else{
          self.orbit_position -= self.speed/freq;
        }
        self.dom_orbit.style.transform = "rotate("+self.orbit_position+"deg)";
      },1000/freq);
    },
    addEventHandlerToStop: function(){
      var self = this;
      this.dom_planet.addEventListener("mouseover",function(){
        clearInterval(self.rotation_process_id);
      });
    },
    addEventSun: function(){
      document.getElementById("#sun").
      console.log(SOL);
      dom_planet.addEventListener("mouseover",function(){
        console.log("SOL");
        startRotation();
      });
    },
  };
};
var number_of_planets = 8;
var planets = [];
while(number_of_planets-- > 0){
  planets.push(Planet());
}
console.log(planets);
document.addEventListener("DOMContentLoaded", function(){
  var planetary_system = document.querySelector(".planets");
  for(var planet_pos in planets){
    planets[planet_pos].pushDOMElement(planetary_system);
    planets[planet_pos].startRotation();
    planets[planet_pos].addEventHandlerToStop();
  }
});
