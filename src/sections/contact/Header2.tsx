import React, { Suspense } from "react";

/** Generated from the Framer section "Header".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
export default function Header2() {
  return (
    <div className="framer-1ry63a1-container" data-framer-name="Header" name="Header">
      <nav name="Header" className="framer-3UgAF framer-4xoy2g framer-v-b8bg6i" data-framer-name="tab-contact" style={{ "--1wiqqql": "20px 40px 5px 40px", width: "100%" }}>
        <div className="framer-vg8yxy" data-framer-name="container" style={{ backgroundColor: "var(--token-7b82bf98-3eeb-42d4-90fc-c6c75460703b, rgb(10, 65, 47))", borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}>
          <div className="framer-h8vq0r" data-framer-name="div">
            <div className="framer-6pnpe8" data-framer-name="1st col">
              <Suspense fallback={null}>
                <a as="a" className="framer-1ln0j4m framer-1cff7ae" data-framer-name="logo" href="./">
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                    <img decoding="async" width="138" height="30" src="/assets/img/b24b71b62df2f79d.svg" alt="logo" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "left center", objectFit: "contain" }} loading="lazy" />
                  </div>
                </a>
              </Suspense>
            </div>
            <div className="framer-14qrc2" data-framer-name="div">
              <div className="framer-f9bjcr" data-framer-name="div" style={{ backgroundColor: "var(--token-62cf37fa-d551-488a-96c0-e112af6eff7d, rgb(239, 204, 108))", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}>
                <div className="framer-12e9tf6-container">
                  <Suspense fallback={null}>
                    <div style={{ display: "contents" }} />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
