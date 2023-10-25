import { useEffect } from "react";

function BountyRedirect() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/document/d/1JGsKasikEpPMVqaaXiXib4ODm6vAYOA-C-uD6TRNspU"
    );
  }, []);

  return null; // Or some loading indicator if you prefer
}

export default BountyRedirect;
