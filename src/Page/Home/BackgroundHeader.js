import React from "react";

export default function BackgroundHeader({ children, backgroundHeader }) {
  return <header className={backgroundHeader}>{children}</header>;
}

BackgroundHeader.defaultProps = {
  backgroundHeader: "defaultBackground ",
};
