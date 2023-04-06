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
        name: "page",
        label: "Website Pages",
        path: "content/pages",
        format: "md",
        ui: {
          router: ({ document }) => `/${document._sys.filename}`,
        },
        templates: [
          {
            name: "about",
            label: "About",
            fields: [
              {
                type: "image",
                name: "picture",
                label: "Picture",
              },
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
                    firstName: "Team Member",
                    lastName: "",
                    role: "new",
                  },
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
          },
          {
            name: "partners",
            label: "Partners",
            fields: [
              {
                type: "image",
                name: "picture",
                label: "Picture",
              },
              {
                type: "rich-text",
                name: "intro",
                label: "Intro",
              },
              {
                label: "Partners Data",
                name: "partnersData",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: `${item?.tabTitle}`}
                  },
                },
                fields: [
                  {
                    label: "Tab Title",
                    name: "tabTitle",
                    type: "string",
                  },
                  {
                    label: "Intro",
                    name: "intro",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    label: "Call To Action",
                    name: "callToAction",
                    type: "string",
                  },
                  {
                    label: "Companies or Schools",
                    name: "companies",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: `${item?.name}`}
                      },
                    },
                    fields: [
                      {
                        label: "Logo",
                        name: "logo",
                        type: "image",
                        required: true,
                      },
                      {
                        label: "Name",
                        name: "name",
                        type: "string",
                        required: true,
                      },
                      {
                        label: "Description",
                        name: "description",
                        type: "string",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        label: "Website",
                        name: "website",
                        type: "string",
                        required: true,
                      },
                      {
                        label: "Displayed on HomePage",
                        name: "homepage",
                        type: "boolean",
                      },
                    ]
                  },
                  {
                    label: "Form",
                    name: "form",
                    type: "object",
                    fields: [
                      {
                        label: "Placeholder Logo",
                        name: "logo",
                        type: "image",
                      },
                      {
                        label: "Call To Action",
                        name: "callToAction",
                        type: "string",
                      },
                      {
                        label: "Form Title",
                        name: "title",
                        type: "string",
                      },
                      {
                        label: "Details and Benefits",
                        name: "details",
                        type: "rich-text",
                      },
                      {
                        label: "Form Fields",
                        name: "fields",
                        type: "object",
                        list: true,
                        ui: {
                          itemProps: (item) => {
                            return { label: `${item?.fieldName}`}
                          },
                        },
                        fields: [
                          {
                            label: "Field Name",
                            name: "fieldName",
                            type: "string",
                            required: true,
                          },
                          {
                            label: "Type",
                            name: "type",
                            type: "string",
                            required: true,
                            options: [
                              {
                                value: "Short answer text",
                                label: "Short Answer",
                              },
                              {
                                value: "Paragraph",
                                label: "Paragraph",
                              },
                              {
                                value: "Email",
                                label: "Email",
                              },
                              {
                                value: "Checkbox",
                                label: "Checkbox",
                              },
                              {
                                value: "Disclaimer",
                                label: "Disclaimer",
                              }
                            ]
                          },
                          {
                            label: "Placeholder",
                            name: "placeholder",
                            type: "string",
                            required: true,
                            ui: {
                              component: "textarea"
                            },
                          },
                          {
                            label: "Required",
                            name: "required",
                            type: "boolean",
                            required: true,
                          },
                          {
                            label: "Options",
                            name: "options",
                            type: "string",
                            list: true,
                          },
                        ]
                      },
                    ]
                  },
                ],
              },
            ],
          },
          {
            name: "impact",
            label: "Impact",
            fields: [
              {
                name: "milestones",
                label: "Impact Milestones",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item: any) => {
                    return { label: `${item?.title}`}
                  },
                },
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    required: true,
                  },
                  {
                    name: "description",
                    label: "Description",
                    type: "string",
                    required: true,
                    ui: {
                      component: "textarea",
                    }
                  },
                ],
              },
              {
                name: "communityTitle",
                label: "Community Title",
                type: "string",
              },
              {
                name: "smallIntro",
                label: "Community Intro Text",
                type: "string",
                ui: {
                  component: "textarea",
                },
              },
              {
                name: "communityMembers",
                label: "Community Members",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item: any) => {
                    return { label: `${item?.tabTitle}`}
                  },
                },
                fields: [
                  {
                    name: "tabTitle",
                    label: "Tab Title",
                    type: "string",
                  },
                  {
                    name: "tabIntro",
                    label: "Tab Intro",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    name: "profiles",
                    label: "Member Profiles",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item: any) => {
                        return { label: `${item?.firstName} ${item?.lastName}`}
                      },
                    },
                    fields: [
                      {
                        name: "picture",
                        label: "Picture",
                        type: "image",
                      },
                      {
                        name: "firstName",
                        label: "First Name",
                        type: "string",
                      },
                      {
                        name: "lastName",
                        label: "Last Name",
                        type: "string",
                      },
                      {
                        name: "schoolOrEvent",
                        label: "School/Event",
                        type: "string",
                      },
                      {
                        name: "year",
                        label: "Year",
                        type: "number",
                      },
                      {
                        name: "bio",
                        label: "Bio/Testimonial",
                        type: "string",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "contact",
            label: "Contact",
            fields: [
              {
                name: "formTitle",
                label: "Form Title",
                type: "string",
              },
              {
                name: "formSubmit",
                label: "Form Submit Text",
                type: "string",
              },
              {
                name: "formFields",
                label: "Contact Form Fields",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: `${item?.fieldName}`}
                  },
                },
                fields: [
                  {
                    label: "Field Name",
                    name: "fieldName",
                    type: "string",
                    required: true,
                  },
                  {
                    label: "Type",
                    name: "type",
                    type: "string",
                    required: true,
                    options: [
                      {
                        value: "Short answer text",
                        label: "Short Answer",
                      },
                      {
                        value: "Paragraph",
                        label: "Paragraph",
                      },
                      {
                        value: "Email",
                        label: "Email",
                      },
                      {
                        value: "Checkbox",
                        label: "Checkbox",
                      },
                      {
                        value: "Disclaimer",
                        label: "Disclaimer",
                      }
                    ]
                  },
                  {
                    label: "Placeholder",
                    name: "placeholder",
                    type: "string",
                    required: true,
                    ui: {
                      component: "textarea"
                    },
                  },
                  {
                    label: "Required",
                    name: "required",
                    type: "boolean",
                    required: true,
                  },
                  {
                    label: "Options",
                    name: "options",
                    type: "string",
                    list: true,
                  },
                ]
              },
            ],
          },
          {
            name: "raceInfo",
            label: "Registration Page",
            fields:[
              {
                name: "raceDay",
                label: "Race Day (Start Date)",
                type: "object",
                fields: [
                  {
                    name: "year",
                    label: "Year",
                    type: "number",
                  },
                  {
                    name: "month",
                    label: "Month",
                    type: "number",
                    ui:{
                      validate: (val:number)=>{
                        if(val > 12 || val <= 0) {
                          return 'the number must be between 1 and 12'
                        }
                      }
                    }
                  },
                  {
                    name: "day",
                    label: "Day",
                    type: "number",
                    ui:{
                      validate: (val:number)=>{
                        if(val > 31 || val <= 0) {
                          return 'the number must be between 1 and 31'
                        }
                      }
                    }
                  },
                ]
              },
              {
                name: "raceInfoIntro",
                label: "Intro Text",
                type: "rich-text",
              },
              {
                name: "cta",
                label: "Call To Action",
                type: "string",
              },
              {
                name: "benefits",
                label: "Race Benefits",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return {label: item?.title};
                  }
                },
                fields: [
                  {
                    name: "title",
                    label: "Benefit Title",
                    type: "string",
                  },
                  {
                    name: "imageIcon",
                    label: "Benefit Picture",
                    type: "image"
                  },
                ],
              },
              {
                name: "tickets",
                label: "Tickets",
                type: "object",
                fields: [
                  {
                    name: "tbd",
                    label: "tbd",
                    type: "string"
                  },
                ],
              },
              {
                name: "pastEvents",
                label: "Past Events",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return {label: item?.date}
                  },
                },
                fields: [
                  {
                    name: "type",
                    label: "Event Type",
                    type: "string",
                    options: [
                      {
                        value: "recap",
                        label: "Annual Recap"
                      },
                      {
                        value: "event",
                        label: "Individual Event"
                      },
                    ]
                  },
                  {
                    name: "date",
                    label: "Date",
                    type: "string",
                  },
                  {
                    name: "title",
                    label: "Event Name",
                    type: "string",
                  },
                  {
                    name: "highlights",
                    label: "Event Highlights",
                    type: "string",
                    list: true,
                  },
                  {
                    name: "files",
                    label: "Pictures",
                    type: "image",
                    list: true,
                  },
                  {
                    name: "video",
                    label: "Recap Video",
                    type: "image",
                  },
                ]
              },
            ],
          }
        ]
      },
      {
        name: "websiteDetails",
        label: "Site Details",
        path: "content/siteDetails",
        format: "md",
        templates: [
          {
            name: "webLinks",
            label: "Links",
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
        ],
      },
    ],
  },
});
