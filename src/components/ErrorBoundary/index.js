import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.error('Error boundary caught an error', error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        backgroundColor: 'grey',
                        display: 'inline-block',
                        padding: 10
                    }}
                >
                    <h3>Something went wrong. Can't render this part.</h3>
                    <Link to="/"> Go Home </Link>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
