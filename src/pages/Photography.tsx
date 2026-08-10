import { useState } from "react";

import Lightbox from "../components/ui/Lightbox";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import PhotoCard from "../components/ui/PhotoCard";

import { gallery, type Photo } from "../data/gallery";

const categories = [
  "All",
  "Street",
  "Travel",
  "Portrait",
  "Landscape",
];

function Photography() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? gallery
      : gallery.filter(
          (photo) => photo.category === activeCategory
        );

  return (
    <Section>
      <SectionTitle
        eyebrow="Photography"
        title="Through my lens."
        description="A collection of moments, places, and stories I've captured."
      />

      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => {
          const active = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active
                  ? "bg-white text-black"
                  : "border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>

      {selectedPhoto && (
        <Lightbox
          image={selectedPhoto.image}
          title={selectedPhoto.title}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </Section>
  );
}

export default Photography;