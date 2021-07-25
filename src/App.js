import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-topbar  text-center">
        <p>
          <span>Get in touch with us - </span>

          <a href="mailto:hello@belizecodingclub.org" className="App-link">
            hello@belizecodingclub.org
          </a>
        </p>
      </div>
      <header className="App-header">
        <div className="Header-left">
          <h1>
            {"<"}belizeCodingClub{"/>"}
          </h1>
          <small>
            <span>Meet</span> <span>Learn</span> <span>Grow</span>
          </small>
        </div>
        <div>
          <iframe
            src="https://discord.com/widget?id=865450608157130783&theme=dark"
            width="100%"
            height="300"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
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
              href="https://discord.gg/RWAc3kcZVq"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Join our Discord
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
                current level of knowledge. This club aims to bring the
                developer community here in Belize closer and in doing so
                provide a platform where people can talk about different
                technologies, share side projects, share ideas, and much much
                more. We also plan on having meetups as soon as it's safe to do
                so.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="join-cta text-center">
        <div className="container">
          <h1 style={{ margin: 0 }}>Join us today</h1>
          <p style={{ margin: 0 }}>
            You won't want to miss out so be sure to click the button below and
            become a member of the community today.
          </p>
          <a
            href="https://discord.gg/RWAc3kcZVq"
            className="btn"
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: "34px" }}
          >
            Join our Discord
          </a>
        </div>
      </div>
      <footer className="text-center">
        <div className="container">
          <p>
            belizeCodingClub -{" "}
            <a href="mailto:hello@belizecodingclub.org" className="App-link">
              hello@belizecodingclub.org
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
