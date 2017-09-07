var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();

    new VideoListView({el: $('#list'), collection: this.videos}).render();
    new VideoPlayerView({el: $('#player'), collection: this.videos}).render();
    new SearchView({el: $('#search'), collection: this.videos}).render();

    this.videos.on('select', this.videoChange, this);
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  videoChange: function(e) {
    const cur = new Videos(e);
    new VideoPlayerView({el: $('#player'), collection: cur}).render();
  },

  template: templateURL('src/templates/app.html')

});
