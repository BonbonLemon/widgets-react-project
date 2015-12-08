var React = require('react');

var Tabs = React.createClass({
  getInitialState: function () {
    return {selectedTabIndex: 0};
  },
  render: function () {
    return(
      <ul>
        <header>
          {
          this.props.tabs.map(function (tab, index) {
            return <article key={index} >{tab.title}</article>;
          })
          }
        </header>
        <article>{this.props.tabs[this.state.selectedTabIndex]}</article>
      </ul>
    );
  }
});

module.exports = Tabs;
