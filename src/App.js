import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-left">
          <h1>belizeCodingGroup</h1>
          <small>
            <span>Meet</span> <span>Learn</span> <span>Grow</span>
          </small>
        </div>
        <div className="Header-col">
          <div className="Meetup-date-box">
            <h3>Next Virtual Meet</h3>
            <h3>Coming Soon</h3>
          </div>
        </div>
      </header>

      <div className="App-body container">
        <div className="container">
          <p style={{ paddingBottom: "20px" }}>
            Whether you're just getting into coding, already a seasoned coder,
            or simply trying to gauge your interest in software development and
            the tech industry in general, joining our group will give you
            exposure to people, right here in Belize, who all share an equal
            passion for all things coding and tech.
          </p>
          <button className="btn">Join group (it's free)</button>
        </div>
        <br />
        <div className="Section" style={{ marginTop: "40px" }}>
          <h3>Here's why you should join</h3>
          <div className="shadow" style={{ padding: "16px" }}>
            <h4>Meet</h4>
            <p>
              Have you ever felt alone as a coder in Belize? Not too many
              relatable people around? Joining our group will give you an
              introduction to a bunch of relatable people just like yourself.
              You'll meet people not only from within your district but from
              across the country.
            </p>
          </div>
        </div>
        <div className="Section">
          <div className="shadow" style={{ padding: "16px" }}>
            <h4>Learn</h4>
            <p>
              The goal of this group is to bring people together who are
              passionate about coding regardless of experential levels. Our
              virtual meetings are meant to introduce people to one another,
              talk about tech-stacks, side projects, share ideas, and much much
              more.
            </p>
          </div>
        </div>
      </div>
      <div className="join-cta text-center">
        <div className="container">
          <h2 style={{ margin: 0 }}>Join us today</h2>
          <p style={{ margin: 0 }}>
            You won't want to miss out on our first virtual meet so be sure to
            click the button below and become a member today.
          </p>
          <button className="btn" style={{ marginTop: "30px" }}>
            Join group (it's free)
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
