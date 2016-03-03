var Table = React.createClass({
  render: function(){
    return (
      <div>
        <h1>The name of this table is {this.props.name}</h1>
        <Row name="John Doe"></Row>
        <Row name="Jane Roe"></Rov>
      </div>
    )
  }
});
 
var Row = React.createClass({
  render: function(){
    return (
      <div>
        I am from the row component. My name is {this.props.name}
      </div>
    )
  }
});

var CellHeader = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});