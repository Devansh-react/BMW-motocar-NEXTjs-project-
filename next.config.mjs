/** @type {import('next').NextConfig} */
import { domainToUnicode } from 'url';



const nextConfig = {
        images: {
          domains:['unsplash.com'], // Replace with your remote domain
        },
      };

export default nextConfig;
