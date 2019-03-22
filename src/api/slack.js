require("dotenv").config();
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const dateFormat = require("dateformat");
const now = new Date();

const token = process.env.SLACK_BOT_TOKEN;
const Slack = require("slack");
const slack = new Slack({ token });

// Async use for slack api
(async function main() {
  /**
   * Create filename
   */

  const filename = await slack.team.info({ token }).then(res => {
    return `${res.team.name}_${dateFormat(now, "isoDateTime")}`;
  });

  /**
   * Get all channels
   */

  const channels = await slack.channels.list({ token }).then(res => {
    let channelArray = [];
    for (const channel of res.channels) {
      channelArray.push(channel.id);
    }
    return channelArray;
  });

  /**
   * Get all users per channel
   */

  channels.forEach(channel => {
    slack.channels
      .info({ token, channel })
      .then(res => console.log(res.channel.members));
  });

  /**
   * For each user id, retrieve their email
   */

  // slack.users.info({ token, user })
  //   .then(res => console.log(res.user.name, res.user.profile.email))

  /**
   * Generate the CSV file
   */

  const csvWriter = createCsvWriter({
    path: `data/${filename}.csv`,
    header: [{ id: "name", title: "name" }, { id: "email", title: "email" }]
  });

  const records = [
    { name: "Bob", email: "test@test.com" },
    { name: "Mary", email: "test@test.com" }
  ];

  csvWriter.writeRecords(records).then(() => {
    console.log("...Done");
  });
})();
