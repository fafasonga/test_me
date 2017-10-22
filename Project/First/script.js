
var years = [2007,2008,2009,2010,2011,2012];

var User1 = [04,08,13,13,03,03];
var User2 = [06,18,12,11,07,06];
var User3 = [03,09,06,06,05,03];
var User4 = [03,05,05,02,05,02];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: User1,
        label: "User 1",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: User2,
        label: "User 2",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: User3,
        label: "User 3",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: User4,
        label: "User 4",
        borderColor: "#e8c3b9",
        fill: false
      }
    ]
  }
});
