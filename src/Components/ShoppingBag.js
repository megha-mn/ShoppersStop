import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { removeGroceryById } from '../Actions'

class ShoppingBag extends Component{
  render(){
		return(
			<div className="col-md-4">
				<h2 className="text-center"> Shopping Bag Items</h2>
				<ul className="list-group">
					{this.props.shoppingBag.map((item) =>{
						return(
							<li key={item.id} 
						className="list-group-item"
						onClick={()=>this.props.removeGroceryById(item.id)}>
							<b>{item.name} - <span className="label label-primary">{item.cost} </span>  - {item.calories} - {item.weight}</b>
						</li> 
						)
					})
					}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		shoppingBag: state.shoppingBag
	}
}

export default connect(mapStateToProps,{removeGroceryById}) (ShoppingBag);