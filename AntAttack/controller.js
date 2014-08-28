var moveHandle;
var spawnHandle;

function Controller (view, ant) {
  this.ant = ant
  this.view = view
}

Controller.prototype =  {
  bindListeners: function() {
    var playButton = this.view.getPlayButton();
    playButton.addEventListener("click", this.startGame.bind(this));
  },
  startGame: function() {
    var self = this
    var playButton = this.view.getPlayButton();
    var zero = this.view.getAnt();
    zero.style.display = "block"
    playButton.style.display = "none"
    var wall = this.view.getWall();
    sides = wall.getBoundingClientRect();
    setInterval(function() {
      var dangerousAnts = self.view.getAllAnts();
      for (var i = 0; i<dangerousAnts.length; i++) {
        var spot = dangerousAnts[i].getBoundingClientRect();
        if (spot.top <= sides.top || spot.left <= sides.left || spot.bottom >= sides.bottom || spot.right >= sides.right ) {
          clearInterval(moveHandle);
          clearInterval(spawnHandle);
          document.removeEventListener("mousedown", self.killAnt);
        }
      }
    }, 5)
    document.addEventListener("mousedown", this.killAnt.bind(this))
    var ant = this.view.getAnt();
    spawnHandle = setInterval(function() {
      self.view.spawnAnt(ant)
    }, 1000);

    moveHandle = setInterval(function() {
      var livingAnts = self.view.getAllAnts();
      // console.log(livingAnts.length)
      for (var i = 0; i<livingAnts.length; i++) {
        var vector = self.ant.moveAnt();
        var rect = livingAnts[i].getBoundingClientRect();
        if (vector[0] == "lat") {
          livingAnts[i].style.top = (rect.top + vector[1]).toString() + "px"
        }
        else if (vector[0] == "long") {
          livingAnts[i].style.left = (rect.left + vector[1]).toString() + "px"
        }
      }
    }, 10);
  },
  killAnt: function(event) {
    var bulletHole = document.createElement("div");
    bulletHole.className = "bulletHole";
    bulletHole.style.left = (event.pageX) + "px";
    bulletHole.style.top = (event.pageY) + "px";
    document.body.appendChild(bulletHole);
    setTimeout(function() {
    $(bulletHole).fadeOut();
    }, 300);

    var spread = bulletHole.getBoundingClientRect();
    var spreadCoords = [spread.left, spread.top,spread.left + 16, spread.top, spread.left +16, spread.top + 16, + spread.left, spread.top +16];
    var flyCoordinates = [];
    var aliveAnts = this.view.getAllAnts();
    for (var i = 0; i<aliveAnts.length; i++) {
      var box = aliveAnts[i].getBoundingClientRect();
        flyCoordinates.push([box.left, box.top,box.left + 16, box.top, box.left +16, box.top + 16, + box.left, box.top + 16])
    }
    for (var i = 0; i<flyCoordinates.length; i++) {
      if (this.ant.hitAnt(spreadCoords.concat(flyCoordinates[i])) == true) {
        $(aliveAnts[i]).remove(); // remove div somehow
      }
    }

  }

}