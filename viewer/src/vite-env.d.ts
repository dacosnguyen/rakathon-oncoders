/// <reference types="vite/client" />

declare module "*.json" {
  const value: Record<string, string>
  export default value
}
