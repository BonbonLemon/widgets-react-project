var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function() {
    return {input: ""};
  },
  handleChange: function(e) {
    this.setState({input: e.target.value});
  },
  handleClick: function(e) {
    this.setState({input: e.target.innerHTML});
  },
  render: function () {
    var that = this;
    var names = this.props.names;
    var selectedNames = names.filter(function(name) {
      return name.match(new RegExp(that.state.input, "i"));
    });

    return(
      <div>
        <label>Name</label>
        <input type="text"
               value={this.state.input}
               onChange={this.handleChange}>
        </input>
        <ul>
          {
            selectedNames.map(function(name, index) {
              return <li key={index} onClick={that.handleClick}>{name}</li>;
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = Autocomplete;
