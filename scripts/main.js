var React = require('react');
var ReactDOM = require('react-dom');

/*
  Lets create our primary app component. All the subcomponents will be nested within it
*/
var App = React.createClass({
  render: function() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header/>
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
})

/*
  Create the Header component <Header/>
*/
var Header = React.createClass({
  render: function(){
    return (
      <p>Header</p>
    )
  }
})

/*
  Create the Order component <Order/>
*/
var Order = React.createClass({
  render: function(){
    return (
      <p>Order</p>
    )
  }
})
/*
  Create the Inventory component <Inventory/>
*/
var Inventory = React.createClass({
  render: function(){
    return (
      <p>Inventory</p>
    )
  }
})

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

ReactDOM.render(<App/>, document.getElementById('main'));
//sdfsaf
