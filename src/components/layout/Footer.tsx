function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
      © {new Date().getFullYear()} Jay Alvin. Built with React, TypeScript and Tailwind CSS.
    </footer>
  );
}

export default Footer;