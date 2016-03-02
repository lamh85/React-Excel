var Table = React.createClass({
  render: function(){
    return (
      <div>
        <h1>The name of this table is {this.props.name}</h1>
      </div>

      <Row />
    )
  }
});

var Row = React.createClass({
  render: function(){
    return (
      <div>
        I am from the "row" component
      </div>
    )
  }
});