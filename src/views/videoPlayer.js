var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.collection.on('select', this.render, this);
  },

  render: function() {
    this.model = this.collection.at(0);
    if (!this.model) {
      this.$el.html('<div class="loading">Please wait...</div>');
    } else {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
