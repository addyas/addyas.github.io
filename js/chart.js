$(document).ready(function(){
  google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Expertise', 'Percentage'],
            ['Interaction Design',   35],
            ['Development',      30],
            ['UX',  20],
            ['Visual Design', 15]
          ]);
          //position legend differently for mobile
          var pos = 'right';
          var psText = 'none';
          var colour = '#757575';
          if($(window).width()<400){
            pos = 'top';
            psText = 'label';
            colour = "#FFFFFF";
          }


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

          chart.draw(data, options);
        }

      /*  $(window).resize(function(){
           drawChart();
           console.log('chart should be redrawn');
        });*/





});
