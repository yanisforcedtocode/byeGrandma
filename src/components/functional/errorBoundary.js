// === packages
import React from 'react'

// === css
import styles from './../css-modules/sections.module.css'


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    // static
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
    // handler
    componentDidCatch(error) {
      // You can also log the error to an error reporting service
      console.log("error caught by boundary" + error);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div className={styles.error_boundary}>
            <h1>請重刷頁面，如果不能解決問題請聯絡管理員.</h1>
            <p>yancetse@gmail.com</p>
          </div>
        );
      }
      return this.props.children; 
    }
  }

  export default ErrorBoundary