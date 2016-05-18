var React = require('react');
var ReactDOM = require('react-dom');

// Create a <StorePicker/>

var StorePicker = React.createClass({
  render: function() {
    return (
      <form className = "store-selector">
        {/*Test Comment*/}
        <h2>
          Please Enter a Store Name
        </h2>
        <input type='text' ref='storeID' required>
        </input>
        <input type='Submit'>
        </input>
      </form>
    )
  }
});

ReactDOM.render(<StorePicker/>, document.getElementById('main'));
//sdfsaf
