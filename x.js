var divd = document.getElementById('area1');
//divd.style.position = "absolute";
//divd.style.left = ;
//divd.style.top = y_pos;


var w= $(window).width();
var h = 1000;
var barPadding = 1;

/*var dataset = [];
      for (var i = 0; i < 10; i++) 
      {           //Loop 25 times
        var newNumber = Math.random() * 30;  //New random number 0-30)
        dataset.push(newNumber);             //Add new number to array
      }


      var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
              11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ]; */


   var dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];


//start comment
           //var width = $(window).width(),
           //var width = window.innerWidth - 17 ,
           //var width =  $(document).width() - 17,
           var width = 1200,
    height = 200,
    n = 100,
    period = 2000;
var svg = d3.select("#area1").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewbox", "0 0 1350 200")
    //.style("background", "#470A42");
    //.style("background", "#19452E");
    .style("display", "block")
    .style("background", "#290816");
var flakes = svg.selectAll("ellipse")
    .data(d3.range(0, n))
    .enter().append("ellipse")
    .attr("cx", w * 0.01)
  .attr("cy", h * -0.14)
  .attr("rx", h * 0.002)
  .attr("ry", h * 0.007)
  .style("opacity", 1.0)
  //.style("fill", "#470A42")
    //.style("fill", "#5E0414")
    //.style("fill","#3B191F")//main one
    //.style("fill","#021D21")//nice teal, too dark
    .style("fill", "#09D68E")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function() { return ("'''").charAt(Math.random() * 3); })
  .transition()
    .ease("linear")
    .delay(function(d) { return d * period / (n/Math.PI); })
    .each(fall);
var snow = d3.range(0, 100)
    .map(function() { return 0; });
var area = d3.svg.area()
    .x(function(_, i) { return i == 99 ? width : i * (width / snow.length); })
    .y0(height)
    .y1(function(y) { return height - 2 * y; })
    .interpolate("basis");
var path = svg.append("path")
    .attr("fill", "#fff");
function fall() {
    var flake = d3.select(this);
    (function repeat() {
        var x = Math.random() * width;
        flake = flake.transition()
            .duration(period + Math.random() * 2000 - 100)
            .each(function() {
                d3.select(this)
                    .attr("transform", "translate(" + x + ",-10)");
            })
            .attr("transform", "translate(" + x + "," + (height + 100) + ")")
            .each("end", function() {
                snow[Math.floor(x / ((width*2)/ snow.length))]++;
                path.transition()
                    .duration(100)
                    //.attr("d", area(snow));
                repeat();
            });
    })();
}

/*var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);*/

      /*var circles = svg.selectAll("circle")
          .data(dataset)
          .enter()
          .append("circle");

      circles.attr("cx", function(d, i) {
            return (i * 50) + 25;
          })
           .attr("cy", h/2)
           .attr("r", function(d) {
            return d;
           })
           .attr("fill", "teal");*/

      

      //histogram w color
     /*svg.selectAll("rect")
         .data(dataset)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {
            return i * (w / dataset.length);
         })
         .attr("y", function(d) {
            return h - (d * 4);
         })
         .attr("width", w / dataset.length - barPadding)
         .attr("height", function(d) {
            return d * 4;
         })
         .attr("fill", function(d) {
          return "rgb(0, " + (d * 10) + ", 0)";
         });*/


   /*var xScale = d3.scale.linear()
                    .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                    .range([0, w]);

  var yScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                     .range([h, 0]);


    var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);


         svg.selectAll("circle")
         .data(dataset)
         .enter()
         .append("circle")
         .attr("cx", function(d) {
            return xScale(d[0]);
         })
         .attr("cy", function(d) {
            return yScale(d[1]);
         })
         .attr("r", function(d) {
            return Math.sqrt(h - d[1]);
         });*/
//falling drop
/*var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);


/*var mySquare=svg.append("rect")
  .attr("x",60)
  .attr("y",60)
  .attr("width",2)
  .attr("height",10);*/

  /*var myellipse=svg.append("ellipse")*/
  /*.attr("cx", w * 0.07)
  .attr("cy", h * 0.05)
  .attr("rx", h * 0.002)
  .attr("ry", h * 0.015)
  .style("opacity", 1.0)
  .style("fill", "#470A42");



  /*myellipse
  .transition()
  .attr("cy",1500)
  .duration(20000)
  .ease("elastic")*/


  
  /*.style("fill","white") // if the fill is originally left blank and comes
                         //  from a style sheet, it will start as black 
  .transition()
  .style("fill","blue")

  .transition()
  .style("opacity",0.0)*/


   var cols = 50;
    var theta = 25 * Math.PI / 180;
    var length = 2.5;
    var x0 = width/6;
    var y0 = height;
    var t0 = .7 * Math.PI;
    n = 6;
