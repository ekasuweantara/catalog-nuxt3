import { useSpinner } from '~/stores/spinner';
import { useToast } from '~/stores/toast';

export const useCustomFetch = (url: string, options?: FetchOptions) => {
  const config = useRuntimeConfig();
  const spinner = useSpinner()
  const toast = useToast()

  return useFetch(`${config.public.apiBase}${url}`, {
    headers: {
      'X-RapidAPI-Key' : 'fecd2b4d4cmsh0c44b4c1a8ce2acp10b7dfjsn4d0a378832ac',
      'X-RapidAPI-Host' : 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    },
    ...options,
    async onResponse({ request, response, options }) {
      spinner.set(false)
    },
    async onResponseError({ request, response, options }) {
      spinner.set(false)
      toast.set({
        isShow: true,
        type: 'error',
        msg: 'Internal service error'
      })
    },

    async onRequest({ request, options }) {
      spinner.set(true)
    },
    async onRequestError({ request, options, error }) {
      spinner.set(false)
    },
  });
};
