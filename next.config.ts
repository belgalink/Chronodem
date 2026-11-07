import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/", destination: "/nl", permanent: false },
      { source: "/offerte", destination: "/nl/offerte", permanent: false },
      { source: "/devis", destination: "/fr/devis", permanent: false },
    ];
  },
};

export default nextConfig;
