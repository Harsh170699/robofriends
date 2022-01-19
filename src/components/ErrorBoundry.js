import React from 'react';

// with this ErrorBoundry component, we can wrap the component or we can wrap cardless component with an errorboundry component, and if the cardless component fails 
// we can catch it in errorBoundry 
class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

// to change this hasError we have a new life cycle method called componentDidCatch - is like a try catch block in js, so if anything errors out, it will run this lifecycle hook
    componentDidCatch(error, info) {
        this.setState( { hasError: true })
    }

    render() {
        // 
        if (this.state.hasError) {
            // this.state.hasError is true, it should return default state
            // in simple terms - if there is a error it will display the h1 tag message  
            return <h1>Oops, That is not good</h1>
        }
        // remember will be anything between ErrorBoundry, so render the children whatever is inside of our boundry, otherwise render each one  
        return this.props.children
    }
}


export default ErrorBoundry;