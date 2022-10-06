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


// // CO2 measures
document.addEventListener('turbolinks:load', () => {
  var ctxRoom8A = document.getElementById('ctxRoom8ACo2').getContext('2d');
  var ctxRoom8F = document.getElementById('ctxRoom8FCo2').getContext('2d');
  var ctxRoomB2 = document.getElementById('ctxRoomB2Co2').getContext('2d');
  var myChart = new Chart(ctxRoom8A, {
  data: {
    labels: JSON.parse(ctxRoom8A.canvas.dataset.labels),
    datasets: [
    {
      type: 'line',
      label: 'room 1',
      data: JSON.parse(ctxRoom8A.canvas.dataset.data),
      backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
          'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
    {
      type: 'line',
      label: 'room 2',
      data: JSON.parse(ctxRoom8F.canvas.dataset.data),
      backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
          'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
     {
      type: 'line',
      label: 'room 3',
      data: JSON.parse(ctxRoomB2.canvas.dataset.data),
      backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
          'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
    ],
  },
  });
  options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
  }
}
);

// HUM measures
document.addEventListener('turbolinks:load', () => {
  var ctxRoom8A = document.getElementById('ctxRoom8AHum').getContext('2d');
  var ctxRoom8F = document.getElementById('ctxRoom8FHum').getContext('2d');
  var ctxRoomB2 = document.getElementById('ctxRoomB2Hum').getContext('2d');
  var myChart = new Chart(ctxRoom8A, {
  data: {
    labels: JSON.parse(ctxRoom8A.canvas.dataset.labels),
    datasets: [
    {
      type: 'line',
      label: 'room 1',
      data: JSON.parse(ctxRoom8A.canvas.dataset.data),
      backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
          'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
    {
      type: 'line',
      label: 'room 2',
      data: JSON.parse(ctxRoom8F.canvas.dataset.data),
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
      label: 'room 3',
      data: JSON.parse(ctxRoomB2.canvas.dataset.data),
      backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
          'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    },
    ],
  },
  });
  options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
  }
}
)


// TMP measures
document.addEventListener('turbolinks:load', () => {
  var ctxRoom8A = document.getElementById('ctxRoom8ATmp').getContext('2d');
  var ctxRoom8F = document.getElementById('ctxRoom8FTmp').getContext('2d');
  var ctxRoomB2 = document.getElementById('ctxRoomB2Tmp').getContext('2d');
  var myChart = new Chart(ctxRoom8A, {
  data: {
    labels: JSON.parse(ctxRoom8A.canvas.dataset.labels),
    datasets: [
    {
      type: 'line',
      label: 'room 1',
      data: JSON.parse(ctxRoom8A.canvas.dataset.data),
      backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
          'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
    {
      type: 'line',
      label: 'room 2',
      data: JSON.parse(ctxRoom8F.canvas.dataset.data),
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
      label: 'room 3',
      data: JSON.parse(ctxRoomB2.canvas.dataset.data),
      backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
          'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    },
    ],
  },
  });
  options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
  }
}
)

// VOCT measures
document.addEventListener('turbolinks:load', () => {
  var ctxRoom8A = document.getElementById('ctxRoom8AVoct').getContext('2d');
  var ctxRoom8F = document.getElementById('ctxRoom8FVoct').getContext('2d');
  var ctxRoomB2 = document.getElementById('ctxRoomB2Voct').getContext('2d');
  var myChart = new Chart(ctxRoom8A, {
  data: {
    labels: JSON.parse(ctxRoom8A.canvas.dataset.labels),
    datasets: [
    {
      type: 'line',
      label: 'room 1',
      data: JSON.parse(ctxRoom8A.canvas.dataset.data),
      backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
          'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
    {
      type: 'line',
      label: 'room 2',
      data: JSON.parse(ctxRoom8F.canvas.dataset.data),
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
      label: 'room 3',
      data: JSON.parse(ctxRoomB2.canvas.dataset.data),
      backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
          'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    },
    ],
  },
  });
  options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
  }
}
)

