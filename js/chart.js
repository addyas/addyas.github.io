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

        var options = {
          title: 'What I do',
          pieHole: 0.6,
          backgroundColor: {fill: "transparent"},
          height: "300",
          width: "400",
          chartArea: {left: 15, top: 0, width: '100%', height: '100%'},
          legend: {alignment: 'center',textStyle: {color: "#757575", fontSize: "17", fontName: "Abel"}},
          colors: ["#757575","#121212","#D84315","#AD1457"],
          pieSliceBorderColor: "#757575",
          pieSliceText: "none",
          tooltip: {text: "percentage"}
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));

        chart.draw(data, options);
      }
