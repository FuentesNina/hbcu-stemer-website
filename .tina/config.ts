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
      },
      {
        name: "about",
        label: "About",
        path: "content/pages",
        fields: [
          {
            type: "rich-text",
            name: "intro",
            label: "Intro",
          },
          {
            type: "string",
            name: "cta",
            label: "CTA",
          },
          {
            label: "Team Members",
            name: "teamMembers",
            type: "object",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.firstName} ${item?.lastName} ( ${item?.role} ) `}
              },
              // // Setting a default will auto-populate new items with the given values
              defaultItem: {
                firstName: "Danielle",
                lastName: "Lewis",
                role: "Founder & CEO",
                bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
              }
            },
            fields: [
              {
                type: "image",
                label: "Headshot",
                name: "headshot"
              },
              {
                label: "First Name",
                name: "firstName",
                type: "string",
              },
              {
                label: "Last Name",
                name: "lastName",
                type: "string",
              },
              {
                label: "Role",
                name: "role",
                type: "string"
              },
              {
                label: "Bio",
                name: "bio",
                type: "string",
                ui: {
                  component: "textarea",
                }
              }
            ]
          },
        ],
        ui: {
          router: () => `/about`,
        },
      },
    ],
  },
});
