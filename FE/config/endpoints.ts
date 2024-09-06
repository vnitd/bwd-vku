const prefixBase: string = "/api/v1";

const endpointAuth = {
  REGISTER: `${prefixBase}/users/register`,
  LOGIN: `${prefixBase}/users/login`,
};
const endpointGemini = {
  POST: `${prefixBase}/gemini`,
};

export const endpoints = { endpointAuth, endpointGemini };
