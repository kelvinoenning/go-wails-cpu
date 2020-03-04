import React from 'react';
import RadialBar from './RadialBar'

class Machine extends React.Component {
  constructor(props, context) {
    super();
    this.state = {
      cpuPercent: 0,
      memPercent: 0,
    };   
  }

  componentDidMount() {
    window.wails.Events.On('spy_machine', machine => {
      const { cpuPercent, memPercent } = machine;
      this.setState({ cpuPercent, memPercent });
    })
  }

  render() {
    const { cpuPercent, memPercent } = this.state;

    return (
      <div class="machine-dock">
        <RadialBar value={cpuPercent} title="CPU"/>
        <RadialBar value={memPercent} title="Memory"/>
      </div>
    );
  }
}

export default Machine;
