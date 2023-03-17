import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "b774f2c1-4ef4-49b4-a532-771e076cc3ae", // Get this from tina.io
  token: "6c4bbe8434a215c4aa84bccedd0ac30dbf075b84", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
      {
        name: "webLinks",
        label: "WebLinks",
        path: "content/webLinks",
        fields: [
          {
            type: "string",
            name: "instagram",
            label: "Instagram",
          },
          {
            type: "string",
            name: "facebook",
            label: "Facebook",
          },
          {
            type: "string",
            name: "youtube",
            label: "YouTube",
          },
          {
            type: "string",
            name: "email",
            label: "Contact Email",
          },
          {
            type: "string",
            name: "quote",
            label: "Quote",
          },
        ],
        ui: {
          router: () => `/contact`,
        },
      },
    ],
  },
});
