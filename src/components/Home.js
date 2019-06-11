import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      age: props.initialAge,
      status: 0,
      homeLink: props.initialName
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 3000)
    console.log('Constructor')
  }

  onMakeOlder () {
    this.setState({
      age: this.state.age + 3
    })
    console.log(this.age)
  }

  handleGreet () {
    this.props.greet(this.state.age)
  }

  onChangeLink () {
    this.props.changeLink(this.state.homeLink)
  }

  onHandleChange (event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  componentWillMount () {
    console.log('Component will mount');
  }

  componentDidMount () {
    console.log('Component did mount');
  }

  componenWillReceiveProps(nextProps) {
    console.log('Component will receive props', nextProps);
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('should Component update', nextProps, nextState);
    if (nextState.status === 1) {
      return false;
    }
    return true;
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('Component will update', nextProps, nextState)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('Component did update', prevProps, prevState)
  }

  componentWillUnmount () {
    console.log('Component will unmount')
  }

  render () {
    console.log('render');
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-1 col-xs-offset-1'>
            <h1>Home</h1>
            <div>your name is { this.props.name }, your age is { this.state.age }</div>
            <button onClick={() => this.onMakeOlder()} className='btn btn-primary'>make me older</button>
            <div>
              <h4>hobbies</h4>
              <ul>
                { this.props.user.hobbies.map((hobby, i) => <li key={ i }>{ hobby }</li>) }
              </ul>
            </div>
            <div>{ this.props.children }</div>
            <button onClick={() => this.handleGreet()} className='btn btn-primary'>Greet</button>
            <br />
            <div className='mt-4'>
              <input
                type=''
                value={ this.state.homeLink }
                onChange={(event) => this.onHandleChange(event)}
              />
              <button onClick={ this.onChangeLink.bind(this)} className='btn btn-primary'>Change Header Link</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired,
  initialName: PropTypes.string
}