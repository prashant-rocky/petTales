import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Disclaimer from "./pages/disclaimer";
import BestDog from "./pages/BestDog";
import JapaneseCats from "./pages/JapaneseCats";
import IndoorEnrichment from "./pages/IndoorEnrichment";
import DogCare from "./pages/DogCare";
import TrainShiba from "./pages/TrainShiba";
import CatLitter from "./pages/CatLitter";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms&conditions" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/best-dog" element={<BestDog />} />
            <Route path="/japanese-cats" element={<JapaneseCats />} />
            <Route path="/how-to-train-shiba" element={<TrainShiba />} />
            <Route path="/best-cat-litter" element={<CatLitter />} />
            <Route path="/dog-care-tips" element={<DogCare />} />
            <Route path="/indoor-enrichment-ideas" element={<IndoorEnrichment />} />
        </Routes>
    )
}
export default AppRoutes;