import React from "react";

type Problem9Props = {
  header: React.ReactNode;
  footer: React.ReactNode;
  content: React.ReactNode;
};

export default function Problem9({ header, footer, content }: Problem9Props) {
  return (
    <>
      {header}
      {content}
      {footer}
    </>
  );
}
