import navStyles from "../styles/Nav.module.css";
import Link from "next/link";
const nav = () => {
  return (
    <>
      <div className={navStyles.navItems}>
        <div>
          <img src="logo.svg" />
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">Market</Link>
            </li>
            <li>
              <Link href="/">Feature</Link>
            </li>
            <li>
              <Link href="/">Comunity</Link>
            </li>
          </ul>
        </div>
        <div className={navStyles.search}>
          <form role="search" id="form">
            <button>
              <img className="filter" src="searchIcon.svg"></img>
            </button>
            <input
              type="search"
              id="query"
              name="q"
              placeholder="Search Marketplace"
              aria-label="Search through site content"
            />
          </form>
          <button>
            <img src="cart.svg"></img>
          </button>
          <button>
            <img src="user.svg"></img>
          </button>
        </div>
      </div>
    </>
  );
};
export default nav;
