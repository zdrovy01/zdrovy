import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Search — ZDROVY",
};

export default function SearchPage() {
  return (
    <>
      <Toolbar />
      <main>
        <section className="search-hero">
          <form className="search-box" role="search" action="#">
            <span className="search-box-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="10.5" cy="10.5" r="7.5" stroke="currentColor" strokeWidth="1.8" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="search"
              name="q"
              placeholder="Search"
              className="search-box-input"
              autoComplete="off"
            />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
