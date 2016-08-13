
import linkedState from 'react-link';

const WithLink = React.crateClass({
	
	mixins: [React.addns.LinkeStateMixin],
	
	getInitialState () {
		
		return {
			message: 'hello!'
		}
		
	},
	
	render () {
		return (
			<input type="text" valueLink={this.linkState('message')}  />
		);
	}
	
	
});
