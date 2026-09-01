import React, { Suspense } from "react";
import Header from "@/src/sections/blog/Header";
import Header2 from "@/src/sections/blog/Header2";
import Header3 from "@/src/sections/blog/Header3";
import Blog from "@/src/sections/blog/Blog";
import Cta from "@/src/sections/blog/Cta";
import Footer from "@/src/sections/blog/Footer";
import Footer2 from "@/src/sections/blog/Footer2";
import Footer3 from "@/src/sections/blog/Footer3";

/** The "/blog" page, composed from its Framer sections.
 *
 *  Rendered to static HTML by scripts/prerender.mts at build time — never
 *  shipped as a page.tsx, which would duplicate every byte of this markup into
 *  the RSC flight payload on top of the HTML itself. */
export default function BlogPage() {
  return (
    <body>
      {"\n\t\n\t"}
      <span data-fnj-slot={"0"} />
      {"\n    \n    "}
      <span data-fnj-slot={"1"} />
      {"\n\t\n\t"}
      <div id="main" data-framer-hydrate-v2={"{\"routeId\":\"nyHNNL0AU\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"zzhtak\",\"mediaQuery\":\"(min-width: 1920px)\"},{\"hash\":\"1v9irig\",\"mediaQuery\":\"(min-width: 1200px) and (max-width: 1919.98px)\"},{\"hash\":\"1mqtmf0\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1199.98px)\"},{\"hash\":\"1lifd7w\",\"mediaQuery\":\"(max-width: 809.98px)\"},{\"hash\":\"22qbl\",\"mediaQuery\":\"(min-width: 1920px)\"},{\"hash\":\"1frv160\",\"mediaQuery\":\"(min-width: 1200px) and (max-width: 1919.98px)\"},{\"hash\":\"83oeot\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1199.98px)\"},{\"hash\":\"1wyxcdt\",\"mediaQuery\":\"(max-width: 809.98px)\"}]}"} data-framer-ssr-released-at="2026-08-06T12:57:44.116Z" data-framer-page-optimized-at="2026-08-07T04:38:26.636Z" data-framer-generated-page="">
        <Suspense fallback={null}>
          <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: ":root body { background: var(--token-73480c38-b788-4085-b0f7-ee51c9ad13d5, rgb(243, 246, 233)); }" }} />
          <div className="framer-Q2Ors framer-QrPZX framer-mkgQP framer-4RXUR framer-SQy1v framer-xo5li framer-xbNaX framer-22qbl" data-layout-template="true" style={{ "--hgcs32": "hidden", minHeight: "100vh", width: "auto" }}>
            <div className="ssr-variant hidden-83oeot hidden-1wyxcdt">
              <Header />
            </div>
            <div className="ssr-variant hidden-22qbl hidden-1wyxcdt hidden-1frv160">
              <Header2 />
            </div>
            <div className="ssr-variant hidden-22qbl hidden-83oeot hidden-1frv160">
              <Header3 />
            </div>
            <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: "html body { background: var(--token-73480c38-b788-4085-b0f7-ee51c9ad13d5, rgb(243, 246, 233)); }" }} />
            <div data-framer-root="" className="framer-IVEXR framer-kRbhw framer-mkgQP framer-zzhtak" style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
              <div className="framer-1acbzpf-container">
                <Suspense fallback={null}>
                  <div className="ssr-variant">
                    <div />
                  </div>
                </Suspense>
              </div>
              <Blog />
            </div>
            <div id="overlay" />
            <div className="framer-1bgls3j" />
            <Cta />
            <div className="ssr-variant hidden-83oeot hidden-1wyxcdt">
              <Footer />
            </div>
            <div className="ssr-variant hidden-22qbl hidden-1wyxcdt hidden-1frv160">
              <Footer2 />
            </div>
            <div className="ssr-variant hidden-22qbl hidden-83oeot hidden-1frv160">
              <Footer3 />
            </div>
          </div>
          <div id="template-overlay" />
        </Suspense>
      </div>
      <span data-fnj-slot={"2"} />
      {"\n\t"}
      <span data-fnj-slot={"3"} />
      {"\n\t\n\t\n\t"}
      <span data-fnj-slot={"4"} />
      <span data-fnj-slot={"5"} />
      {"\n\t"}
      <span data-fnj-slot={"6"} />
      {"\n\t"}
      <span data-fnj-slot={"7"} />
      <span data-fnj-slot={"8"} />
      <span data-fnj-slot={"9"} />
      <span data-fnj-slot={"10"} />
      <span data-fnj-slot={"11"} />
      <span data-fnj-slot={"12"} />
      <span data-fnj-slot={"13"} />
      <span data-fnj-slot={"14"} />
      <span data-fnj-slot={"15"} />
      <span data-fnj-slot={"16"} />
      <span data-fnj-slot={"17"} />
      <span data-fnj-slot={"18"} />
      <span data-fnj-slot={"19"} />
      <span data-fnj-slot={"20"} />
      <span data-fnj-slot={"21"} />
      <span data-fnj-slot={"22"} />
      <span data-fnj-slot={"23"} />
      <span data-fnj-slot={"24"} />
      <span data-fnj-slot={"25"} />
      <span data-fnj-slot={"26"} />
      <span data-fnj-slot={"27"} />
      <div id="svg-templates" style={{ position: "absolute", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", zIndex: "0", contain: "strict" }} aria-hidden="true">
        {"\n"}
      </div>
      {"\n\t"}
      <span data-fnj-slot={"28"} />
      {"\n    \n    "}
      <span data-fnj-slot={"29"} />
      {"\n\n\n"}
    </body>
  );
}
