import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			num1: 101 
		};

		// this.state = [
		// 	{ todo: 'Buys me a drink' },
		// 	{ todo : 'Bake a cake' },
		// 	{ todo : 'Do laundry' },
		// ];
	}

	componentDidMount() {
		// this.timerID = setInterval(
	 //      () => this.ticker(),
	 //      1000
	 //    );

	 	this.setState((state, props) => ({
	 		message: parseInt(state.num1) + parseInt(props.num)
	 	}));
  	}

 //  	componentWillUnmount() {
	//     clearInterval(this.timerID);
	// }

	// ticker(){
	// 	this.setState({
	// 		date: new Date()
	// 	});
	// }

	render(){
		return <p>{this.state.message}</p>;
	}
}

export default List;