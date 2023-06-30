import React from 'react';

interface WindowSize {
  width: number;
  height: number;
}

interface WithWindowListenerProps {
  windowWidth: number;
  windowHeight: number;
}

function withWindowListener<T extends WithWindowListenerProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return class extends React.Component<Omit<T, keyof WithWindowListenerProps>> {
    state: WindowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    handleResize = () =>
      this.setState({ width: window.innerWidth, height: window.innerHeight });

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    render() {
      return <WrappedComponent {...(this.props as T)} />;
    }
  };
}

type MyComponentProps = WithWindowListenerProps;

const MyComponent = ({ windowWidth, windowHeight }: MyComponentProps) => (
  <div>
    <p>Window Width: {windowWidth}</p>
    <p>Window Height: {windowHeight}</p>
  </div>
);

export default withWindowListener(MyComponent);
