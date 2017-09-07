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

    this.videos.on('select', this.videoChange, this);
    this.videos.on('reset', () => {
      videoList.render();
      videoPlayer.render();
    }, this);
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
