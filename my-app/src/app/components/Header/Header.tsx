import Link from "next/link";

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header__title">
        <Link href="/">Find Phone</Link>
      </h1>
      <div className="header__links">
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
