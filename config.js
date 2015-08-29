module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || '00citizen',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || '00citizen.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-9817731493-9817731509-9870184710-09c9c1'
};
