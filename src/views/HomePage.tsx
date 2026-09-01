import React, { Suspense } from "react";
import Header from "@/src/sections/home/Header";
import Header2 from "@/src/sections/home/Header2";
import Header3 from "@/src/sections/home/Header3";
import HeroSection from "@/src/sections/home/HeroSection";
import Features from "@/src/sections/home/Features";
import Products from "@/src/sections/home/Products";
import Card from "@/src/sections/home/Card";
import Cta from "@/src/sections/home/Cta";
import Card2 from "@/src/sections/home/Card2";
import Testimonial from "@/src/sections/home/Testimonial";
import Gallery from "@/src/sections/home/Gallery";
import Blog from "@/src/sections/home/Blog";
import Cta2 from "@/src/sections/home/Cta2";
import Footer from "@/src/sections/home/Footer";
import Footer2 from "@/src/sections/home/Footer2";
import Footer3 from "@/src/sections/home/Footer3";

/** The "/" page, composed from its Framer sections.
 *
 *  Rendered to static HTML by scripts/prerender.mts at build time — never
 *  shipped as a page.tsx, which would duplicate every byte of this markup into
 *  the RSC flight payload on top of the HTML itself. */
export default function HomePage() {
  return (
    <body>
      {"\n\t\n\t"}
      <span data-fnj-slot={"0"} />
      {"\n    \n    "}
      <span data-fnj-slot={"1"} />
      {"\n\t\n\t"}
      <div id="main" data-framer-hydrate-v2={"{\"routeId\":\"augiA20Il\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"72rtr7\",\"mediaQuery\":\"(min-width: 1920px)\"},{\"hash\":\"156ojy1\",\"mediaQuery\":\"(min-width: 1200px) and (max-width: 1919.98px)\"},{\"hash\":\"1quloyq\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1199.98px)\"},{\"hash\":\"x9n1l9\",\"mediaQuery\":\"(max-width: 809.98px)\"},{\"hash\":\"22qbl\",\"mediaQuery\":\"(min-width: 1920px)\"},{\"hash\":\"1frv160\",\"mediaQuery\":\"(min-width: 1200px) and (max-width: 1919.98px)\"},{\"hash\":\"83oeot\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1199.98px)\"},{\"hash\":\"1wyxcdt\",\"mediaQuery\":\"(max-width: 809.98px)\"}]}"} data-framer-ssr-released-at="2026-08-06T12:57:44.116Z" data-framer-page-optimized-at="2026-08-07T04:38:26.835Z" data-framer-generated-page="">
        <Suspense fallback={null}>
          <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: ":root body { background: var(--token-73480c38-b788-4085-b0f7-ee51c9ad13d5, rgb(243, 246, 233)); }" }} />
          <div className="framer-Q2Ors framer-QrPZX framer-mkgQP framer-4RXUR framer-SQy1v framer-xo5li framer-xbNaX framer-22qbl" data-layout-template="true" style={{ "--hgcs32": "visible", minHeight: "100vh", width: "auto" }}>
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
            <div data-framer-root="" className="framer-b4gmt framer-kRbhw framer-j4K01 framer-QrPZX framer-mkgQP framer-6V03H framer-72rtr7" style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
              <div className="framer-139km8e-container">
                <Suspense fallback={null}>
                  <div className="ssr-variant">
                    <div />
                  </div>
                </Suspense>
              </div>
              <HeroSection />
              <Features />
              <Products />
              <Card />
              <Cta />
              <Card2 />
              <Testimonial />
              <Gallery />
              <Blog />
            </div>
            <div id="overlay" />
            <div className="framer-1bgls3j" />
            <div className="framer-3fa16p-container hidden-1wyxcdt" data-framer-name="buy now" name="buy now" style={{ willChange: "transform", opacity: "1", transform: "none" }}>
              <Suspense fallback={null}>
                <a name="buy now" className="framer-yfik4 framer-1gpzlyz framer-v-1gpzlyz framer-5axmvi" data-framer-name="buy now" href="https://designtocodes.com/?d2c_buy=MzAzNDMuMzcwNTk4ZDY0MmRmNTRkMjY5ZWE" target="_blank" style={{ backgroundColor: "var(--token-90c2ab70-b23e-4699-8f03-f6a41fb5be8e, rgb(67, 86, 80))", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" }}>
                  <div className="framer-40vnjl" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-73480c38-b788-4085-b0f7-ee51c9ad13d5, rgb(243, 246, 233))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                    <p dir="auto" className="framer-text" style={{ "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-size": "13px", "--framer-font-weight": "500", "--framer-line-height": "1em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-73480c38-b788-4085-b0f7-ee51c9ad13d5, rgb(243, 246, 233)))", "--framer-text-transform": "capitalize" }}>
                      {"Buy this template"}
                    </p>
                  </div>
                </a>
              </Suspense>
            </div>
            <Cta2 />
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
      {"\n                "}
      <span data-fnj-slot={"5"} />
      {"\n                "}
      <span data-fnj-slot={"6"} />
      <span data-fnj-slot={"7"} />
      <span data-fnj-slot={"8"} />
      {"\n\t"}
      <span data-fnj-slot={"9"} />
      {"\n\t"}
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
      <span data-fnj-slot={"28"} />
      <span data-fnj-slot={"29"} />
      <span data-fnj-slot={"30"} />
      <span data-fnj-slot={"31"} />
      <span data-fnj-slot={"32"} />
      <span data-fnj-slot={"33"} />
      <span data-fnj-slot={"34"} />
      <span data-fnj-slot={"35"} />
      <span data-fnj-slot={"36"} />
      <div id="svg-templates" style={{ position: "absolute", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", zIndex: "0", contain: "strict" }} aria-hidden="true">
        {"\n"}
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" id="svg-2134184453_739">
          {"\n"}
          <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" fill="#EFCC6C" />
          {"\n"}
          <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="#F3F6E9" />
          {"\n"}
          <path d="M28.4878 41.856C28.1678 41.856 28.0078 41.664 28.0078 41.28V31.968H18.6958C18.3758 31.968 18.2158 31.776 18.2158 31.392V28.608C18.2158 28.224 18.3758 28.032 18.6958 28.032H28.0078V18.72C28.0078 18.336 28.1678 18.144 28.4878 18.144H31.4638C31.8158 18.144 31.9918 18.336 31.9918 18.72V28.032H41.2558C41.6078 28.032 41.7838 28.224 41.7838 28.608V31.392C41.7838 31.776 41.6078 31.968 41.2558 31.968H31.9918V41.28C31.9918 41.664 31.8158 41.856 31.4638 41.856H28.4878Z" fill="#0A412F" />
          {"\n"}
        </svg>
        {"\n"}
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" id="svg-628847335_781">
          {"\n"}
          <path d="M6.86148 0.421875C6.73726 0.164062 6.47476 0 6.18648 0C5.8982 0 5.63804 0.164062 5.51148 0.421875L4.00445 3.52266L0.638823 4.01953C0.357573 4.06172 0.123198 4.25859 0.0364792 4.52812C-0.0502396 4.79766 0.0200729 5.09531 0.221635 5.29453L2.66382 7.71094L2.08726 11.1258C2.04039 11.407 2.15757 11.693 2.3896 11.8594C2.62164 12.0258 2.92867 12.0469 3.18179 11.9133L6.18882 10.3078L9.19585 11.9133C9.44898 12.0469 9.75601 12.0281 9.98804 11.8594C10.2201 11.6906 10.3373 11.407 10.2904 11.1258L9.71148 7.71094L12.1537 5.29453C12.3552 5.09531 12.4279 4.79766 12.3388 4.52812C12.2498 4.25859 12.0177 4.06172 11.7365 4.01953L8.36851 3.52266L6.86148 0.421875Z" fill="#0A412F" />
          {"\n"}
        </svg>
        {"\n"}
      </div>
      {"\n\t"}
      <span data-fnj-slot={"37"} />
      {"\n    \n    "}
      <span data-fnj-slot={"38"} />
      {"\n\n\n"}
    </body>
  );
}
