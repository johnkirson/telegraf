const bot = new Telegraf(process.env.1270970918:AAGsI-p11a5QGF9M61OwPoBicBtHckJqrjs)

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time: %sms', ms)
})

bot.on('text', (ctx) => ctx.reply('Hello World'))
bot.launch()
