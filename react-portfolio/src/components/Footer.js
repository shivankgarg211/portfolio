import React from 'react';
import './Footer.css';

function Footer() {
  return (
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; 2025 Shivank Garg. All rights reserved.</p>
          </div>
          <div className="footer-center">
            <ul className="social-icons">
              <li><a href="https://www.linkedin.com/in/shivankgarg" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://github.com/ShivankGarg" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
              <li><a href="mailto:shivank@example.com"><i className="fas fa-envelope"></i></a></li>
            </ul>
          </div>
          <div className="footer-right">
            <p>Built with ❤️ using React</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
