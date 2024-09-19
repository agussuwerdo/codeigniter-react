// src/helpers/url.ts

export const getApiUrl = (): string => {
  const selfHostAPI = `${window.location.origin}/api`
  const envAPI = process.env.REACT_APP_API_URL || selfHostAPI;
  return `${envAPI}`;
};
