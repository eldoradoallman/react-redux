import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import api from '../api';

import { actions as sidebarMenuActions } from '../common/sidebarmenu/SidebarMenuDucks';
import ProfileComponent from './ProfileComponent';

import './Profile.css';

class ConnectedProfile extends Component {
  state = {
    fetching: false,
    fetched: false,
    error: null,
    profile: {}
  };
  
  componentDidMount() {
    this.setState({ fetching: true });
    axios.get(api.profile.content)
      .then(json => this.setState({
        fetching: false,
        fetched: true,
        profile: json.data
      }))
      .catch(error => this.setState({
        fetching: false,
        error
      }));
  }
  
  componentWillUnmount() {
    if (this.props.isSidebarOpen) {
      this.props.closeSidebarMenu();
    }
  }

  render() {
    return (
      this.state.fetching ?
      <p>Loading Content</p>
      :
      this.state.fetched ?
      <ProfileComponent match={this.props.match} profile={this.state.profile} />
      : 
      <p>Failed to fetch Content</p>
    );
  }
}

ConnectedProfile.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebarMenu: PropTypes.func.isRequired,
  closeSidebarMenu: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  ...state.sidebarMenu
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(sidebarMenuActions, dispatch)
});

const Profile = connect(mapStateToProps, mapDispatchToProps)(ConnectedProfile);

export default Profile;
