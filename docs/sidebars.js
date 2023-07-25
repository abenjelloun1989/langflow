module.exports = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "index",
        "getting-started/installation",
        "getting-started/hugging-face-spaces",
        "getting-started/creating-flows",
      ],
    },
    {
      type: "category",
      label: "Guidelines",
      collapsed: false,
      items: [
        "guidelines/components",
        "guidelines/features",
        "guidelines/collection",
        "guidelines/prompt-customization",
        "guidelines/chat-interface",
      ],
    },
    {
      type: "category",
      label: "Component Reference",
      collapsed: false,
      items: [
        "components/agents",
        "components/chains",
        "components/embeddings",
        "components/llms",
        "components/loaders",
        "components/memories",
        "components/prompts",
        "components/retrievers",
        "components/text-splitters",
        "components/toolkits",
        "components/tools",
        "components/vector-stores",
        "components/wrappers",
      ],
    },
    {
      type: "category",
      label: "Step-by-Step Guides",
      collapsed: false,
      items: ["guides/loading_document", "guides/chatprompttemplate_guide"],
    },
    // {
    //   type: 'category',
    //   label: 'Components',
    //   collapsed: false,
    //   items: [
    //     'components/agents', 'components/chains', 'components/loaders', 'components/embeddings', 'components/llms',
    //     'components/memories', 'components/prompts','components/text-splitters', 'components/toolkits', 'components/tools',
    //     'components/utilities', 'components/vector-stores', 'components/wrappers',
    //   ],
    // },
    {
      type: "category",
      label: "Examples",
      collapsed: false,
      items: [
        "examples/conversation-chain",
        "examples/buffer-memory",
        "examples/midjourney-prompt-chain",
        "examples/csv-loader",
        "examples/serp-api-tool",
        "examples/multiple-vectorstores",
        "examples/python-function",
        "examples/how-upload-examples",
      ],
    },
    {
      type: "category",
      label: "Deployment",
      collapsed: false,
      items: ["deployment/gcp-deployment", "deployment/jina-deployment"],
    },
    {
      type: "category",
      label: "Contributing",
      collapsed: false,
      items: [
        "contributing/how-contribute",
        "contributing/github-issues",
        "contributing/community",
      ],
    },
  ],
};