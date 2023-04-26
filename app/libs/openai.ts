import { Configuration, OpenAIApi } from "openai";

// There was a bug without this
// For more info https://github.com/openai/openai-node/issues/75
class CustomFormData extends FormData {
  getHeaders() {
      return {}
  }
}

export const createOpenAIApi = () =>  {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    formDataCtor: CustomFormData,
  });
  const openai = new OpenAIApi(configuration);
  return openai;
}
