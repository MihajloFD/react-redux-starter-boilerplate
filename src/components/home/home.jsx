import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import './Home.scss';

class Home extends Component {
  render () {
    const { home } = this.props;
    return (
      <div className='test'>
        <header className='test1' onClick={this.props.homeFunction} >This is test page</header>
        <nav>
          <Link to='/about'> About </Link>
        </nav>
        <main>{home}</main>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    home: state.homeReducer.home
  };
}
Home.propTypes = {
  home: PropTypes.string,
  homeFunction: PropTypes.func
};
export default connect(mapStateToProps, actions)(Home);
