var VideoListEntryView = Backbone.View.extend({
  // $el:

  initialize: function() {
    this.model.on('sync', this.render, this);
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
