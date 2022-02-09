import "./Home.css";

const Home = () => {
    return (
        <div className="Home">
            <img
                src={"../images/galaxy.jpg"}
                alt="galaxy"
                className="home-image"
            />
            <div className="name">
                <h1>Stason Fox</h1>
                <h2>Developer</h2>
            </div>
        </div>
    );
};

export default Home;
