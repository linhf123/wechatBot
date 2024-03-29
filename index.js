'use strict';

/**
 * @author lhf
 * @description 机器人主逻辑
 */

/**
 * @global
 * @name Wechaty 机器人
 */
const { Wechaty } = require('wechaty');

/**
 * @global
 * @name config 配置文件
 */
const config = require('./config/index');

/**
 * @global
 * @name schedule 封装过的 schemdule
 * @function
 */
const schedule = require('./schedule');

/**
 * @global
 * @name dayjs 日期插件
 */
const dayjs = require('dayjs');

/**
 * @global
 * @name superagent 封装过的 superagent
 */
const superagent = require('./superagent/index');

/**
 * @global
 * @function
 * @name delay 一个延迟函数
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @global
 * @function
 * @description 扫码回调函数
 * @param {string} qrcode
 * @param {number} status
 */
function onScan(qrcode, status) {

  // 终端打印二维码插件 - 在console端显示二维码
  require('qrcode-terminal').generate(qrcode, {small: true});

  // 打印二维码地址
  const qrcodeImageUrl = [
    'https://api.qrserver.com/v1/create-qr-code/?data=',
    encodeURIComponent(qrcode),
  ].join('');

  console.log(qrcodeImageUrl);

}

/**
 * @global
 * @function
 * @description 登录回调函数
 * @param {string} user
 */
async function onLogin(user) {
  console.log(`${user}登录了`);

  if (config.AUTOREPLY) {
    console.log('已开启机器人自动聊天模式');
  }

  // 登陆后创建定时任务
  await DayTask();

}

/**
 * @global
 * @function
 * @description 登出回调函数
 */
function onLogout(user) {
  console.log(`小助手${user} 已经登出`);
}

/**
 * @global
 * @function
 * @description 消息回调函数
 * @param {object} msg 实例用户
 */
async function onMessage(msg) {
  const contact = msg.from(); // 发消息人
  const content = msg.text(); //消息内容
  const room = msg.room(); //是否是群消息
  if (msg.self()) {
    return;
  }

  if (room) { // 如果是群消息
    const topic = await room.topic();
    console.log(`群名: ${topic} 发消息人: ${contact.name()} 内容: ${content}`);
  } else { // 如果非群消息
    console.log(`发消息人: ${contact.name()} 消息内容: ${content}`);
    if (config.AUTOREPLY) { // 如果开启自动聊天
      const reply = await superagent.getReply(content);
      console.log('天行机器人回复：', reply);
      try {
        await delay(2000);
        await contact.say(reply); // 发送机器人回复

      } catch (e) {
        console.error(e);
      }
    }
  }
}

/**
 * @name bot 实例化机器人
 */
const bot = new Wechaty({name: 'LinhfBot'});


/**
 * @global
 * @function
 * @description 每日任务
 */
const DayTask = async() => {
  console.log('开始每日任务');
  schedule.setSchedule(config.SEND_DATE, async() => {
    console.log('你的贴心小助理开始工作啦！');
    let logMsg;
    const contact = await bot.Contact.find({ name: config.NICKNAME }) || await bot.Contact.find({ alias: config.NAME }); // 获取你要发送的联系人

    const one = await superagent.getOne(); //获取每日一句
    const weather = await superagent.getWeather(); //获取天气信息

    const today = dayjs().format('YYYY-MM-DD'); //获取今天的日期
    const memorialDay = dayjs().day(config.MEMORIAL_DAY); //获取纪念日天数

    // eslint-disable-next-line nodejs/align-multiline-assignment
    const str = today + '<br>我们在一起的第' + memorialDay + '天<br>' + '<br>元气满满的一天开始啦,要开心噢^_^<br>' +
          '<br>今日天气<br>' + weather.weatherTips + '<br>' + weather.todayWeather + '<br>每日一句:<br>' + one + '<br><br>' + '————————最爱你的我';
    try {
      logMsg = str;
      await delay(2000);
      await contact.say(str); // 发送消息
    } catch (e) {
      logMsg = e.message;
    }
    console.log(logMsg);
  });
};

/**
 * @description 统一监听事件
 */
bot.on('scan', onScan);
bot.on('login', onLogin);
bot.on('logout', onLogout);
bot.on('message', onMessage);

/**
 * @description 启动机器人
 */
bot
  .start()
  .then(() => console.log('开始登录微信'))
  .catch((e) => console.error(e));
