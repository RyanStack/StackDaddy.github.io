function Controller(view) {
  this.view = view
}

Controller.prototype = {
  bindListeners: function() {
    var self = this;
    var portfolioButton = this.view.getPortfolioButton();
    portfolioButton.addEventListener("click", this.loadPortfolio.bind(this));

    var footerDiv = this.view.getFooterDiv();
    $(footerDiv).on("mouseover", self.stretchFooter.bind(this));
    $(footerDiv).on("mouseleave", self.unstretchFooter.bind(this));
    },

  loadPortfolio: function(event) {
    event.preventDefault();
    var portfolio = this.view.preparePortfolio();
    this.view.render()
  },

  stretchFooter: function() {
    console.log(this)
    this.view.liftFooter();
  },
  unstretchFooter: function() {
    this.view.unLiftFooter();
  }

}