function tree(string) {
    var stack = [],
        root = { path: [[x0, y0]], children: [] },
        state = { x: x0, y: y0, t: t0, branch: root };
    var commands = {
        'X': function() {},
        'F': function() {
            state.x -= length * Math.cos(state.t);
            state.y -= length * Math.sin(state.t);
            state.branch.path[1] = [state.x, state.y];
        },
        '+': function() {
            state.t += theta;
        },
        '-': function() {
            state.t -= theta;
        },
        '[': function() {
            stack.push(state);
            state = Object.create(state);
            state.depth += 1;
            var branch = { path: [[state.x, state.y]], children: [] };
            state.branch.children.push(branch);
            state.branch = branch;
        },
        ']': function() {
            state = stack.pop();
            state = Object.create(state);
            state.depth += 1;
            var branch = { path: [[state.x, state.y]], children: [] };
            state.branch.children.push(branch);
            state.branch = branch;
        }
    };
    string.split('').forEach(function(c) { commands[c](); });
    return root;
}
var svg2 = d3.select("#area2").append("svg")
    .attr("width", (width))
    .attr("height", height)
    //.style("background", "#A82F3D")
    .style("background", "#FF0022")
    .style("display", "block")
    //.style("background", "#FA0F02")

    .datum(tree(l(n, {"X": "F-[[X]-X]+F[+FX]-X", "F": "FF"}, "X")))
    .each(grow(3));
function grow(weight) {
    return function(d) {
        if (d.path[1]) {
            d3.select(this).append("path")
                .attr("stroke", "#021D21")
                .attr("stroke-opacity", 0.9)
                .attr("stroke-width", weight)
                .attr("fill", "none")
                .attr("d", "M" + d.path[0] + "L" + d.path[1])
                .each(function() { d3.select(this).attr("stroke-dasharray", "0," + this.getTotalLength()); })
              .transition()
                .ease("linear")
                .duration(1000)
                .attrTween("stroke-dasharray", tweenDash)
        }
        d3.select(this).selectAll("g")
            .data(d.children)
            .enter().append("g")
          .transition()
            .delay(1000)
            .each("start", grow(weight - 0.25));
    }
}
function l(n, rules, str) {
    return n === 0 ? str : l(--n, rules, str.replace(/./g, function(c) { return rules[c] || c; }));
}
// http://bl.ocks.org/mbostock/5649592
function tweenDash() {
  var l = this.getTotalLength(),
      i = d3.interpolateString("0," + l, l + "," + l);
  return function(t) { return i(t); };
}

var flakes3 = svg2.selectAll("ellipse")
    .data(d3.range(0, n))
    .enter().append("ellipse")
    .attr("cx", w * 0.01)
  .attr("cy", h * -0.14)
  .attr("rx", h * 0.002)
  .attr("ry", h * 0.007)
  .style("opacity", 1.0)
  //.style("fill", "#470A42")
    //.style("fill", "#5E0414")
    //.style("fill","#3B191F")//main one
    .style("fill","#021D21")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function() { return ("'''").charAt(Math.random() * 3); })
  .transition()
    .ease("linear")
    .delay(function(d) { return d * period / (n/Math.PI); })
    .each(fall);
var snow = d3.range(0, 100)
    .map(function() { return 0; });
var area = d3.svg.area()
    .x(function(_, i) { return i == 99 ? width : i * (width / snow.length); })
    .y0(height)
    .y1(function(y) { return height - 2 * y; })
    .interpolate("basis");
var path = svg.append("path")
    .attr("fill", "#fff");
function fall() {
    var flake = d3.select(this);
    (function repeat() {
        var x = Math.random() * width;
        flake = flake.transition()
            .duration(period*1.5 + Math.random() * 2000 - 100)
            .each(function() {
                d3.select(this)
                    .attr("transform", "translate(" + x + ",-10)");
            })
            .attr("transform", "translate(" + x + "," + (height + 100) + ")")
            .each("end", function() {
                snow[Math.floor(x / ((width*2)/ snow.length))]++;
                path.transition()
                    .duration(100)
                    //.attr("d", area(snow));
                repeat();
            });
    })();
}



var svg3 = d3.select("#area3").append("svg")
    .attr("width", (width))
    .attr("height", height)
   // .style("background", "#5E0414") //niceeeee purple
   //.style("background", "#08291B");
   .style("background","#290816")
   .style("display", "block");

   var flakes2 = svg3.selectAll("ellipse")
    .data(d3.range(0, n))
    .enter().append("ellipse")
    .attr("cx", w * 0.11)
  .attr("cy", h * -0.17)
  .attr("rx", h * 0.002)
  .attr("ry", h * 0.007)
  .style("opacity", 1.0)
  //.style("fill", "#470A42")
    //.style("fill", "#5E0414")
    //.style("fill","#3B191F")//main one
    .style("fill","#09D68E")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function() { return ("'''").charAt(Math.random() * 3); })
  .transition()
    .ease("elastic")
    .delay(function(d) { return d * period / (n/Math.PI); })
    .each(fall);
var snow = d3.range(0, 100)
    .map(function() { return 0; });
var area = d3.svg.area()
    .x(function(_, i) { return i == 99 ? width : i * (width / snow.length); })
    .y0(height)
    .y1(function(y) { return width - 2 * y; })
    .interpolate("basis");
var path = svg.append("path")
    .attr("fill", "#fff");
function fall() {
    var flake = d3.select(this);
    (function repeat() {
        var x = Math.random() * width;
        flake = flake.transition()
            .duration(period + Math.random() * 2000 - 100)
            .each(function() {
                d3.select(this)
                    //.attr("transform", "translate(" + x + ",-10)");
            })
            .attr("transform", "translate(" + x + "," + (height + 100) + ")")
            .each("end", function() {
                snow[Math.floor(x / ((width*2)/ snow.length))]++;
                path.transition()
                    .duration(100)
                    //.attr("d", area(snow));
                repeat();
            });
    })();
}