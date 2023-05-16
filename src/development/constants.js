export const WEBHOOK_DEVELOP = {
  username: "GLaDOS",
  avatar_url:
    "https://static.wikia.nocookie.net/portal-2-br/images/e/e0/GLaDOS.png/revision/latest?cb=20150930231040&path-prefix=pt-br",
  content: "Hello from Potato Server",
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
