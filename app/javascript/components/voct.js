const voctMeasures = document.addEventListener('turbolinks:load', () => {
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
export { voctMeasures };
