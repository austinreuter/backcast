var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    // this.videos = new Videos(this.collection);
    this.render();
    const list = new VideoListView({el: $('#list'), collection: this.videos});
    list.render();
    const player = new VideoPlayerView({el: $('#player'), collection: this.videos});
    player.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
