var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.player = new VideoPlayerView();
    this.list = new VideoListView({el: $('.list'), collection: this.collection});
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
