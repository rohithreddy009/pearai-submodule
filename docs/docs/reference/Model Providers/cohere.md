# Cohere

To setup Cohere, add the following to your `config.json` file:

```json title="~/.pearai/config.json"
{
  "models": [
    {
      "title": "Cohere",
      "provider": "cohere",
      "model": "command-r-plus",
      "apiKey": "YOUR_API_KEY"
    }
  ]
}
```

Visit the [Cohere dashboard](https://dashboard.cohere.com/api-keys) to create an API key.

[View the source](https://github.com/trypear/pearai-app/blob/main/core/llm/llms/Cohere.ts)
