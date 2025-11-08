import React, { useEffect } from "react";
import "../../assets/style.css";
import blog4 from "../../assets/images/blog4.jpg";

const DogCare = () => {

    // Scroll to top on page visit
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-container">

            {/* Top Image */}
            <img
                src={blog4}
                alt="Dog in summer Japan"
                className="blog-img"
            />

            <div className="blog-content">
                <h1 className="blog-title">Dog Care Tips for Humid Japanese Summers</h1>

                <p className="blog-para">
                    Japanese summers can feel like walking through warm soup. The humidity sticks to your skin,
                    the air feels heavier than a futon, and even stepping outside for five minutes can make your
                    shirt cling to you. For dogs, this season is even tougher. Unlike humans, dogs can’t sweat the
                    way we do, and their thick coats turn summer into a hot battle against overheating.  
                    If you’re raising a dog in Japan, especially in cities like Tokyo, Osaka, or Fukuoka, learning
                    how to help them survive humid months is almost as important as choosing the right food.
                </p>

                <p className="blog-para">
                    Below are practical, Japan-focused tips to help keep your dog safe, cool, and happy from June
                    through early September. For new pet owners, take a look at our helpful guide on{" "}
                    <a href="/dog-care-tips" className="blog-link">Dog Care Tips</a> and our article on{" "}
                    <a href="/indoor-enrichment-ideas" className="blog-link">
                        Indoor Enrichment Ideas
                    </a>{" "}
                    for extra support.
                </p>

                {/* Section 1 */}
                <h2 className="blog-section-title">1. Avoid Daytime Walks (Go Early or Late)</h2>
                <p className="blog-para">
                    Pavements in Japan heat up fast. By noon, the asphalt can reach temperatures high enough to
                    burn your dog’s paws. A simple trick is the “hand test”: place your hand on the pavement for
                    5 seconds. If it’s too hot for your hand, it’s too hot for your dog.  
                    Try walking before 8 AM or after 7 PM, when the ground cools and the air softens.
                </p>

                {/* Section 2 */}
                <h2 className="blog-section-title">2. Hydration Is a Daily Mission</h2>
                <p className="blog-para">
                    Dogs can get dehydrated very quickly. Keep fresh water everywhere: near the bed, in the
                    living room, next to the genkan area, and even in your walking bag.  
                    Japan’s pet shops stock handy portable water bottles designed for dogs, perfect for
                    summer outings.
                </p>

                {/* Section 3 */}
                <h2 className="blog-section-title">3. Use Cooling Mats, Vests, and Fans</h2>
                <p className="blog-para">
                    Japanese homes don’t always have great ventilation, especially in older apartments.
                    Cooling mats (ひんやりマット), cooling vests, and small pet fans can prevent overheating.
                    Brands like Iris Ohyama and Nitori offer affordable cooling goods that work surprisingly
                    well.
                </p>

                {/* Section 4 */}
                <h2 className="blog-section-title">4. Keep AC Running During the Day</h2>
                <p className="blog-para">
                    Many owners hesitate to leave the AC on while they’re away, but veterinarians in Japan
                    strongly recommend it. Indoor temperatures can rise dangerously fast.  
                    Set your air conditioner between **25 to 27°C**. Even a simple fan circulation helps a lot.
                </p>

                {/* Section 5 */}
                <h2 className="blog-section-title">5. Watch Out for Heatstroke Signs</h2>
                <p className="blog-para">
                    Heatstroke is one of the most common emergency cases for dogs during Japanese summers.
                    Immediate signs include:
                </p>

                <ul className="blog-list">
                    <li>Excessive panting</li>
                    <li>Drooling more than usual</li>
                    <li>Tiredness or wobbling</li>
                    <li>Red or pale gums</li>
                    <li>Vomiting</li>
                </ul>

                <p className="blog-para">
                    If this happens, move your dog to a cool space and give small amounts of water.
                    Head to the nearest vet immediately.
                </p>

                {/* Section 6 */}
                <h2 className="blog-section-title">6. Grooming Helps, But Don’t Shave Too Much</h2>
                <p className="blog-para">
                    Trimming helps reduce heat, but shaving a dog’s coat too short can cause sunburn.
                    In Japan, many groomers offer “summer cuts” that balance cooling and skin protection.
                </p>

                {/* Section 7 */}
                <h2 className="blog-section-title">7. Indoor Exercise Is Your Summer Friend</h2>
                <p className="blog-para">
                    On the worst days of August, even nighttime walks feel sticky and uncomfortable.
                    Replace outdoor activity with indoor play sessions.  
                    For ideas, check out our related guide:
                    <a href="/indoor-enrichment-ideas" className="blog-link">
                        Indoor Enrichment Ideas for Small Japanese Apartments
                    </a>.
                </p>

                {/* Section 8 */}
                <h2 className="blog-section-title">8. Try Summer-Friendly Treats</h2>
                <p className="blog-para">
                    Frozen dog treats are popular in Japan, and easy to make at home. Mix dog-safe yogurt,
                    fruit like watermelon or blueberries, and freeze in silicone molds.  
                    Stores like AEON Pet, Kojima, and Cainz also offer cooling snacks.
                </p>

                {/* Section 9 */}
                <h2 className="blog-section-title">9. Avoid Crowded Summer Festivals</h2>
                <p className="blog-para">
                    Matsuri events are exciting, but crowds, noise, hot food stalls, and fireworks can be
                    stressful and dangerous for dogs. Keep them home on festival nights for safety.
                </p>

                {/* Section 10 */}
                <h2 className="blog-section-title">10. Know Japan’s Pet-Friendly Emergency Numbers</h2>
                <p className="blog-para">
                    Save the nearest 24-hour vet clinic details in your phone.  
                    In cities like Tokyo and Osaka, night emergency pet hospitals are common, but summer
                    rush makes them busy.
                </p>

                <p className="blog-para">
                    With the right care, your dog can enjoy Japanese summers safely.  
                    Explore more pet-life tips on our blog such as{" "}
                    <a href="/best-dog" className="blog-link">Best Dog Breeds for Japanese Apartments</a>{" "}
                    or{" "}
                    <a href="/how-to-train-shiba" className="blog-link">How to Train a Shiba Inu</a>.
                </p>

            </div>
        </div>
    );
};

export default DogCare;
