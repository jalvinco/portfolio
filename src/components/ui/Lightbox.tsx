import { X } from "lucide-react";
import { motion } from "framer-motion";

type LightboxProps = {
  image: string;
  title: string;
  onClose: () => void;
};

function Lightbox({ image, title, onClose }: LightboxProps) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-6"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        aria-label="Close image"
      >
        <X size={24} />
      </button>

      <motion.img
        src={image}
        alt={title}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] max-w-full rounded-lg object-contain"
        />
    </motion.div>
  );
}

export default Lightbox;
