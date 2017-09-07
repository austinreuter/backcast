var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function(video) {
    this.on('sync', () => {
      this.at(0).select();
    });
  },

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
        const dataArr = this.parse(data);
        this.reset(dataArr);
        // this.renderAll(dataArr);
      },
      error: function(data) {
        console.log('error:', data);
      }
    });

  },

  parse: function(data) {
    return data.items;
  },

  renderAll: function(array) {
    // this.newVideos = new Videos(array);
    // new VideoListView({el: $('#list'), collection: this.newVideos}).render();
    // new VideoPlayerView({el: $('#player'), collection: this.newVideos}).render();
    // // newVideoCollection.on('select', this.videoChange, this);
    // this.newVideos.on('select', this.videoChange, this);

    // window.exampleVideoData = array;
    // new AppView();
  }

});
