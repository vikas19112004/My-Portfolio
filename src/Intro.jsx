import "./Intro.css"

function Intro() {
    return (
        <div className="intro-bg"  id='home'>
            <div className="intro">
                <h2>Hello,</h2>
                <h2>My name is <span className="text-purple-400">Vikas Kumawat</span></h2>
                <h2>And I am a passionate</h2>
                <h2 className="text-blue-500">Frontend Developer</h2>
            </div>
            <img src="/vikas.jpg" alt="" />
        </div>
    );
}

export default Intro;