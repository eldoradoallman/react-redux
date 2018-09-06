import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import api from '../api';

import { actions as sidebarMenuActions } from '../common/sidebarmenu/SidebarMenuDucks';
import NewsDetailComponent from './NewsDetailComponent';

import './NewsDetail.css';

class ConnectedNewsDetail extends Component {
  state = {
    news_detail: {}
  };
  
  componentDidMount() {
    axios.get(api.news_detail.content)
      .then(json => this.setState({
        news_detail: json.data
      }))
      .catch(error => console.log(error));
  }
  
  componentWillUnmount() {
    if (this.props.isSidebarOpen) {
      this.props.closeSidebarMenu();
    }
  }

  render() {
    return (
      this.state.news_detail.id ?
      <NewsDetailComponent {...this.state} />
      : 
      <p>Loading Content</p>
    );
  }
}

ConnectedNewsDetail.propTypes = {
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

const NewsDetail = connect(mapStateToProps, mapDispatchToProps)(ConnectedNewsDetail);

export default NewsDetail;
