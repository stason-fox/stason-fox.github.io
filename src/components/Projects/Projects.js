import "./Projects.css";

const Projects = () => {
    return (
        <div className="Projects">
            <h1>Personal Projects</h1>
            <div className="grid-container">
                <a
                    className="project"
                    href={"https://stason-fox.github.io/quizzical/"}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        class="image--quizzical"
                        src={"../images/quizzical.png"}
                        alt="project"
                    />
                    <p>Quizzical</p>
                </a>
                <div className="pomodoro-timer">
                    <a
                        className="project"
                        href={"https://stason-fox.github.io/pomodoro-timer/"}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img
                            class="image--pomodoro-timer"
                            src={"../images/pomodoro-timer.png"}
                            alt="project"
                        />
                        <p>Pomodoro Timer</p>
                    </a>
                </div>
                <a
                    className="project"
                    href={"https://stason-fox.github.io/react-calculator/"}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        class="image--react-calculator"
                        src={"../images/react-calculator.png"}
                        alt="project"
                    />
                    <p>React Calculator</p>
                </a>
                <div className="drum-machine">
                    <a
                        className="project"
                        href={"https://stason-fox.github.io/drum-machine/"}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img
                            class="image--drum-machine"
                            src={"../images/drum-machine.png"}
                            alt="project"
                        />
                        <p>Drum Machine</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
