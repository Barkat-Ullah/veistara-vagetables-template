import React, { Suspense } from "react";

/** Generated from the Framer section "card".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
export default function Card() {
  return (
    <section className="framer-18oybv2" data-framer-name="card">
      <div className="framer-1fdprm2" data-framer-name="Container">
        <div className="framer-31qji3" data-framer-name="left">
          <div className="framer-1b4otd4" data-framer-name="Content" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <h3 dir="auto" className="framer-text framer-styles-preset-1tljf3f">
              {"From Our Orchard to Your Table"}
            </h3>
            <p dir="auto" className="framer-text framer-styles-preset-1nzly4j">
              {"Our organic apples are grown in carefully maintained orchards where soil health and biodiversity are prioritized. We use natural compost and sustainable irrigation techniques to ensure healthy trees and delicious fruit."}
            </p>
            <p dir="auto" className="framer-text framer-styles-preset-1nzly4j">
              {"Every harvest is carefully inspected to maintain quality before being delivered fresh to our customers."}
            </p>
          </div>
        </div>
        <div className="framer-hx1j5" data-framer-name="right">
          <div className="framer-2w4kzx" data-framer-name="Content" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <h3 dir="auto" className="framer-text framer-styles-preset-1tljf3f">
              {"Product Specifications"}
            </h3>
            <p dir="auto" className="framer-text framer-styles-preset-1nzly4j">
              {"Category: Vegetables"}
              <br className="framer-text" />
              {"Farming Type: Organic Certified"}
              <br className="framer-text" />
              {"Origin Farm: Sunrise Orchard"}
              <br className="framer-text" />
              {"Harvest Season: Autumn"}
              <br className="framer-text" />
              {"Storage Recommendation: Refrigerate for freshness"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
