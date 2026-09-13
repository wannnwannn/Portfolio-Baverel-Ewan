import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <p className="footer-text">&copy; {new Date().getFullYear()} BAVEREL Ewan. Under <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>. <a href="/Legal" target="_blank" rel="noopener noreferrer">Legal Disclaimer & Terms of Use</a></p>
        </footer>
    )
}