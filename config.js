//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "
 " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hXd0NnR0JaUk1SVXNtUlBmWGE5ZHpuTFBRUHk5dW9UTEhqakQ3UEpsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEtScTk2djdnd3VqaFpmNVVoT0kzejMxQVMxKy9VaktqR1NGOEpvQTVHMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSzJzZ3VidVFrT1FGbUp0R0NhTEpyTWplRE4vT2U4V0N6WllHemw4V2xzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2eTVhQ00rZEJ2OHJqeUdHTGlyMVRPKzA1UFNYc2I4YXM2VTdYVzN3KzFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9HSnRuSFdIaWQvRUVEQ3paTkszVVRqU0kzMnFTdS9RU004QUxGbXJmR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRGU0NEWXQwMzdFdUkvSTQ4U0kvTm1BNDlmODNQaVJWZWtsOG12SS8rd1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFpV0YzL1Vmank3U3hjMFJNdENxdERibGFCN1dNbThqNFZRK0h3VG0yYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVNUK0pPWCs2ZFBQeUJwV3hKSGp4bFgvMkd6b0lhVVdna293MWJVVklIMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpMZjNWWDBMOFl4a1p1dWUyMGhiU0dkcjhmakRzQy93WHNqQmJWc0ZYbkt3VlltU2dNNys0d1RyZnZLb3VDdWNIUGNlSUhWOHg4dFpnYUhncDlHV0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJyWGxZMXBsWUZYcEZnSis0R0o5cDV4YXR0dXdGVE16NDlQNHZNUlNKRGFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzOG5Odm9rNlJ0T0hNMWFoekp3bUxBIiwicGhvbmVJZCI6ImFjODA4MTI0LWMwZDEtNDBkNi05ZjhmLTkwNTkzYzg3MTBlNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCSG9yUW1Tc3Q3Nk9SanBOczd3RllDbTIxOWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHk2RTk5Y1BvV1hTQkFkN3BYSXJmdnRrZVQwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldCREQ1UzNMIiwibWUiOnsiaWQiOiIyMzQ4MTM4NjExOTI2OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkTDmMORJ1Qgw4pYw47FoFQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BIV25wb0VFTnp2MjdjR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjMzRU9xdHlSY2Fodi85KzUwbXp6SnAyTnVjc3BRU0VINEREWG5sKzZNMzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVnbUtZMlV5NlV1Z0VjTk11K1lQcTJTYlRpVnNZMDV2SlRNaWd2UXFFQ1N4R05UUkRPVWNpYnZUNlpPZjhiSXN0andqWmhIbTdKR2ZrbllKRTZySERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpMTF2bENqckxyc1h3NitsMmFFWlV0YWVCMVdEU3d0VXVnQzJHaStZTG1FTTNaU2FXY0FBc3RZenVwKzlPK05FcDI2Z0V5ZDM5blhIb1IxdFhIb0RCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzg2MTE5MjY6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDl4RHFyY2tYR29iLy9mdWRKczh5YWRqYm5MS1VFaEIrQXcxNTVmdWpOKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzQ2MTM1NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOUEIifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
