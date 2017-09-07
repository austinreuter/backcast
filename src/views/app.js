var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.videos.search('puppies');

    const videoList = new VideoListView({el: $('#list'), collection: this.videos});
    const videoPlayer = new VideoPlayerView({el: $('#player'), collection: this.videos});
    const search = new SearchView({el: $('#search'), collection: this.videos});
    search.render();
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
