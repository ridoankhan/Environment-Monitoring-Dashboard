/**
 * First Chart-1 Scripts
 */

var func = function(fd) {
// var size=Object.keys(fd).length;
//var size=6;

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#393939';


let myChart = document.getElementById('myChart').getContext('2d');
myChart.canvas.width = 370;
myChart.canvas.height = 370;
                            
var size=Object.keys(fd).length;
let envMonChart = new Chart(myChart, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: [fd[size-1].create_date.substring(11,19), fd[size-2].create_date.substring(11,19), fd[size-3].create_date.substring(11,19),
            fd[size-4].create_date.substring(11,19), fd[size-5].create_date.substring(11,19)],
    datasets: [
                  {
                    label: 'Smoke',
                    backgroundColor: 'rgba(255,123,37,0.8)',
                    data: [ fd[size-1].field1, fd[size-2].field1, fd[size-3].field1, fd[size-4].field1, fd[size-5].field1]
                  },
                  
                  {
                    label: 'Methane',
                    backgroundColor: 'rgba(229,51,145,0.8)',
                    data: [ fd[size-1].field2, fd[size-2].field2, fd[size-3].field2, fd[size-4].field2, fd[size-5].field2]
                  },
                  {
                    label: 'C.Mono-Oxide',
                    backgroundColor: "rgba(170, 237, 37,0.8)",
                    data: [ fd[size-1].field3, fd[size-2].field3, fd[size-3].field3, fd[size-4].field3, fd[size-5].field3]
                  },
                  {
                    label: 'Alcohol',
                    backgroundColor: "rgba(123, 0, 153, 0.8)",
                    data: [ fd[size-1].field4, fd[size-2].field4, fd[size-3].field4, fd[size-4].field4, fd[size-5].field4]
                  },
                  {
                    label: 'Dust',
                    backgroundColor: "rgba(128, 206, 214,0.8)",
                    data: [ fd[size-1].field5, fd[size-2].field5, fd[size-3].field5, fd[size-4].field5, fd[size-5].field5]
                  },
                  {
                    label: 'Temp',
                    backgroundColor: "rgba(66, 133, 244, 0.8)",
                    data: [ fd[size-1].field6, fd[size-2].field6, fd[size-3].field6, fd[size-4].field6, fd[size-5].field6]
                  },
                  {
                    label: 'Humidity',
                    backgroundColor: "rgba(255, 196, 13, 0.8)",
                    data: [ fd[size-1].field7, fd[size-2].field7, fd[size-3].field7, fd[size-4].field7, fd[size-5].field7]
                  }

              ]
        },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend:{
            display: true,
            position: 'top',
            labels: {
            title: 'Time'
               }
        },
       elements: {
       line:{
           tension: 1, 
            }
        },
        scales:{
            yAxes: [{
            ticks: {
                beginAtZero: true,
            }
            }],

            xAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Time'
              }
            }]
        }
    }
});


/**
 * First Chart-1 Script Ends
 */

/**
 * Sceond Chart-2 Script Starts
 */

let myChart2 = document.getElementById('myChart2').getContext('2d');

myChart2.canvas.width = 400;
myChart2.canvas.height = 400;                             
                                
  let envMonChart2 = new Chart(myChart2, {
    type: 'radar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: [fd[size-1].create_date.substring(11,16), fd[size-2].create_date.substring(11,16), fd[size-3].create_date.substring(11,16),
            fd[size-4].create_date.substring(11,16), fd[size-5].create_date.substring(11,16)],
    datasets: [
                  {
                    label: 'Smoke',
                    backgroundColor: "rgba(81, 99, 149, 1)",
                    data: [ fd[size-1].field1, fd[size-2].field1, fd[size-3].field1, fd[size-4].field1, fd[size-5].field1]
                  },
                  
                  {
                    label: 'Methane',
                    backgroundColor: "e29587",
                    data: [ fd[size-1].field2, fd[size-2].field2, fd[size-3].field2, fd[size-4].field2, fd[size-5].field2]
                  },
                  {
                    label: 'C Mono Oxide',
                    backgroundColor: 'rgba(82, 240, 0.2)',
                    data: [ fd[size-1].field4, fd[size-2].field4, fd[size-3].field4, fd[size-4].field4, fd[size-5].field4]
                  }
              ]
        },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          title: 'Time'
        }
      },
      elements: {
       line: {
           tension: 0, 
       }
   },
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }],

        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time'
          }
        }]
      }
    }
  });


