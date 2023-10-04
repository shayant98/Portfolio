"use client";

import { ReactHTMLElement, ReactNode } from "react";
import { MediaContextProvider } from "../../utils/media";

type ProviderProps = {
  children: ReactNode;
};
const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <MediaContextProvider>{children}</MediaContextProvider>
    </>
  );
};

export default Providers;
