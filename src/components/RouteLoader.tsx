"use client";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

// Configure NProgress
NProgress.configure({
  showSpinner: true,
  speed: 500,
  minimum: 0.1,
  easing: "ease",
  positionUsing: "",
  barSelector: '[role="bar"]',
  spinnerSelector: '[role="spinner"]',
  parent: "body",
  template:
    '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
});

export default function RouteLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams]);

  return null;
}
