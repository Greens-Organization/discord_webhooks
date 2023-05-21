export const WEBHOOK_OFFLINE = {
  content: "<@&1109866435599138898>",
  embeds: [
    {
      title: "Potato Server",
      color: 5174599,
      footer: {
        text: `📅 ${new Date().toDateString()}`,
      },
      fields: [
        {
          name: "Status: `OFFLINE`",
          value: "",
        },
      ],
    },
  ],
};

export const WEBHOOK_TESTING = {
  content: "<@146426367683198977>",
  embeds: [
    {
      title: "Potato Server",
      color: 5174599,
      footer: {
        text: `📅 ${new Date().toDateString()}`,
      },
    },
  ],
};
