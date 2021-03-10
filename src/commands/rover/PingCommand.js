const Command = require('../Command')

module.exports =
class PingCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'ping',
      properName: 'Ping',
      description: 'Ping the bot to see API latency',
      userPermissions: [],
      throttling: { usages: 1, duration: 10 } // 1 usage every 10 seconds
    })
  }

  async fn (msg) {
        return msg.reply([
            'Pong!',
            `🔂 **RTT**: **__ERROR__** ms`,
            `💟 **Heartbeat**: ${Math.round(this.client.ws.ping)} ms`
        ]);
        console.log(`${math.round(this.client.ws.ping)}`);
  }
}
