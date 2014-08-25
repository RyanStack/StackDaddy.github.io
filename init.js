window.onload = function() {
  var tags = {portfolio: "#portfolio",
              about: "#about",
              contact: "#contact",
              projects: "#outlineportfolio",
              footer: "#footer",
              work: ".project"
  }
  var view = new View(tags);
  var controller = new Controller(view);

  controller.bindListeners();
  console.log('listeners bound')
}


