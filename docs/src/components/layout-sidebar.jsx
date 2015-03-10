
var React = require('react');
var classnames = require('classnames');

var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Sidebar = require('./sidebar.jsx');
var Logo = require('./logo.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      sidebarIsOpen: false,
    }
  },

  toggleSidebar: function() {
    open = !this.state.sidebarIsOpen;
    this.setState({ sidebarIsOpen: open });
  },

  render: function() {

    var styles = {
      content: {
        minHeight: '100vh',
      },
      contentBody: {
        maxWidth: '48rem',
      }
    };

    var classes = {
      layout: classnames('LayoutSidebar', 'flex', { 'is-open': this.state.sidebarIsOpen }),
      sidebar: classnames('LayoutSidebar-sidebar',
        'flex-none', 'white',
        this.props.dark ? 'bg-black' : 'bg-silver')
    };


    return (
      <div className={classes.layout}>
        <div className={classes.sidebar} style={styles.sidebar}>
          <Sidebar {...this.props} toggleSidebar={this.toggleSidebar} />
        </div>
        <div className="LayoutSidebar-content flex-auto flex flex-column" style={styles.content}>
          <div className="flex-auto">
            <div className="flex flex-center sm-hide red bg-black" style={styles.sidebarToggle}>
              <button onClick={this.toggleSidebar}
                className="caps flex flex-center button py2 button-transparent">
                <Logo className="mr2" />
                <div>Rebass</div>
              </button>
            </div>
            <div className="px2 py4 mx-auto" style={styles.contentBody}>
              {this.props.children}
            </div>
          </div>
          <div className="px1">
            <Footer {...this.props} />
          </div>
        </div>
      </div>
    )
  }

});

