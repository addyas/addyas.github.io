$(document).ready(function(){
  google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {

          //position legend differently for mobile
          var pos = 'right';
          var psText = 'none';
          var colour = '#757575';
          var label1 = 'Interaction Design';
          var label2 = 'Development';
          var label3 = 'UX Design';
          var label4 = 'Visual Design';
          if($(window).width()<400){
            label1 = 'IxD';
            label2 = 'Dev';
            label3 = 'UX';
            label4 = 'UI';
          }

          var data = google.visualization.arrayToDataTable([
            ['Expertise', 'Percentage'],
            [label1,   35],
            [label2,      30],
            [label3,  20],
            [label4, 15]
          ]);

          var options = {
            title: 'What I do',
            pieHole: 0.6,
            backgroundColor: {fill: "transparent"},
            height: "100%",
            width: "100%",
            chartArea: {left: 15, top: 0, width: '100%', height: '100%'},
            legend: {position: pos ,alignment: 'center',textStyle: {color: colour, fontSize: "17", fontName: "Alegreya Sans SC"}},
            colors: ["#757575","#121212","#D84315","#AD1457"],
            pieSliceBorderColor: "#757575",
            pieSliceText: psText,
            tooltip: {text: "percentage"}
          };

          var chart = new google.visualization.PieChart(document.getElementById('donutchart'));

          if (window.matchMedia("(min-width: 400px)").matches) {
                chart.draw(data, options);
          }

        }

        $(window).resize(function(){
           drawChart();
           console.log('chart should be redrawn');
        });

});
