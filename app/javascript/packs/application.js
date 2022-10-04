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


document.addEventListener('turbolinks:load', () => {
  var ctx = document.getElementById('myChart').getContext('2d');
  console.log(ctx);
  var myChart = new Chart(ctx, {
  data: {
    labels: JSON.parse(ctx.canvas.dataset.labels),
    datasets: [{
      type: 'line',
      label: 'salle 1',
      data: JSON.parse(ctx.canvas.dataset.data),
      backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }, {
      type: 'line',
      label: 'salle 2',
      data: JSON.parse(ctx.canvas.dataset.data),
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
    ]
  },
  });
  options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
  }
})


// Request data using D3
console.log(d3.csv('./public/room_8a.csv'))
// d3.csv(measure_room_8a)
