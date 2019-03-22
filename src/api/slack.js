import Slack from "slack";
const slack = new Slack();

export const getChannels = async token => {
  await slack.channels.list({ token }).then(res => {
    let channelArray = [];
    for (const channel of res.channels) {
      channelArray.push(channel.id);
    }
    console.log(channelArray);
    // return channelArray;
  });
};
