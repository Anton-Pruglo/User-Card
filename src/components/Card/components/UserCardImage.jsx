import { Component } from 'react';

export class UserCardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    const { src } = this.props;
    if (src) {
      const img = new Image();
      img.addEventListener('load', () => {
        this.setState({
          isLoaded: true,
        });
      });
      img.src = src;
    }
  }

  render() {
    const { src, initials } = this.props;
    const { isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div className="image-wrapper">
          <img className="image" alt="" src={src} />
        </div>
      );
    }

    return (
      <div className="image-wrapper">
        <h3 className="image-placeholder"
            style={{ background: '#' + Math.floor(Math.random() * 16777215).toString(16) }}>
          {initials}
        </h3>
      </div>
    );
  }
}