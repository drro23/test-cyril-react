import React from "react";
import NavBar from "../components/NavBar";
import Service from "../components/Service";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <main>
          <div className="top-block">
            <div className="image-video">
              <div className="image-video__bg-decoration">
                {/* <!-- Under grey bg--> */}
              </div>
              {/* <!-- Image video--> */}
            </div>
            <h1 className="title">
              Ready not to
              <br />
              Stop
              <span className="title__word-decoration"> Talking</span>
              <br /> Design ?
            </h1>
            <div class="join-now">
              <p className="join-now__text">
                I want to{" "}
                <span className="join-now-decoration">
                  <br />
                  Join now!
                </span>
              </p>
            </div>
          </div>
          <div className="check-schedule">
            <p className="check-schedule__text">
              Check the
              <br /> schedule!
            </p>
            <div className="agustus">
              <h3 className="agustus__title">Agustus 8, Bengkulu</h3>
              <p className="agustus__text">
                Aliquam id diam maecenas
                <br /> ultricies mauris pharetra.
              </p>
            </div>
          </div>
          <section className="join-us">
            <h1 className="join-us__title">
              Your luck
              <br />
              if you join
              <br />
              us now!
            </h1>
            <div className="join-container">
              <p className="join-us__text">
                Egestas dui id orname arcu odio ut sem null
                <br />
                pharetra.
              </p>
              <button className="join-us__button">Join now!</button>
            </div>
          </section>
          <section className="services-container">
            <Service>
              <h2 className="service-title">Certificate</h2>
              <p className="service-text">
                Libero volupat sad cras teluis id risus interdum matias enim.
              </p>
            </Service>
            <Service>
              <h2 className="service-title">Certificate</h2>
              <p className="service-text">
                Libero volupat sad cras teluis id risus interdum matias enim.
              </p>
            </Service>
            <Service>
              <h2 className="service-title">Certificate</h2>
              <p className="service-text">
                Libero volupat sad cras teluis id risus interdum matias enim.
              </p>
            </Service>
          </section>
        </main>
      </div>
    </>
  );
}
