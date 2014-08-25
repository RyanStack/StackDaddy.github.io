function View (tags) {
  this.portfolioButton = tags["portfolio"];
  this.aboutButton = tags["about"];
  this.contactButton = tags["contact"];
  this.portfolio = tags["projects"];
  this.footer = tags["footer"];
  this.work = tags["work"];
}

View.prototype = {
  getPortfolioButton: function() {
    return document.querySelector(this.portfolioButton);
  },
  getAboutButton: function() {
    return document.querySelector(this.aboutButton);
  },
  getContactButton: function() {
    return document.querySelector(this.contactButton);
  },

  preparePortfolio: function() {
    return document.querySelectorAll(this.work)

  },
  getFooterDiv: function() {
    return document.querySelector(this.footer);
  },
  render: function() {



    $(".block").toggle("left")
    $(".block").css('display','inline-block');
    // $(".block").addClass("there");
  },

  // unrender: function() {
  //   $('.there').toggle("left")
  //   $(".there").removeClass("there");

  // },

  renderContacts: function() {
    $(".contact").toggle("left")
    $(".contact").css('display','inline-block');
    // $(".block").addClass("there");
  },

  liftFooter: function(info) {
   var footer = this.getFooterDiv();
   footer.style.height = '150px'
   $(info).css("height", "120px")
   $(info).css("margin-top", "15px")
   $(info).css("background-image", "none")
   $(info + " img").css("visibility", "initial")
   $(info + " h5").css("display", "block")
  },
  unLiftFooter: function(info) {
    var footer = this.getFooterDiv();
    footer.style.height = '60px';
    $(info).css("height", "10px")
    $(info).css("margin-top", "40px")
    $(info + " img").css("visibility", "hidden")
    $(info + " h5").css("display", "none")
    $(info).css("background-image", 'linear-gradient(to bottom, #CECBCF 25%, #5B575C 64%)')
  }
}