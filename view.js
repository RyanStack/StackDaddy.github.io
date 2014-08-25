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
    // var footer = this.getFooterDiv();
    console.log("printing data passed to render")
    // console.log(data)
    // footer.innerHTML = data
    // $(".block").show();
    $(".block").toggle("left")
    $(".block").css('display','inline-block');
  },
  liftFooter: function() {
   console.log('footer')
   var footer = this.getFooterDiv();
   footer.style.height = '150px'
   $(".block").css("height", "100px")
  },
  unLiftFooter: function() {
    var footer = this.getFooterDiv();
    footer.style.height = '60px';
    $(".block").css("height", "10px")
  }
}