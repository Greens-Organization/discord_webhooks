export const WEBHOOK_OFFLINE = {
  content: "<@146426367683198977> & <@125249534220566528>",
  embeds: [{
    title: "Potato Server",  
    color: 5174599,
    footer: {
      text: `📅 ${(new Date()).toDateString()}`,
    },
    fields: [
      {
        name: "Status: `OFFLINE`",
        value: ""
      },
    ],
  },
  ]
};