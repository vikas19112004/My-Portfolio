import "./PastExperience.css"

function PastExperience() {
    return (
        <div className="pastExperience" id="Past">
            <hr />
            <p className="mt-8 justify-self-center text-3xl font-semibold">Work Experience</p>
            <div className="cloudafe">
                <a href="https://cloudafe.in/"><img src="/cloudafe.jpg" alt="image" /></a>
                <hr />
                <span className="verticle"></span>
                <h3>Frontend Developer</h3>
                <p>I have worked as Intern in Cloudafe Corporation as a Frontend Developer</p>
            </div>
            <hr />
        </div>
    );
}

export default PastExperience;