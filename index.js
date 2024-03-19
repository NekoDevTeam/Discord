
                // IKGA SOURCE https://discord.gg/ikgas V.3

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    readyStatus: true,
    checkUpdate: true
});
const express = require('express')
const app = express();
const port = 8000

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

// กำหนดข้อความในเม็ดม่วง

//---------------------------------

const text1 = "Sleep In Moon Light";

const text2 = "Moon Light?";

const text3 = "Moon";

//---------------------------------


const texts = ["Sleep In Moon Light", "Moon Light?", "Moon"];

const ing1 = "https://media.discordapp.net/attachments/1142837051683786842/1217904329118449674/dgcuc2t-4e192b6e-8d36-441d-8638-d39b3e399d24.png?ex=6605b8cb&is=65f343cb&hm=1b322e5e6bd9f07f4b56016a8ea9dbcdebd775028f063ef75d1cecce94c74282&=&format=webp&quality=lossless&width=210&height=315";
const ing2 = "https://media.discordapp.net/attachments/1142837051683786842/1217904329118449674/dgcuc2t-4e192b6e-8d36-441d-8638-d39b3e399d24.png?ex=6605b8cb&is=65f343cb&hm=1b322e5e6bd9f07f4b56016a8ea9dbcdebd775028f063ef75d1cecce94c74282&=&format=webp&quality=lossless&width=210&height=315";

const nameButtonone = "" || "Listen to music";
const linkButtonone = "" || "https://www.twitch.tv/chilledcat_music";
const name2Buttonone = "" || "My Profile";
const link2Buttonone = "" || "https://www.youtube.com/watch?v=xMHJGd3wwZk";

const stateTexts = [
    `﹝ ${text1} ﹞`,
    `﹝ ${text2} ﹞`,
    `﹝ ${text3} ﹞`
];

app.get('/', (req, res) => {
    res.send('กำลังทำงาน');
});


client.on('ready', async () => {
  console.log(`🟣: ${client.user.username}`);

  let currentStateIndex = 0;

  const temperature = getTemperature();
  const user = new Discord.RichPresence()
    .setApplicationId('1121867777867788309')
    .setType('STREAMING')
    .setURL('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiF-_yvlOyEAxVWxDgGHY1BAfUQtwJ6BAgOEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzBukbgTN0cE&usg=AOvVaw1Li8EGbpBnEVYrOyYg7ym_&opi=89978449')
    .setName('MOON LIGHT')
    .setStartTimestamp(Date.now())
    .setAssetsLargeText(`🌡️ ${temperature.toFixed(1)} °C | 🍃 ${Math.round(client.ws.ping)} m/s`)
    .setAssetsLargeImage(ing1)
    .setAssetsSmallImage(ing2)
    .addButton(nameButtonone, linkButtonone)
   .addButton(name2Buttonone, link2Buttonone)

  client.user.setActivity(user);

  setInterval(() => {
    const nextState = stateTexts[currentStateIndex];
    currentStateIndex = (currentStateIndex + 1) % stateTexts.length;
    //user.setDetails(`〈${getCurrentTime()}〉 ⭒ 〈${client.user.username}〉`);
    user.setDetails(`〈${client.user.username}〉 ⭒ 〈${getCurrentTime()}〉`);
    user.setState(nextState);
    client.user.setActivity(user);
  }, 5000);
});

function getCurrentTime() {
  const a = new Date(Date());
  const c = { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: true };
  return a.toLocaleTimeString("en-US", c);
}

async function sendTextLoop() {
  while (true) {
    for (const text of texts) {
      await client.settings.setCustomStatus({
        text: text,
        expires: null,
      });
      await sleep(2500);
    }
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

sendTextLoop();

function getTemperature() {
  // 25
  const center = 25;
  const variance = 5;
  const temperature = center + (Math.random() * variance * 2 - variance);
  return temperature;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleArray(stateTexts);

client.login("TOKEN");
