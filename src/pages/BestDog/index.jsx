import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/style.css"; // your main css
import bestDogImg from "../../assets/images/blog1.jpg"; // replace with your image path

const BestDog = () => {
     useEffect(() => {
    window.scrollTo(0, 0);   // scroll to top when component mounts
  }, []);
  return (
    <main className="bestdog-page py-5">
      <div className="container">
        <article className="card blog-article shadow-lg border-0 overflow-hidden">
          <div className="row g-0">
            {/* Image */}
            <div className="col-md-12">
              <figure className="m-0 h-100 w-100 overflow-hidden">
                <img
                  src={bestDogImg}
                  alt="Small dog in a Japanese apartment"
                  className="img-fluid object-fit-cover h-100 w-100"
                />
              </figure>
            </div>

            {/* Content */}
            <div className="col-md-12">
              <div className="card-body p-4">
                <h1 className="card-title mb-3">
                  Best Dog Breeds for Japanese Apartments (Small-Space Friendly)
                </h1>

                <p className="text-muted mb-3">
                  Living in Japan often means making the most of limited space.
                  Choosing the right dog breed is the first step to a happy life
                  for both you and your pet. This guide highlights breeds that
                  typically adapt well to apartments, while giving practical tips
                  for training, exercise, and daily care in urban Japanese life.
                </p>

                <section className="mb-3">
                  <h4>What to look for in apartment-friendly dogs</h4>
                  <p>
                    In a small apartment, the best dogs tend to be compact,
                    reasonably quiet, and adaptable. Important qualities include:
                    lower exercise needs (or owners willing to provide regular
                    walks), calm indoor behavior, minimal separation anxiety,
                    and manageable grooming. Temperament matters as much as size.
                    A calm, well-trained small dog will be far easier to live
                    with than a high-energy breed no matter the square footage.
                  </p>
                </section>

                <section className="mb-3">
                  <h4>Top apartment-friendly dog breeds</h4>

                  <ul>
                    <li>
                      <strong>Shiba Inu (small/medium)</strong> — A Japanese
                      classic. Shiba are independent, clean, and suited to
                      apartment life if given daily walks and mental stimulation.
                    </li>

                    <li>
                      <strong>Toy Poodle</strong> — Intelligent and low-shedding,
                      Poodles learn quickly and adapt well to indoor living with
                      regular play and training.
                    </li>

                    <li>
                      <strong>Chihuahua</strong> — Ultra-compact and affectionate,
                      they suit small homes but benefit from socialization to avoid
                      excessive barking.
                    </li>

                    <li>
                      <strong>Miniature Dachshund</strong> — Sturdy and playful,
                      they enjoy short indoor play sessions and moderate walks.
                    </li>

                    <li>
                      <strong>French Bulldog</strong> — Calm and friendly, with low
                      exercise needs. Be mindful of heat and humidity in summer.
                    </li>
                  </ul>

                  <p className="mb-0">
                    These breeds are general suggestions — individual temperament
                    varies. Consider adopting from a local shelter where staff can
                    recommend dogs that fit apartment life.
                  </p>
                </section>

                <section className="mb-3">
                  <h4>Practical tips for apartment living</h4>
                  <p>
                    Even the best-suited breed needs a supportive home: keep a
                    regular walking schedule, provide mental enrichment (puzzle
                    toys, basic obedience practice), and create a cozy resting
                    area. For hot, humid summers in Japan, focus on cooling mats,
                    shaded walks, and limiting exercise in the heat. For busy
                    workdays, use secure, comfortable confinement (crate or small
                    room) and leave safe toys to reduce stress.
                  </p>

                  <p>
                    If you’d like training pointers specific to a stubborn breed,
                    check our guide on{" "}
                    <Link to="/how-to-train-shiba">how to train a Shiba</Link>.
                    For daily health and grooming advice, see our{" "}
                    <Link to="/dog-care-tips">dog care tips</Link> article.
                  </p>
                </section>

                <section className="mb-3">
                  <h4>Apartment-friendly daily routine example</h4>
                  <ol>
                    <li>Morning: 20–30 minute walk + short training session</li>
                    <li>Midday: Puzzle feeder or chew toy (if home)</li>
                    <li>Evening: 30–45 minute walk or play session</li>
                    <li>Night: Calm wind-down and comfortable sleeping place</li>
                  </ol>
                  <p className="mb-0">
                    Adapt times and intensity to your dog’s age and breed. Puppies
                    and senior dogs need special pacing and more frequent short
                    breaks.
                  </p>
                </section>

                <section className="mb-3">
                  <h4>Considerations: neighbors and rules</h4>
                  <p>
                    Many Japanese apartments have noise rules and pet regulations.
                    Be transparent with landlords, follow building rules, and
                    train your dog to reduce barking. If you’re looking for
                    pet-friendly cafés or parks to socialize your dog, visit our
                    Tokyo & Osaka guide or check local community pages. You can
                    also find ideas for small-space enrichment at{" "}
                    <Link to="/indoor-enrichment-ideas">indoor enrichment ideas</Link>.
                  </p>
                </section>

                <section className="mb-3">
                  <h4>Food & litter (cross-link)</h4>
                  <p>
                    While dogs don't use litter, nutrition matters hugely.
                    Read about safe foods in our article on{" "}
                    <Link to="/best-cat-litter">best cat litter</Link> for tips
                    about pet safety and household hygiene, and see our{" "}
                    <Link to="/dog-care-tips">dog care tips</Link> for feeding
                    guidance.
                  </p>
                </section>

                <footer className="mt-4">
                  <p className="small text-muted mb-2">
                    Thinking of a cat instead? Compare apartment life for cats
                    and dogs in our{" "}
                    <Link to="/japanese-cats">Japanese cats</Link> article.
                  </p>

                  <Link to="/blog" className="btn btn-outline-primary me-2">
                    Back to Blogs
                  </Link>
                  <Link to="/contact" className="btn btn-primary">
                    Ask a Question
                  </Link>
                </footer>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default BestDog;
