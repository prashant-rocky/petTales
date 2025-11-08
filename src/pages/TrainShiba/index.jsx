import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/style.css"; 
import shibaImg from "../../assets/images/blog3.webp"; // change this path

const TrainShiba = () => {
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="blog-page py-5">
      <div className="container">
        <article className="card blog-article shadow-lg border-0 overflow-hidden">
          <div className="row g-0">

            {/* Top Image */}
            <div className="col-md-12">
              <figure className="m-0 h-100 w-100 overflow-hidden">
                <img
                  src={shibaImg}
                  alt="Shiba Inu training"
                  className="img-fluid object-fit-cover w-100"
                />
              </figure>
            </div>

            {/* Content */}
            <div className="col-md-12">
              <div className="card-body p-4">
                <h1 className="card-title mb-3">
                  How to Train a Shiba Inu — A Beginner’s Guide
                </h1>

                <p className="text-muted mb-3">
                  Training a Shiba Inu is a little like negotiating with a tiny,
                  fluffy philosopher. They are smart, proud, easily bored, and
                  famously independent. But with patience, structure, and the
                  right reward system, a Shiba can become one of the most
                  well-behaved and charming companions in any Japanese apartment.
                </p>

                <section className="mb-4">
                  <h4>Why Shibas are unique to train</h4>
                  <p>
                    Shibas were historically bred as hunting dogs in Japan.
                    Because of this, they’re alert, energetic, and very sure of
                    themselves. Unlike Golden Retrievers, who happily follow
                    instructions like eager students, Shibas tend to question,
                    observe, and decide whether your command is worth their time.
                  </p>
                  <p>
                    Understanding this mindset helps you create a training plan
                    that feels like teamwork rather than a power struggle.
                    Positive reinforcement is key. Harsh punishment or yelling
                    doesn’t work with Shibas, and often makes behavior worse.
                  </p>
                </section>

                <section className="mb-4">
                  <h4>Start with the basics: Sit, Stay, Come</h4>
                  <p>
                    These three commands build trust and communication. Shibas
                    learn fast but get bored fast, so keep sessions short
                    (5–7 minutes), energetic, and full of small treats.
                  </p>
                  <ul>
                    <li><strong>Sit:</strong> Use a treat to guide their nose upward. Reward instantly.</li>
                    <li><strong>Stay:</strong> Start with one second, then gradually increase.</li>
                    <li><strong>Come:</strong> Use a cheerful tone and high-value treats like chicken.</li>
                  </ul>
                  <p>
                    If your Shiba ignores you outside, don’t worry — many owners
                    experience this. Practice in quiet indoor spaces before
                    advancing to parks or sidewalks.
                  </p>
                </section>

                <section className="mb-4">
                  <h4>The famous Shiba recall challenge</h4>
                  <p>
                    Shibas are known for terrible recall. Their prey drive is
                    strong, and once they see a bird or leaf blowing in the wind,
                    they forget everything else. This is why many experts
                    recommend:
                  </p>
                  <ul>
                    <li>Training recall on a long leash</li>
                    <li>Using special treats reserved only for “come” training</li>
                    <li>Making recall a fun game instead of a command</li>
                    <li>Never punishing them after they return, even if slow</li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h4>House training in Japanese apartments</h4>
                  <p>
                    Thankfully, Shibas are naturally clean and easy to house-train.
                    Most learn quickly using pee pads if you live in a high-rise
                    building where outdoor breaks aren’t always convenient.
                  </p>
                  <p>
                    A good schedule:  
                    <br />• Morning walk  
                    <br />• After meals  
                    <br />• After play  
                    <br />• Before bedtime  
                  </p>
                </section>

                <section className="mb-4">
                  <h4>Socializing your Shiba early</h4>
                  <p>
                    A poorly socialized Shiba can become anxious, reactive, or
                    stubborn. Introduce them to:
                  </p>
                  <ul>
                    <li>Other dogs in parks</li>
                    <li>Friendly strangers</li>
                    <li>Sounds like trains, traffic, and doorbells</li>
                    <li>Different flooring like tile, grass, and wood</li>
                  </ul>
                  <p>
                    The goal is calm confidence. Socialization builds a balanced
                    personality that fits well with urban Japanese living.
                  </p>
                </section>

                <section className="mb-4">
                  <h4>Handling stubborn moments</h4>
                  <p>
                    Shibas often “freeze” during walks, pull in random
                    directions, or sit down like a tiny drama king. Instead of
                    dragging them, try:
                  </p>
                  <ul>
                    <li>Redirecting with a treat</li>
                    <li>Changing your walking route</li>
                    <li>Turning training into a short game</li>
                    <li>Using gentle harnesses instead of collars</li>
                  </ul>
                  <p>
                    This gentle guidance teaches them cooperation without stress.
                  </p>
                </section>

                <section className="mb-4">
                  <h4>Indoor enrichment ideas</h4>
                  <p>
                    Shibas need mental stimulation. Even 20 minutes of
                    problem-solving can tire them more than a 1-hour walk. Try:
                  </p>
                  <ul>
                    <li>Puzzle feeders</li>
                    <li>Hide-and-seek treats</li>
                    <li>Short obedience sessions</li>
                    <li>Interactive toys</li>
                  </ul>
                  <p>
                    For more ideas, visit our{" "}
                    <Link to="/indoor-enrichment-ideas">
                      indoor enrichment ideas
                    </Link>{" "}
                    article.
                  </p>
                </section>

                <section className="mb-4">
                  <h4>Useful cross-links for Shiba owners</h4>
                  <p>
                    • Looking for good apartment-friendly breeds? Read our guide on{" "}
                    <Link to="/best-dog">best dog breeds</Link>.  
                    <br />
                    • Want to compare with cats? Visit{" "}
                    <Link to="/japanese-cats">Japanese cats</Link>.  
                    <br />
                    • Grooming + food care? Check our{" "}
                    <Link to="/dog-care-tips">dog care tips</Link>.
                  </p>
                </section>

                <footer className="mt-4">
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

export default TrainShiba;
