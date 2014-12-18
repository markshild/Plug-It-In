(function() {
  if (typeof $ === "undefined"){
    window.$ = {};
  };




$.Tabs = function(el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data("content-tabs"));
  this.$activeTab = this.$contentTabs.children( ".active" );
  this.$activeLink = $("a.active");
  console.log(this.$activeLink);
  this.$el.on('click', 'a', function(event) {
    this.clickTab(event);
  }.bind(this));
};

$.Tabs.prototype.clickTab = function (event) {
  event.preventDefault();
  this.$activeTab.removeClass("active");
  console.log(this.$activeLink);
  this.$activeLink.removeClass("active");
  console.log(this.$activeLink);
  var $newActiveLink = $(event.target);
  $newActiveLink.addClass("active");
  var $newActiveTab = $($newActiveLink.attr("href")).addClass("active");

  this.$activeTab = $newActiveTab;
  this.$activeLink = $newActiveLink;

}

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

}());
