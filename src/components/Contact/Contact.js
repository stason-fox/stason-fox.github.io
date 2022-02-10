import "./Contact.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="Contact">
            <h1>Contact</h1>
            <div className="icons-container">
                <span className="github">
                    <a
                        href={"https://github.com/stason-fox"}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaGithubSquare />
                    </a>
                </span>
                <span className="linkedin">
                    <a
                        href={"https://www.linkedin.com/in/stasonfox"}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaLinkedin />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Contact;
