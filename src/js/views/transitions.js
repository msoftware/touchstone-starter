/** @jsx React.DOM */

var React = require('react'),
	SetClass = require('classnames'),
	Tappable = require('react-tappable'),
	Navigation = require('touchstonejs').Navigation,
	Link = require('touchstonejs').Link,
	UI = require('touchstonejs').UI;

module.exports = React.createClass({
	mixins: [Navigation],

	render: function() {

		return (
			<UI.FlexLayout className={this.props.viewClassName}>
				<UI.Headerbar label="Transitions">
					<UI.HeaderbarButton showView="home" viewTransition="reveal-from-right" icon="ion-chevron-left" label="Back" />
				</UI.Headerbar>
				<UI.FlexBlock scrollable>
					<div className="panel-header text-caps">Default</div>
					<div className="panel">
						<div className="ios-list">
							<Link to="transitions-target" className="list-item is-tappable">None</Link>
						</div>
					</div>
					<div className="panel-header text-caps">Fade</div>
					<div className="panel">
						<div className="ios-list">
							<Link to="transitions-target" viewTransition="fade" className="list-item is-tappable">Fade</Link>
							<Link to="transitions-target" viewTransition="fade-expand" className="list-item is-tappable">Fade Expand</Link>
							<Link to="transitions-target" viewTransition="fade-contract" className="list-item is-tappable">Fade Contract</Link>
						</div>
					</div>
					<div className="panel-header text-caps">Show</div>
					<div className="panel">
						<div className="ios-list">
							<Link to="transitions-target" viewTransition="show-from-left" className="list-item is-tappable">Show from Left</Link>
							<Link to="transitions-target" viewTransition="show-from-right" className="list-item is-tappable">Show from Right</Link>
							<Link to="transitions-target" viewTransition="show-from-top" className="list-item is-tappable">Show from Top</Link>
							<Link to="transitions-target" viewTransition="show-from-bottom" className="list-item is-tappable">Show from Bottom</Link>
						</div>
					</div>
					<div className="panel-header text-caps">Reveal</div>
					<div className="panel">
						<div className="ios-list">
							<Link to="transitions-target" viewTransition="reveal-from-left" className="list-item is-tappable">Reveal from Left</Link>
							<Link to="transitions-target" viewTransition="reveal-from-right" className="list-item is-tappable">Reveal from Right</Link>
							<Link to="transitions-target" viewTransition="reveal-from-top" className="list-item is-tappable">Reveal from Top</Link>
							<Link to="transitions-target" viewTransition="reveal-from-bottom" className="list-item is-tappable">Reveal from Bottom</Link>
						</div>
					</div>
				</UI.FlexBlock>
			</UI.FlexLayout>
		);
	}
});
