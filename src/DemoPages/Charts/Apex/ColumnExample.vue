<template>
  <div class="example">
    <apexchart height="350" type="bar" :options="chartOptions" :series="series"></apexchart>
    <div class="text-center">
      <button @click="updateChart" class="btn btn-primary">Update!</button>
    </div>
  </div>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'

  export default {
    name: 'ColumnExample',
    components: {
      'apexchart': VueApexCharts

    },
    data: function () {
      return {
        chartOptions: {
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: 'rounded',
              columnWidth: '55%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },

          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
        },
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 41, 98, 87, 44, 91, 81, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
      }
    },
    methods: {
      updateChart() {
        const max = 100;
        const min = 20;
        let newSeries = [];

        this.series.map((s) => {
          const data = s.data.map(() => {
            return Math.floor(Math.random() * (max - min + 1)) + min
          })
          newSeries.push({data})
        })

        this.series = newSeries
      }
    }
  }
</script>
