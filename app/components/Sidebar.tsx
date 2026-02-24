// /app/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
};

const NAV: NavItem[] = [
  { title: "Getting started", href: "/" },
  {
    title: "Fundamental concepts",
    href: "/fundamental-concepts-linear-algebra",
    children: [
      { title: "Row reductions & echelon forms", href: "/fundamental-concepts-linear-algebra/row-reductions-and-echelon-forms" },
      { title: "Vector equations", href: "/fundamental-concepts-linear-algebra/vector-equations" },
      { title: "Matrix equation Ax = b", href: "/fundamental-concepts-linear-algebra/matrix-equation-axb" },
      { title: "Linear independence", href: "/fundamental-concepts-linear-algebra/linear-independence" },
    ],
  },
  {
    title: "Matrices & determinants",
    href: "/matrices-and-determinants",
  },
  {
    title: "Vector spaces & eigenvalues",
    href: "/vector-spaces-eigenvalues-eigenvectors",
  },
  {
    title: "Orthogonality & least squares",
    href: "/orthogonality-least-squares-symmetric-matrices",
  },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname() ?? "/";
  const navId = useId();

  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Close the menu when navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Basic focus management for mobile:
  // - When opening, focus first link.
  // - When closing, return focus to toggle.
  useEffect(() => {
    if (open) {
      window.setTimeout(() => firstLinkRef.current?.focus(), 0);
    } else {
      window.setTimeout(() => toggleRef.current?.focus(), 0);
    }
  }, [open]);

  const renderNav = (items: NavItem[], level = 0) => {
    return (
      <ul className="sidebar__list" aria-label={level === 0 ? "Chapters" : undefined}>
        {items.map((item, idx) => {
          const active = isActivePath(pathname, item.href);

          // Focus the first top-level link when opening mobile nav.
          const maybeRef =
            level === 0 && idx === 0 ? firstLinkRef : undefined;

          return (
            <li key={item.href} className="sidebar__item">
              <Link
                href={item.href}
                className="sidebar__link"
                aria-current={active ? "page" : undefined}
                // Next.js Link forwards refs to the underlying <a>.
                ref={maybeRef}
              >
                {item.title}
              </Link>

              {item.children ? (
                <div className="sidebar__sub">{renderNav(item.children, level + 1)}</div>
              ) : null}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <header className="topbar">
        <div className="topbar__inner">
          <Link href="/" className="brand" aria-label="Learn Linear Algebra home">
            Learn Linear Algebra
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="topbar__menuButton"
            aria-controls={navId}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">
              {open ? "Close navigation" : "Open navigation"}
            </span>
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </header>

      <aside className="sidebar" data-open={open ? "true" : "false"}>
        <nav id={navId} className="sidebar__nav" aria-label="Site navigation">
          {renderNav(NAV)}
        </nav>
      </aside>

      {/* Overlay is a button so it can be activated by keyboard as well. */}
      <button
        type="button"
        className="sidebar-overlay"
        data-open={open ? "true" : "false"}
        aria-label="Close navigation"
        onClick={() => setOpen(false)}
      />
    </>
  );
}
