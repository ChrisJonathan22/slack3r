import Slack from "slack";
const slack = new Slack();

export const getMembers = async token => {
  await slack.channels.list({ token }).then(res => {
    let channelArray = [];
    for (const channel of res.channels) {
      channelArray.push(channel.id);
    }
    getUsersInChannels(token, channelArray);
  });
};

const getUsersInChannels = async (token, channels) => {
  let userIds = [];
  await channels.forEach(channel => {
    slack.channels
      .info({ token, channel })
      .then(res => userIds.push(res.channel.members));
  });
  //TODO: Duplicate IDs need to be removed in removeDuplicates
  console.log(userIds);
};

//TODO: Should create an object
const removeDuplicates = users => {};
