var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.model = this.collection.models[0];
    this.collection.on('sync', this.render, this);
    this.collection.on('select', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
