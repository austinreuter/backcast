var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    this.$el.empty();
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').empty();
    this.collection.forEach(this.renderEntry, this);
    return this;
  },

  renderEntry: function(video) {
    const videoView = new VideoListEntryView({model: video});
    this.$('.video-list').append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
