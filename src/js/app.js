/** @jsx React.DOM */

var _ = require('underscore');
var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var SetClass = require('classnames');

var Touchstone = require('touchstonejs');

var config = require('./config')

var views = {

	// app
	'home': require('./views/home'),

	// components
	'component-feedback': require('./views/component/feedback'),
	
	'component-headerbar': require('./views/component/bar-header'),
	'component-headerbar-search': require('./views/component/bar-header-search'),
	'component-alertbar':  require('./views/component/bar-alert'),
	'component-actionbar': require('./views/component/bar-action'),
	'component-footerbar': require('./views/component/bar-footer'),

	'component-passcode': require('./views/component/passcode'),
	'component-toggle': require('./views/component/toggle'),

	'component-simple-list': require('./views/component/list-simple'),
	'component-complex-list': require('./views/component/list-complex'),
	'component-categorised-list': require('./views/component/list-categorised'),
	
	// transitions
	'transitions': require('./views/transitions'),
	'transitions-target': require('./views/transitions-target'),
	
	// details view
	'details': require('./views/details'),
	'radio-list': require('./views/radio-list')
};

var App = React.createClass({
	mixins: [Touchstone.createApp(views)],

	getInitialState: function() {
		var initialState = {
			currentView: 'home',
			online: true,
			centre: undefined,
			gate: undefined,
			isNativeApp: (typeof cordova !== 'undefined') ? true : false
		}

		return initialState
	},

	getViewProps: function() {
		return {
			online: this.state.online
		};
	},
	
	gotoDefaultView: function() {
		this.showView('home', 'fade');
	},

	render: function() {
		var appWrapperClassName = 'app-wrapper';

		if (this.state.isNativeApp) appWrapperClassName += ' is-native-app';

		var viewWrapperClassName = 'view-wrapper ' + this.state.viewWrapperClassName;

		return (
			<div className={appWrapperClassName}>
				<div className={viewWrapperClassName}>
					<ReactCSSTransitionGroup transitionName={this.state.viewTransition.name} transitionEnter={this.state.viewTransition.in} transitionLeave={this.state.viewTransition.out}>
						{this.getCurrentView()}
					</ReactCSSTransitionGroup>
				</div>
			</div>
		);
	}
});

function startApp() {
	React.render(<App />, document.getElementById('app'));
}

function onDeviceReady() {
	StatusBar.styleDefault();
	startApp();
}

if (typeof cordova === 'undefined') {
	startApp();
} else {
	document.addEventListener('deviceready', onDeviceReady, false);
}
