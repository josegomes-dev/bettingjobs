import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          BettingJobs<span className="text-accent">.nl</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/employers" className="hover:text-accent transition-colors">
            Employers
          </Link>
          <Link to="/candidates" className="hover:text-accent transition-colors">
            Candidates
          </Link>
          <Link to="/about" className="hover:text-accent transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
