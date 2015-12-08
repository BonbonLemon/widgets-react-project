var React = require('react');

var Clock = React.createClass({
  getInitialState: function () {
    return {time: new Date()};
  },
  componentDidMount: function () {
    this.setInterval = setInterval( function () {
      this.setState({time: new Date()});
    }.bind(this), 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.setInterval);
  },
  render: function () {
    return(
      <div>
        <label>Current Time: </label>
        <div>{this.state.time.toString()}</div>
      </div>
    );
  }
});
module.exports = Clock;
