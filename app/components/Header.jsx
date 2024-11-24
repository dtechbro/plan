export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#home" className="hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a href="#story" className="hover:text-gray-600">
              Story
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-gray-600">
              Gallery
            </a>
          </li>
          <li>
            <a href="#details" className="hover:text-gray-600">
              Details
            </a>
          </li>
          <li>
            <a href="#rsvp" className="hover:text-gray-600">
              RSVP
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
