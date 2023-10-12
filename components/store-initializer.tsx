"use client";

import { useRef } from "react";

import { useStore } from "@/hooks/use-store";

const StoreInitializer = ({
  count,
  isPro,
}: {
  count: number;
  isPro: boolean;
}) => {
  const initialized = useRef(false);

  if (!initialized.current) {
    useStore.setState({ count, isPro });
    initialized.current = true;
  }

  return null;
};

export default StoreInitializer;
