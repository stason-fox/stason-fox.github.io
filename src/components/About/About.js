import "./About.css";

const About = () => {
    const text = `My name is Stason Fox and I'm a developer from Oregon. I specialize in JavaScript, React, SQL, Python, CSS, and HTML. I have a bachelor's degree in Health Information Management and Technology (Health IT concentration).
    
    I have earned the following certifications:    
    Harvard
    • CS50T: CS50's Understanding Technology
    • CS50: Introduction to Computer Science
    
    freeCodeCamp
    • Responsive Web Design
    • JavaScript Algorithms and Data Structures
    • Front End Development Libraries`;

    return (
        <div className="About">
            <div className="text-container">
                <div className="text">{text}</div>
            </div>
            <div className="image-container">
                <img
                    src={"../images/stason.jpg"}
                    alt="stason"
                    className="about-image"
                />
            </div>
        </div>
    );
};

export default About;
