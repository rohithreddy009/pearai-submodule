import { SerializedContinueConfig } from "../index.js";

export function setupOptimizedMode(
  config: SerializedContinueConfig,
): SerializedContinueConfig {
  return {
    ...config,
    models: [
    ],
    tabAutocompleteModel: {
      title: "Tab Autocomplete",
      provider: "free-trial",
      model: "starcoder-7b",
    },
    embeddingsProvider: {
      provider: "free-trial",
    },
    reranker: {
      name: "free-trial",
    },
  };
}

export function setupOptimizedExistingUserMode(
  config: SerializedContinueConfig,
): SerializedContinueConfig {
  return {
    ...config,
    tabAutocompleteModel: {
      title: "Tab Autocomplete",
      provider: "free-trial",
      model: "starcoder-7b",
    },
    embeddingsProvider: {
      provider: "free-trial",
    },
    reranker: {
      name: "free-trial",
    },
  };
}

export function setupLocalMode(
  config: SerializedContinueConfig,
): SerializedContinueConfig {
  return {
    ...config,
    models: [
      {
        title: "Llama 3",
        provider: "ollama",
        model: "llama3",
      },
      {
        title: "Ollama",
        provider: "ollama",
        model: "AUTODETECT",
      },
      ...config.models.filter((model) => model.provider !== "free-trial"),
    ],
    tabAutocompleteModel: {
      title: "Starcoder 3b",
      provider: "ollama",
      model: "starcoder2:3b",
    },
    embeddingsProvider: {
      provider: "transformers.js",
    },
    reranker: undefined,
  };
}

export function setupLocalAfterFreeTrial(
  config: SerializedContinueConfig,
): SerializedContinueConfig {
  return {
    ...config,
    models: [
      {
        title: "Llama 3",
        provider: "ollama",
        model: "llama3",
      },
      {
        title: "Ollama",
        provider: "ollama",
        model: "AUTODETECT",
      },
      ...config.models.filter((model) => model.provider !== "free-trial"),
    ],
  };
}
