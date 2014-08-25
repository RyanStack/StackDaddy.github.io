function Controller(view) {
  this.view = view
}

Controller.prototype = {
  bindListeners: function() {
    var self = this;
    var portfolioButton = this.view.getPortfolioButton();
    portfolioButton.addEventListener("click", this.loadPortfolio.bind(this));
    var contactButton = this.view.getContactButton();
    contactButton.addEventListener("click", this.loadContacts.bind(this))

    var footerDiv = this.view.getFooterDiv();
    $(footerDiv).on("mouseover", self.stretchFooter.bind(this));
    $(footerDiv).on("mouseleave", self.unstretchFooter.bind(this));
    },

  loadPortfolio: function(event) {
    event.preventDefault();
    var portfolio = this.view.preparePortfolio();
    var fixContacts = document.querySelector('.contact').style.display == "inline-block";
    if (fixContacts) {
      this.view.renderContacts();
    }
    this.view.render();
  },

  loadContacts: function(event) {
    event.preventDefault();
    var fixPort = document.querySelector('.block').style.display == "inline-block";
    if (fixPort) {
      this.view.render()
    }
    this.view.renderContacts();
  },


  stretchFooter: function() {
    var info;
    var portInfo = document.querySelector('.block').style.display == "inline-block";
    if (portInfo) {
      info = ".block"
    }
    var contactInfo = document.querySelector('.contact').style.display == "inline-block";
    if (contactInfo) {
      info = ".contact"
    }
    this.view.liftFooter(info);
  },
  unstretchFooter: function() {
    var info;
    var portInfo = document.querySelector('.block').style.display == "inline-block";
    if (portInfo) {
      info = ".block"
    }
    var contactInfo = document.querySelector('.contact').style.display == "inline-block";
    if (contactInfo) {
      info = ".contact"
    }
    this.view.unLiftFooter(info);
  }

}