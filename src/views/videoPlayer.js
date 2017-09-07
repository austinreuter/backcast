var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.$el.html('<div class="loading">Please wait...</div>');

    this.model = this.collection.at(0);
    this.collection.on('sync', this.render, this);
    this.collection.on('select', (e) => {
      this.model = e;
      this.render();
    });
    this.collection.on('reset', () => {

      this.model = this.collection.at(0);
      this.render();
    });
  },

  render: function() {
    if (!this.model) {
      this.$el.html('<div class="loading">Please wait...</div>');
    } else {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
