var React = require('react');
var ReactDOM = require('react-dom');
var names = ["Stephen", "Christine", "Jeff", "Haseeb", "Brooke", "Max", "Charles"];
var Autocomplete = require('./autocomplete.jsx');
var Clock = require('./clock.jsx');
var Weather = require('./weather.jsx');
var Tabs = require('./tabs.jsx');
var tabs = [{title: "a", content: "hello"}, {title: "b", content:"hi there"}, {title: "c", content: "top o the mornin!"}];

var Widgets = React.createClass({
  render: function () {
    return (
      <div>
        <Autocomplete names={names}/>
        <Clock/>
        <Weather/>
        <Tabs tabs={tabs}/>
      </div>
    );
  }
});



document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));

});
