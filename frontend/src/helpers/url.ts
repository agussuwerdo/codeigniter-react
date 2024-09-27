// src/helpers/url.ts

export const getApiUrl = (): string => {
  const selfHostAPI = `${window.location.origin}/api`;
  const envAPI = import.meta.env.VITE_API_URL || selfHostAPI;

  // Check if the URL ends with a slash and add one if it doesn't
  return envAPI.endsWith('/') ? envAPI : `${envAPI}/`;
};
