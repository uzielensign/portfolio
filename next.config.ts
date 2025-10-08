import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow cross-origin dev requests from local device on port 3010 only
  allowedDevOrigins: ["http://192.168.8.235:3010"],
};

export default nextConfig;
