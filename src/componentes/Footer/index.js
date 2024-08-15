import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/facebook.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/twitter.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/instagram.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="https://cdn3.gnarususercontent.com.br/2535-react-com-javascript/04/add.png" alt="Logo" />
            </section>
            <section>
                <p>
                    Developed by Marcos.
                </p>
            </section>
        </footer>
    );
}

export default Footer;
