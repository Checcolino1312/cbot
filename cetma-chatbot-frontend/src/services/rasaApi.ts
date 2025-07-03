import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// URL dinamico basato sull'ambiente
const getBaseUrl = () => {
  // In produzione (Docker), usa il nome del servizio
  // In sviluppo, usa localhost
  if (typeof window !== 'undefined') {
    // Siamo nel browser
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? 'http://localhost:8099/webhooks/rest/webhook'
      : `http://${window.location.hostname}:8099/webhooks/rest/webhook`;
  }
  // Fallback
  return 'http://localhost:8099/webhooks/rest/webhook';
};

export const rasaApi = createApi({
  reducerPath: 'rasaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation<
      { recipient_id: string; text: string }[], // risposta
      { sender: string; message: string }       // richiesta
    >({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSendMessageMutation } = rasaApi;