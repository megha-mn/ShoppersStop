import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Stats extends Component{
	cost(){
		let totalCost = 0;
		this.props.shoppingBag.map(item => totalCost +=item.cost);
		return totalCost;
	}

	calories(){
		let totalCalories = 0;
		this.props.shoppingBag.map(item => totalCalories +=item.calories);
		return totalCalories;
	}

	weight(){
		let totalWeight = 0;
		this.props.shoppingBag.map(item => totalWeight +=item.weight);
		return totalWeight;
	}

  render(){
		return(
			<div className="col-md-4">
				<h2 className="text-center"> Stats Items</h2>
				<ul className="list-group">
					<li className="list-group-item">Cost - $ {this.cost()}</li>
					<li className="list-group-item">Calories - {this.calories()} kcal</li>
					<li className="list-group-item">Weight -  {this.weight()} mg</li>
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

export default connect(mapStateToProps,null) (Stats);
