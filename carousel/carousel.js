(function() {
  if ($ === "undefined"){
    window.$ = {};
  }

  $.Carousel = function ($el) {
    this.$el = $($el);
    this.activeIdx = 0;

    this.$el.on('click', '.slide-left', function (event) {
      console.log($("li").eq(this.activeIdx))
      var $currentChild = $('li').eq(this.activeIdx);
      $currentChild.removeClass('active');
      this.activeIdx--;
      if (this.activeIdx < 0) {
        this.activeIdx += 3;
      }
      $("li").eq(this.activeIdx).addClass("active");

    }.bind(this));

    this.$el.on('click', '.slide-right', function (event) {
      var $currentChild = $('li').eq(this.activeIdx).removeClass('active');
      this.activeIdx++ ;
      if (this.activeIdx > 2) {
        this.activeIdx -= 3;
      }
      $("li").eq(this.activeIdx).addClass("active");
    }.bind(this));

  }

  $.fn.carousel = function () {
    return this.each(function () {
      new $.Carousel(this);
    });
  };

}());
