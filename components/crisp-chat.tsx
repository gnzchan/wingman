"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6a34e963-faf1-4f0d-b934-ac54c26f9b66");
  }, []);

  return null;
};

export default CrispChat;
