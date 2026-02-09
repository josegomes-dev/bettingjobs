import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-8 mt-12">
      <div className="container text-center text-sm text-muted-foreground">
        <p className="mb-4">
          © {new Date().getFullYear()} BettingJobs.nl — Dutch iGaming Talent Platform
        </p>

        <nav className="flex justify-center gap-6 text-sm">
          <Link to="/about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link to="/employers" className="hover:text-accent transition-colors">
            Employers
          </Link>
          <Link to="/candidates" className="hover:text-accent transition-colors">
            Candidates
          </Link>
          <Link to="/privacy" className="hover:text-accent transition-colors">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