/**
 * Sceond Chart-2 Script Ends
 */


 /**
 * Third Chart-3 Script Starts
 */



let myChart3 = document.getElementById('myChart3').getContext('2d');
myChart3.canvas.width = 330;
myChart3.canvas.height = 330;                             
                                

  let envMonChart3 = new Chart(myChart3, {
    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: [fd[size-1].create_date.substring(11,16), fd[size-2].create_date.substring(11,16), fd[size-3].create_date.substring(11,16),
            fd[size-4].create_date.substring(11,16), fd[size-5].create_date.substring(11,16)],
    datasets: [
                  {
                    label: 'Smoke',
                    borderColor: "rgba(82, 174, 244, 1)",
                    data: [ fd[size-1].field1, fd[size-2].field1, fd[size-3].field1, fd[size-4].field1, fd[size-5].field1]
                  },
                  
                  {
                    label: 'Methane',
                    borderColor: "rgba(0,128,0,0.6)",
                    data: [ fd[size-1].field2, fd[size-2].field2, fd[size-3].field2, fd[size-4].field2, fd[size-5].field2]
                  },
                  {
                    label: 'C.Mono Oxide',
                    borderColor: "	rgb(255,0,255,1)",
                    data: [ fd[size-1].field4, fd[size-2].field4, fd[size-3].field4, fd[size-4].field4, fd[size-5].field4]
                  },
                  {
                    label: 'Alcohol',
                    borderColor: "rgba(128,0,128,0.6)",
                    data: [ fd[size-1].field4, fd[size-2].field4, fd[size-3].field4, fd[size-4].field4, fd[size-5].field4]
                  },
                  {
                    label: 'Dust',
                    borderColor: "rgba(128,128,0,0.6)",
                    data: [ fd[size-1].field5, fd[size-2].field5, fd[size-3].field5, fd[size-4].field5, fd[size-5].field5]
                  },
                  {
                    label: 'Temp',
                    borderColor: "rgba(255,255,0,0.6)",
                    data: [ fd[size-1].field6, fd[size-2].field6, fd[size-3].field6, fd[size-4].field6, fd[size-5].field6]
                  },
                  {
                    label: 'Humidity',
                    borderColor: "rgba(0,128,128,0.6)",
                    data: [ fd[size-1].field7, fd[size-2].field7, fd[size-3].field7, fd[size-4].field7, fd[size-5].field7]
                  }
              ]
        },
    options: {

      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: 'top',
        labels: {
          title: 'Time'
        }
      },
      elements: {
       line: {
           tension: 0, 
       }
   },
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }],

        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time'
          }
        }]
      }
    }
  });

/**
 * Third Chart-3 Script Ends
 */


 /**
 * Fourth Chart-4 Script Starts
 */

let myChart4 = document.getElementById('myChart4').getContext('2d');
myChart4.canvas.width = 333;
myChart4.canvas.height = 333;                             
                                

  let envMonChart4 = new Chart(myChart4, {
    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: [fd[size-1].create_date.substring(11,16), fd[size-2].create_date.substring(11,16), fd[size-3].create_date.substring(11,16),
            fd[size-4].create_date.substring(11,16), fd[size-5].create_date.substring(11,16)],
    datasets: [
                  {
                    label: 'Temperature',
                    // backgroundColor: "rgba(82, 174, 244, 1)",
                    borderColor: "rgba(75,72,192,1)", 
                    data: [ fd[size-1].field6, fd[size-2].field6, fd[size-3].field6, fd[size-4].field6, fd[size-5].field6]
                    // backgroundColor: [
                    //     rgba(75,72,192,1),
                    //     rgba(175,172,192,1),
                    //     rgba(275,272,192,1),
                    //     rgba(125,72,120,1),
                    //     rgba(128,0,192,1),
                    // ]
                  },
    
              ]
        },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      legend: {
        display: false,
      },
      elements: {
       line: {
           tension: 0, 
       }
   },
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: false,
          }
        }],
      }
    }
  });


