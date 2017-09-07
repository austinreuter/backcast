var SearchView = Backbone.View.extend({
  events: {
    'click button': 'handleButton',
    'keyup input': 'handleEnter'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleButton: function(e) {
    const text = this.$('input').val();
    this.collection.search(text);
    this.$('input').val('');
  },

  handleEnter: function(e) {
    if (e.keyCode !== 13) { return; }
    const text = this.$('input').val();
    this.collection.search(text);
    this.$('input').val('');
  },

  template: templateURL('src/templates/search.html')

});
