import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import AddToCart from 'material-ui/svg-icons/action/add-shopping-cart';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 700,
    height: 450,
    overflowY: 'auto',
  },
  img: {
    width: '50%',
  }
};

class BlousesGrid extends React.Component {
  
  addNewProduct = (id) => {
    this.props.addToCart(id);
  }

  render () {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={400}
          style={styles.gridList}
          cols={3}
          rows={3}
        >
          <Subheader>Autumn/Summer 2017</Subheader>
          {
            this.props.blouses.map((blouse) => (
              <GridTile
                key={ blouse.img }
                title={ blouse.title }
                subtitle={ <span>CHF <b>{ blouse.price.toFixed(2) }</b> 
                  {
                    (blouse.discount !== 0) ? " — " + blouse.discount + "% Off" : "" 
                  } </span> }
                actionIcon={<IconButton><AddToCart color="white" onClick={() => this.props.addNewProduct(blouse.id)}/></IconButton>}
              >
                <img className="image" src={blouse.img} style={styles.img} alt="Blouse"/>
              </GridTile>
          ))
          }
        </GridList>
      </div>
    );
  }
  
}

export default BlousesGrid;