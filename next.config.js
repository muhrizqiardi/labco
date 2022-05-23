/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    MONGO_URL: "mongodb+srv://Rizqi:ULMwYFXWRdqYShIr@cluster0.zxjlc.mongodb.net/?retryWrites=true&w=majority"
  }
}