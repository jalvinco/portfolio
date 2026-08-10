import type { Photo } from "../../data/gallery";
import { motion } from "framer-motion";

type PhotoCardProps = {
  photo: Photo;
  onClick: () => void;
};

function PhotoCard({ photo, onClick }: PhotoCardProps) {
  return (
    <motion.button
    initial={{ opacity: 0, y: 20 }}

whileInView={{ opacity: 1, y: 0 }}

viewport={{ once: true }}

transition={{ duration: 0.4 }}
      type="button"
      onClick={onClick}
      className="group w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-left"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={photo.image}
          alt={photo.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold">
          {photo.title}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {photo.location}
        </p>
      </div>
    </motion.button>
  );
}

export default PhotoCard;