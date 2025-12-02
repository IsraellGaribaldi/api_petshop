/**
 * Configuração centralizada da API
 * Suporta múltiplos ambientes (dev, produção, etc)
 */

export const getApiUrl = (): string => {
  // Se houver variável de ambiente, usar
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  // Em produção, usar URL relativa (mesmo domínio)
  if (import.meta.env.PROD) {
    return "";
  }

  // Em desenvolvimento, usar localhost
  return "http://localhost:3333";
};

export const API_BASE_URL = getApiUrl();

// URLs dos endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${API_BASE_URL}/login`,

  FUNCIONARIO: `${API_BASE_URL}/funcionarios`,

  CLIENTE: `${API_BASE_URL}/clientes`,
  
  PET: `${API_BASE_URL}/pets`,
  
  ATENDIMENTO: `${API_BASE_URL}/atendimentos`,
  
};