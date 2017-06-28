import React from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteButton from 'material-ui/svg-icons/action/delete';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class ShoppingCart extends React.Component {

  constructor(props) {
      super(props); // constructor of react component
      this.state = {
        inputValue: ''
      }
  }

  delete = (id) =>  {
    this.props.deleteItem(id);
  }

  render() {

    return (
    <Table selectable={false}>

      <TableHeader 
        displayRowCheckbox={false} 
        showCheckboxes={false} 
        adjustForCheckbox={false} 
        displaySelectAll={false} 
        enableSelectAll={false} 
        multiSelectable={false} 
        stripedRows={false} 
        showRowHover={false} 
        deselectOnClickaway={false}
      >
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Price per unit</TableHeaderColumn>
          <TableHeaderColumn>Quantity</TableHeaderColumn>
          <TableHeaderColumn>Discount</TableHeaderColumn>
          <TableHeaderColumn>Final Price</TableHeaderColumn>
          <TableHeaderColumn>Delete</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      
      <TableBody displayRowCheckbox={false}>
      { this.props.blouses.map(blouse => {
          if (this.props.inCart[blouse.id]) {
            return (
              <TableRow key={ blouse.id }>
                <TableRowColumn>{ blouse.title }</TableRowColumn>
                <TableRowColumn>CHF { blouse.price.toFixed(2) }</TableRowColumn>
                <TableRowColumn>{ this.props.inCart[blouse.id] }</TableRowColumn>
                <TableRowColumn>{ (blouse.discount !== 0) ? blouse.discount + "%" : "—" }</TableRowColumn>
                <TableRowColumn>CHF { (blouse.price * this.props.inCart[blouse.id] * (1-blouse.discount/100)).toFixed(2) }</TableRowColumn>
                <TableRowColumn><IconButton><DeleteButton onClick={ () => this.props.delete(blouse.id) }/></IconButton></TableRowColumn>
              </TableRow>
              );
          }   
      }) }
      </TableBody>
      
      <TableFooter>
        <TableRow>
          <TableRowColumn style={{textAlign: 'center'}}>
            Total: CHF { this.props.total.toFixed(2) }
          </TableRowColumn>
        </TableRow>
      </TableFooter>
    </Table>
    );

  }

}

export default ShoppingCart;