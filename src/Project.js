import React from 'react'
import "./css/Project.css"


class Project extends React.Component {
  constructor() {
    super()
    this.state = {
      image: 'python.png'
    }
  }

  componentDidMount() {
    switch(this.props.language) {
      case 'Swift':
        this.setState({image: 'img/iphone.png'})
        break;
      case 'JavaScript':
        this.setState({image: 'img/js.png'})
        break;
      case 'Python':
        this.setState({image: 'img/python.png'})
        break;
      case 'Kotlin':
        this.setState({image: 'img/android.png'})
        break;
        case 'C++':
          this.setState({image: 'img/c++.png'})
          break;
      default:
        // code block
    }
  }

  render(){
    return (
      <div className='p'>
        <div className='card'>
        <h1>{this.props.title}</h1>
        <h2>
          <img src={`${process.env.PUBLIC_URL}${this.state.image}`} alt=''/>
        </h2>
        <a href={this.props.link}>Link to project</a>
        </div>
  
      </div>
    ) 
  }
}


export default Project