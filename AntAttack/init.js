window.onload = function() {
  var domSelectors = {
    playButton: "#button",
    ant: ".ant",
    wall: "#wall"
  }
  var view = new View(domSelectors);
  var ant = new Ant();
  var controller = new Controller(view, ant);

  controller.bindListeners();
}