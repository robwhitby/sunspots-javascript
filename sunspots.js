var Sunspots = function(input) {

  var Point = function(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.score = 0;
    this.toString = function() {
      return "(" + this.x + "," + this.y + " score:" + this.score + ")";
    };
  };

  var addScore = function(point) {
    var x = point.x, y = point.y;
    for (var i=0; i<points.length; i++) {
      var p = points[i];
      if (p.x >= x-1 && p.x <= x+1 && p.y >= y-1 && p.y <= y+1) {
        point.score += p.value;
      }
    }
  };

  var values = input.split(" ");
  var top = parseInt(values.shift());
  var size = parseInt(values.shift());
  var points = [];

  for (var i=0; i<values.length; i++) {
    points.push(new Point(i % size, Math.floor(i / size), parseInt(values[i])));
  }

  for (var i=0; i<points.length; i++) {
    addScore(points[i]);
  }

  var scoreDesc = function(a, b) { return (a.score > b.score)? -1 : 1; };
  return points.sort(scoreDesc).slice(0, top).join("");
};
