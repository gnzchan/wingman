"use client";

import { useRef } from "react";

import { useApiLimitCount } from "@/hooks/use-api-limit-count";

const StoreInitializer = ({ count }: { count: number }) => {
  const initialized = useRef(false);

  if (!initialized.current) {
    useApiLimitCount.setState({ count });
    initialized.current = true;
  }

  return null;
};

export default StoreInitializer;
