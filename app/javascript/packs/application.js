// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "controllers"
import "bootstrap"
import Chart from 'chart.js/auto';

// CO2 measures
document.addEventListener('turbolinks:load', () => {
  var ctxRoom8A = document.getElementById('ctxRoom8ACo2').getContext('2d');
  var ctx2 = document.getElementById('myChart2').getContext('2d');
  var ctx3 = document.getElementById('myChart3').getContext('2d');
  var myChart = new Chart(ctxRoom8A, {
  data: {
    labels: JSON.parse(ctxRoom8A.canvas.dataset.labels),
    datasets: [{
      type: 'line',
      label: 'room_8a',
      data: JSON.parse(ctxRoom8A.canvas.dataset.data),
      backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
          'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
      yAxisID: 'y-axis-2'
    },
    {
      type: 'line',
      label: 'room_8f',
      data: JSON.parse(ctx2.canvas.dataset.data),
      backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
          'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1
    },
     {
      type: 'line',
      label: 'room_b2',
      data: JSON.parse(ctx3.canvas.dataset.data),
      backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
          'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    },
    // {
    //   type: 'line',
    //   label: 'voct',
    //   data: JSON.parse(ctx4.canvas.dataset.data),
    //   backgroundColor: [
    //       'rgba(153, 102, 255, 0.2)',
    //   ],
    //   borderColor: [
    //       'rgba(153, 102, 255, 1)',
    //   ],
    //   borderWidth: 1
    // },
    ],
  },
  });
  // var myChart2 = new Chart(ctx2, {
  // data: {
  //   labels: JSON.parse(ctx2.canvas.dataset.labels),
  //   datasets: [{
  //     type: 'line',
  //     label: 'co2',
  //     data: JSON.parse(ctx2.canvas.dataset.data),
  //     backgroundColor: [
  //         'rgba(54, 162, 235, 0.2)',
  //     ],
  //     borderColor: [
  //         'rgba(54, 162, 235, 1)',
  //     ],
  //     borderWidth: 1
  //   },
  //   {
  //     type: 'line',
  //     label: 'hum',
  //     data: JSON.parse(ctx2.canvas.dataset.data),
  //     backgroundColor: [
  //         'rgba(255, 206, 86, 0.2)',
  //     ],
  //     borderColor: [
  //         'rgba(255, 206, 86, 1)',
  //     ],
  //     borderWidth: 1
  //   },
  //   ],
  // },
  // });
  options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
  }
}
)

// document.addEventListener('turbolinks:load', () => {
//   var ctx = document.getElementById('myChart2').getContext('2d');
//   console.log(JSON.parse(ctx.canvas.dataset.data))
//   var myChart2 = new Chart(ctx, {
//   data: {
//     labels: JSON.parse(ctx.canvas.dataset.labels),
//     datasets: [{
//       type: 'line',
//       label: 'hum',
//       data: JSON.parse(ctx.canvas.dataset.data),
//       backgroundColor: [
//           'rgba(255, 206, 86, 0.2)',
//       ],
//       borderColor: [
//           'rgba(255, 206, 86, 1)',
//       ],
//       borderWidth: 1
//     },
//     ],
//   },
//   });
//   options: {
//     scales: {
//         y: {
//             beginAtZero: true
//         }
//     }
//   }
// })

// document.addEventListener('turbolinks:load', () => {
//   var ctx = document.getElementById('myChart3').getContext('2d');
//   var myChart3 = new Chart(ctx, {
//   data: {
//     labels: JSON.parse(ctx.canvas.dataset.labels),
//     datasets: [{
//       type: 'line',
//       label: 'tmp',
//       data: JSON.parse(ctx.canvas.dataset.data),
//       backgroundColor: [
//           'rgba(75, 192, 192, 0.2)',
//       ],
//       borderColor: [
//           'rgba(75, 192, 192, 1)',
//       ],
//       borderWidth: 1
//     },
//     ],
//   },
//   });
//   options: {
//     scales: {
//         y: {
//             beginAtZero: true
//         }
//     }
//   }
// })

// document.addEventListener('turbolinks:load', () => {
//   var ctx = document.getElementById('myChart4').getContext('2d');
//   var myChart4 = new Chart(ctx, {
//   data: {
//     labels: JSON.parse(ctx.canvas.dataset.labels),
//     datasets: [{
//       type: 'line',
//       label: 'voct',
//       data: JSON.parse(ctx.canvas.dataset.data),
//       backgroundColor: [
//           'rgba(153, 102, 255, 0.2)',
//       ],
//       borderColor: [
//           'rgba(153, 102, 255, 1)',
//       ],
//       borderWidth: 1
//     },
//     ],
//   },
//   });
//   options: {
//     scales: {
//         y: {
//             beginAtZero: true
//         }
//     }
//   }
// })

