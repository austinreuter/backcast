var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(text= '') {
    let obj = {};
    obj.q = text;
    obj.key = window.YOUTUBE_API_KEY;
    obj.maxResults = '5';
    obj.videoEmbeddable = true;
    obj.part = 'snippet';
    obj.type = 'video';

    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: obj,
      success: (data) => {
        this.parse(data);
      },
      error: function(data) {
        console.log('error:', data);
      }
    });

  },

  parse: function(data) {
    return data.items;
  }

});
