var XANESBokeh = function() {
  Bokeh.safely(function() {
    (function(root) {
      function embed_document(root) {
        
      var render_items = [{"docid":"31002c78-21ad-4dce-a110-50d3b9fd6d71","roots":{"2143":"afb8e42c-73b2-4371-9e67-8c196503d170"}}];
      root.Bokeh.embed.embed_items(docs_json, render_items);
    
      }
      if (root.Bokeh !== undefined) {
        embed_document(root);
      } else {
        var attempts = 0;
        var timer = setInterval(function(root) {
          if (root.Bokeh !== undefined) {
            embed_document(root);
            clearInterval(timer);
          }
          attempts++;
          if (attempts > 100) {
            console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
            clearInterval(timer);
          }
        }, 10, root)
      }
    })(window);
  });
};