/**
 * fourth Chart-4 Script Ends
 */

 /**
 * Fifth Chart-5 Script Starts
 */

let myChart5 = document.getElementById('myChart5').getContext('2d');
myChart5.canvas.width = 333;
myChart5.canvas.height = 333;                             
                                

  let envMonChart5 = new Chart(myChart5, {
    type: 'polarArea', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: [fd[size-1].create_date.substring(11,16), fd[size-2].create_date.substring(11,16), fd[size-3].create_date.substring(11,16),
            fd[size-4].create_date.substring(11,16), fd[size-5].create_date.substring(11,16)],
    datasets: [
                  {
                    label: 'Humidity',
                    backgroundColor: [
                                      'rgba(255, 0, 0, 0.2)',
                                      'rgba(13, 17, 198, 0.5)',
                                      'rgba(212,87,199,0.5)',
                                      'rgba(36, 254, 65, 0.5)',
                                      'rgba(0, 0, 0, 0.2)'
                    ],
                    borderColor: [
                      'rgba(255, 0, 0, 0.2)',
                      'rgba(13, 17, 198, 0.5)',
                      'rgba(204, 83, 51, 0.5)',
                      'rgba(35, 7, 77, 0.5)',
                      'rgba(0, 0, 0, 0.2)'
    ],
                    data: [ fd[size-1].field7.substr(0,5), fd[size-2].field7.substr(0,5), fd[size-3].field7.substr(0,5), fd[size-4].field7.substr(0,5), fd[size-5].field7.substr(0,5)]
                    
                  },
    
              ]
        },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      legend: {
        display: false,
      },
      elements: {
       line: {
           tension: 0, 
       }
   },
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }],
      }
    }
  });


/**
 * fifth Chart-5 Script Ends
 */ 


 
/**
* Sixth Chart-6 Script Starts
*/

let myChart6 = document.getElementById('myChart6').getContext('2d');
myChart6.canvas.width = 320;
myChart6.canvas.height = 320;

  let envMonChart6 = new Chart(myChart6, {
    type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: [fd[size-1].create_date.substring(11, 16), fd[size-2].create_date.substring(11, 16), fd[size-3].create_date.substring(11, 16),
      fd[size-4].create_date.substring(11, 16), fd[size-5].create_date.substring(11, 16)],
      datasets: [
        {
          label: 'Methane',
          backgroundColor: [
            "rgba(255, 255, 255, 0)",
            "rgba(0, 255, 0, .4)",
            "rgba(0, 255, 0, .6)",
            "rgba(0, 255, 0, .8)",
            "rgba(0, 255, 0, 1)",            
          ],
          borderColor: "rgba(75,72,192,1)",
          data: [fd[size-1].field4, fd[size-2].field4, fd[size-3].field4, fd[size-4].field4, fd[size-5].field4]

        },

      ]
    },
    options: {
      circumference: 1 * Math.PI,
      rotation: 1 * Math.PI,
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: 'right',
        labels: {
          title: 'Time'
        }
      },
      // scales: {
      //   yAxes: [{
      //     ticks: {
      //       beginAtZero: true,
      //     }
      //   }],
      // }
    }
  });


/**
 * Sixth Chart-6 Script Ends
 */


  /**
 * Seventh Chart-7 Script Starts
 */

