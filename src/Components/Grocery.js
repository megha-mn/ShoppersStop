import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { addGroceryById } from '../Actions'

class Grocery extends Component{
  render(){
		return(
			<div className="col-md-4">
				<h2 className="text-center"> Grocery Items</h2>
				<ul className="list-group">
					{this.props.grocery.map((item)=>{
						return <li key={item.id} 
						className="list-group-item"
						onClick={()=>this.props.addGroceryById(item.id)}>
							<b>{item.name} - <span className="label label-primary">{item.cost} </span>  - {item.calories} - {item.weight}</b>
						</li>;
					})}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		grocery: state.grocery
	}
}

export default connect(mapStateToProps,{addGroceryById}) (Grocery);