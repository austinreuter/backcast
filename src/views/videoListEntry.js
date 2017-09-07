var VideoListEntryView = Backbone.View.extend({
  // $el:

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  initialize: function() {
    this.model.on('sync', this.model.render, this);
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  handleClick: function(e) {
    const videoTitle = $(e.target);
    this.model.select(videoTitle);
  },

  template: templateURL('src/templates/videoListEntry.html')

});
