import ThemeToggle from "./ThemeToggle.jsx";
import { NAV_LINKS } from "../data/content.js";

export default function Nav({ theme, onToggleTheme }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-name">Limax Tech</div>
        <div className="nav-right">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