let myChart7 = document.getElementById('myChart7').getContext('2d');
myChart7.canvas.width = 320;
myChart7.canvas.height = 320;                             
                                


  let envMonChart7 = new Chart(myChart7, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: [fd[size-1].create_date.substring(11,16), fd[size-2].create_date.substring(11,16), fd[size-3].create_date.substring(11,16),
            fd[size-4].create_date.substring(11,16), fd[size-5].create_date.substring(11,16)],
    datasets: [
                  {
                    label: 'Temperature',
                    backgroundColor: ['rgba(51, 153, 255, 0.7)',
                                      'rgba(0, 204, 0, 0.7)',
                                      'rgba(255, 51, 204, 0.7)',
                                      'rgba(255, 51, 0, 0.7)',
                                      'rgba(255, 153, 51, 0.7)'
                    ],
                    borderColor: "rgba(75,72,192,1)", 
                    data: [ fd[size-1].field4, fd[size-2].field4, fd[size-3].field4, fd[size-4].field4, fd[size-5].field4]
                    
                  },
    
              ]
        },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          title: 'Time'
        }
      },
      elements: {
       line: {
           tension: 0, 
       }
   },
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }],
      }
    }
  });


/**
 * Seventh Chart-7 Script Ends
 */ 


  /**
 * Eighth Chart-8 Script Starts
 */

let myChart8 = document.getElementById('myChart8').getContext('2d');
myChart8.canvas.width = 320;
myChart8.canvas.height = 320;                             
                                
 
  let envMonChart8 = new Chart(myChart8, {
    type: 'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: [fd[size-1].create_date.substring(11,16), fd[size-2].create_date.substring(11,16), fd[size-3].create_date.substring(11,16),
            fd[size-4].create_date.substring(11,16), fd[size-5].create_date.substring(11,16)],
    datasets: [
                  {
                    label: 'Combustion Gas',
                    backgroundColor: ['rgba(135, 0, 0, 0.6)',
                                      'rgba(185, 147, 214, 0.6)',
                                      'rgba(173, 209, 0, 0.6)',
                                      'rgba(157, 80, 187, 0.6)',
                                      'rgba(82, 194, 52, 0.6)'
                    ],
                    borderColor: "rgba(75,72,192,1)", 
                    data: [ fd[size-1].field1, fd[size-2].field1, fd[size-3].field1, fd[size-4].field1, fd[size-5].field1]
                    
                  },
    
              ]
        },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          title: 'Time'
        }
      },
      elements: {
       line: {
           tension: 0, 
       }
   },
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }],
      }
    }
  });


/**
 * Eighth Chart-8 Script Ends
 */ 


 
  /**
 * Nineth Chart-9 Script Starts
 */

let myChart9 = document.getElementById('myChart9').getContext('2d');
myChart9.canvas.width = 320;
myChart9.canvas.height = 320;          


  let envMonChart9 = new Chart(myChart9, {
    type: 'polarArea', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
    labels: [fd[size-1].create_date.substring(11,16), fd[size-2].create_date.substring(11,16), fd[size-3].create_date.substring(11,16),
            fd[size-4].create_date.substring(11,16), fd[size-5].create_date.substring(11,16)],
    datasets: [
                  {
                    label: 'Benzen, Alcohol and Smoke',
                    backgroundColor: ['rgba(116, 116, 191, 0.4)',
                                      'rgba(236, 111, 102, 0.5)',
                                      'rgba(80, 201, 195, 0.5)',
                                      'rgba(65, 77, 11, 0.5 )',
                                      'rgba(248, 87, 166, 0.4)'
                    ],
                    data: [ fd[size-1].field4, fd[size-2].field4, fd[size-3].field4, fd[size-4].field4, fd[size-5].field4]
                    
                  },
    
              ]
        },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          title: 'Time'
        }
      },
      elements: {
       line: {
           tension: 0, 
       }
   },
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }],
      }
    }
  });
};

/**
 * Nineth Chart-9 Script Ends
 */ 




 // Ajax Call for all charts

function fetchDataAndDisplay(){
    $.ajax({
      // url:"https://api.thingspeak.com/channels/542636/feeds.json?api_key=G416M7KZ77924EZW",
      url: "http://115.127.24.181:3035/api/channels",
      async: true,
      dataType: 'json',
      method:"GET"
    }).done(function(response){
         func(response.channel);
        console.log(response.channel);
    })
    }; 

    $(document).ready(function(){
      setInterval(fetchDataAndDisplay,5000);
     });