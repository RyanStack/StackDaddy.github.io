function View(arg) {
  this.playButton = arg["playButton"];
  this.ant = arg["ant"];
  this.wall = arg["wall"]
}

View.prototype = {
  getPlayButton: function() {
    return document.querySelector(this.playButton)
  },
  getAnt: function() {
    return document.querySelector(this.ant);
  },
  getAllAnts: function() {
    return document.querySelectorAll(this.ant);
  },
  getWall: function() {
    return document.querySelector(this.wall)
  },
  spawnAnt: function(div) {
    var clone = div.cloneNode(true);
    clone.style.display = "block"
    document.body.appendChild(clone);
  }
}