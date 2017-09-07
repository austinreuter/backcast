var VideoListEntryView = Backbone.View.extend({
  // $el:

  initialize: function() {
    // this.render();
    this.model.on('sync', this.render, this);
    // this.collection.models.forEach(this.render, this);
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
