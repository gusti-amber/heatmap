// create instance
var heatmapInstance = h337.create({
    container: document.querySelector('.heatmap'),
    radius: 30
  });
  document.querySelector('.demo-wrapper').onmousemove = function(ev) {
    heatmapInstance.addData({
      x: ev.layerX,
      y: ev.layerY,
      value: 1
    });
  };
  // that's it... yay right? ;)