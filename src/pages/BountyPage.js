import { useEffect } from "react";

function BountyRedirect() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/document/d/1caYSOgZ1FjRQnL8xCXNIB1kHCB28aldCT_s8529xokI"
    );
  }, []);

  return null; 
}

export default BountyRedirect;
