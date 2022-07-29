import * as React from "react";

const IndexPage = () => (
  <button onClick={() => window.gaOptout?.()}>
    Optout onClick=&#123;() => window.gaOptout()&#125;
  </button>
);

export default IndexPage;
