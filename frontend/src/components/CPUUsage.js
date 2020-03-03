import React from 'react';

class Machine extends React.Component {
  constructor(props, context) {
    super();
    this.state = {
      cpuPercentage: 0
    };
    this.spy()
  }

  spy = async () => {
    const machine = await window.backend.Stats.GetCPUUsage();
    this.setState({cpuPercentage: machine.avg})
  }

  render() {
    const { cpuPercentage } = this.state;

    return (
      <div>
        {cpuPercentage}
      </div>
    );
  }
}

export default Machine;
