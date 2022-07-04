import { useSpinner } from '~/stores/spinner';

export const useCustomFetch = (url: string, options?: FetchOptions) => {
  const config = useRuntimeConfig();
  const spinner = useSpinner()

  return useFetch(`${config.public.apiBase}${url}`, {
    headers: {
      'X-RapidAPI-Key' : '8453ad2fa0msh21875f1cfb62ef9p1d1a0bjsn7d58b800df3b',
      'X-RapidAPI-Host' : 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    },
    ...options,
    async onResponse({ request, response, options }) {
      spinner.set(false)
    },
    async onResponseError({ request, response, options }) {
      spinner.set(false)
    },

    async onRequest({ request, options }) {
      spinner.set(true)
    },
    async onRequestError({ request, options, error }) {
      spinner.set(false)
    },
  });
};
