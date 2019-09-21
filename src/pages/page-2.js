import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

class ImageInput extends React.Component {
  render() {
    return (
      <div>
        <label>Select a photo:</label>
        <input type="file" onChange={(e) => this.props.onChange(e)} />
      </div>
      );
    }
  }

class ImageView extends React.Component {
  render() {
    // if (this.state.image && this.state.image.type.startsWith('image/')){
    //   console.log(this.state.image);
    //   return (
    //     <div>
    //       <img src={this.state.image} alt="la tua freaking face" />
    //     </div>
    //   );
    // }
    // if (this.state.image){
    
    let body;
    if (this.props.image && this.props.image.type.startsWith('image/'))
      body = (
        <div>
          <img src={this.props.image} alt="la tua freaking face" />
        </div>
      );
    else if (this.props.image)
      body = (
        <div>
          <p>Image format not supported. Try with a .jpeg or .png !</p>
        </div>
      );
    else
      body = (
        <div>
          <p>or Drag and Drop your photo here</p>
          <p>Image format not supported!</p>
        </div>
      );

    return (
      <div className={this.props.hovering} onDrop={(e) => this.props.onDrop(e)} onDragOver={(e) => this.props.onDragOver(e)} onDragLeave={(e) => this.props.onDragLeave(e)}>
        {body}
      </div>
    );
  }
}

class ImageEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovering: `unhovered`, image: null};
  }

  handleDragOver(event) {
    event.preventDefault();
    this.setState({hovering: `hovered`});
  }

  handleDragLeave(event) {
    event.preventDefault();
    this.setState({hovering: `unhovered`});
  }

  handleSubmit(event) {
    event.preventDefault();
    // if (this.props.image && this.props.image.type.startsWith(`image/`))
    //   this.setState({imageState: `uploaded`})
    // else if (this.props.image)
    //   this.setState({imageState = `failed`})

    alert(event)

    if (event.dataTransfer.items) {
      let file = event.dataTransfer.items[0].getAsFile();
      console.log('... file.name = ' + file.name);
      this.setState({hovering: `unhovered`, imageState: 'imageState', image: URL.createObjectURL(file)});
    }
  }

  render() {
    return (
      <div>
        <ImageInput onChange={(e) => this.handleSubmit(e)} />
        <ImageView hovering={this.state.hovering} image={this.state.image} onDragOver={(e) => this.handleDragOver(e)} onDragLeave={(e) => this.handleDragLeave(e)} onDrop={(e) => this.handleSubmit(e)} />
      </div>
    );
  }
}


const SecondPage = () => (
  <Layout>
  <SEO title="Page two" />
  <h1>Hi from the second page</h1>
  <p>Welcome to page 2</p>
  
  <ImageEditor />
  
  {/* <Toggle /> */}
  <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
  
export default SecondPage