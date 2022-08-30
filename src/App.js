import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Episode from "./Episode";

function App() {
  return (
    <div className="App">
      <header className="blog-header py-3">
        <div className="container-cus">
          <div className="row flex-nowrap justify-content-between align-items-center mx-0 px-0">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#">
                Daniel Scrivner
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="btn btn-sm btn-outline-secondary px-4" href="#">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="nav-scroller py-1 mb-2">
          <Container>
            <nav className="nav d-flex justify-content-between">
              <a className="p-2 link-secondary" href="#">
                Podcast
              </a>
              <a className="p-2 link-secondary" href="#">
                Newsletter
              </a>
              <a className="p-2 link-secondary" href="#">
                Topics & Tags
              </a>
              <a className="p-2 link-secondary text-center" href="#">
                <NavDropdown title="More" id="basic-nav-dropdown" bg="dark">
                  <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Newsroom
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Contact
                  </NavDropdown.Item>
                </NavDropdown>
              </a>
            </nav>
          </Container>
        </div>
      </section>

      <section>
        <Container>
          <div className="hero-daniel">
            <div className=" mb-4 text-white rounded row">
              <div className="col-md-6 px-0 text-hero">
                <h1 className="display-4">
                  Timeless insights for business and life.
                </h1>
                <p className="lead my-3">
                  Every week, I sit down with someone in the Top 1% of their
                  field — from NYT bestselling authors to Oscar winners — to
                  decode what they've mastered. Listen as I uncover the tactics,
                  routines, and habits that will propel you to the top of your
                  field.
                </p>
                {/* <p className="lead mb-0">
                  <a href="#" className="text-white fw-bold">
                    Continue reading...
                  </a>
                </p> */}
                <div className="boton-hero">
                  <div className="up">
                    <div className="card-hero">
                      <img
                        src="https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/63050c840e48d9bc407fc55b_Andrew-Herr_Thumbnail.jpg"
                        alt=""
                      />
                      <div className="title">
                        <span>Lates Periode</span>
                        <p>
                          #128 Andrew Herr of Fount: My Favorite Books, Tools,
                          Habits and More | 20 Minute Playbook
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ob">
                    <a
                      className="btn btn-sm btn-outline-secondary px-4"
                      href="#"
                    >
                      Start Hero
                    </a>
                    <a
                      className="btn btn-sm btn-outline-secondary px-4"
                      href="#"
                    >
                      Listen to the Podcast
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <img
                  src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f479acca51c91168e689008_card-portrait-tiny.png"
                  alt=""
                  className="image-daniel"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <div className="nav-scroller py-1 mb-2">
          <Container>
            <nav className="nav d-flex justify-content-between spon">
              <img
                src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938df703cc23c3f591a1_ds-logo-billboard.svg"
                alt=""
              />
              <img
                src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938dac97a14ded1bc1cc_ds-logo-nytimes.svg"
                alt=""
              />
              <img
                src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938d45fe451a495bd105_ds-logo-bloomberg.svg"
                alt=""
              />
              <img
                src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938d82cc6d271fee4843_ds-logo-washpost.svg"
                alt=""
              />
              <img
                src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938d0744f5accf1a88a2_ds-logo-espn.svg"
                alt=""
              />
            </nav>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <Episode />
        </Container>
      </section>
      <footer className="py-5">
        <Container>
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="#twitter" /> */}
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="#instagram" /> */}
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="#facebook" /> */}
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
