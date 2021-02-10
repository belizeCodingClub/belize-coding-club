import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-topbar  text-center">
        <p>
          Call or{" "}
          <a
            href="https://wa.me/5016082077"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            message 501-608-2077
          </a>{" "}
          to find out more details
        </p>
      </div>
      <header className="App-header">
        <div className="Header-left">
          <h1>belizeCodingClub</h1>
          <small>
            <span>Meet</span> <span>Learn</span> <span>Grow</span>
          </small>
        </div>
        <div className="Header-col">
          <div className="Meetup-date-box">
            <h3>First Virtual Meetup</h3>
            <h3>Coming Soon</h3>
          </div>
        </div>
      </header>

      <div className="App-body">
        <div className="container">
          <p style={{ paddingBottom: "20px" }}>
            Whether you're just getting into coding, already a seasoned coder,
            or simply trying to gauge your interest in software development and
            the tech industry in general, joining our club will give you
            exposure to people, right here in Belize, who all share an equal
            passion for all things coding and tech.
          </p>
          <div>
            <a
              href="https://forms.gle/m4HMPW7URcC4M9Ek7"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Join club (it's free)
            </a>
          </div>
        </div>
        <br />
        <div className="Section" style={{ marginTop: "40px" }}>
          <div className="container">
            <h2>Here's why you should join</h2>
            <div className="shadow" style={{ padding: "16px" }}>
              <h3>Meet & Relate</h3>
              <p>
                Have you ever felt few in number as a coder in Belize? Not too
                many relatable people around? No one to share your ideas with?
                Joining our club will provide you with a network of relatable
                people just like yourself. You'll meet and interact with people
                not only from your district but from across the entire country.
                How? With our virtual meetups and chat groups.
              </p>
            </div>
          </div>
        </div>
        <div className="Section">
          <div className="container">
            <div className="shadow" style={{ padding: "16px" }}>
              <h3>Share & Learn</h3>
              <p>
                The ultimate goal of this club is to bring people together who
                are passionate about coding regardless of their career stage or
                current level of knowledge. Our virtual meetups are meant to
                introduce people to one another, talk about different
                technologies, side projects, share ideas, and much more. We also
                plan on having guest speakers from local and foreign tech
                companies share their experience and provide practical advice
                about coding and all things tech.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="join-cta text-center">
        <div className="container">
          <h1 style={{ margin: 0 }}>Join us today</h1>
          <p style={{ margin: 0 }}>
            You won't want to miss out on our first virtual meetup so be sure to
            click the button below and become a club member today.
          </p>
          <a
            href="https://forms.gle/m4HMPW7URcC4M9Ek7"
            className="btn"
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: "34px" }}
          >
            Join club (it's free)
          </a>
        </div>
      </div>
      <footer className="text-center">
        <div className="container">
          <p>Copyright © 2021 belizeCodingClub - Powered by you</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
