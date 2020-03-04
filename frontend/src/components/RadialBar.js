import React from 'react';
import ReactApexChart from 'react-apexcharts'

class RadialBar extends React.Component {
  constructor(props, context) {
    super();

    this.options = {
        chart: {
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: '97%',
              margin: 5,
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '15px',
                color: '#FFFFFF'
              }
            }
          }
        },
        grid: {
          padding: {
            top: -10
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          },
        },
        labels: ['Average Results'],
      };
  }

  render() {
    return (
      <div class="radial-bar">
        <div class="radial-bar-title">
            {this.props.title}
        </div>
        <div>
            <ReactApexChart options={this.options} series={[this.props.value]} type="radialBar" />
        </div>
      </div>
    );
  }
}

export default RadialBar;
