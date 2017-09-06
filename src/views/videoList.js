var VideoListView = Backbone.View.extend({
  initialize: function() {
    // this.render();
    this.collection.on('sync', this.render, this);
    // this.collection.models.forEach(this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderEntry, this);
    return this;
  },

  renderEntry: function(video) {
    const videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});


// render: function() {
//   this.$el.empty();
//   this.collection.forEach(this.renderMovie, this);
// },
//
// renderMovie: function(movie) {
//   var movieView = new MovieView({model: movie});
//   this.$el.append(movieView.render());
// }
