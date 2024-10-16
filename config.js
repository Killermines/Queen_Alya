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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUU1SUxLSk5lUks3THMvNEV2eHJOcCsvZGtRdVZ4dEdoVTcvbXRqQy8xYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTi9GNWVVR1BuYW9EWEMwYXlTMVNZQ28rT2k3REFIMklkV0R2YjZRRGtCYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRlJyTndCS1dCaTN3V09rODhaa3dUY1ExU0d0NHRiWXFQTVJnbzVLUTJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1NFBJdEU0clNsd21RcEtRWGhUanNIWjhRam9PVlJhWEdROEVtQWtzWlZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOMEF1OTFKTzZaOE5mK3luWWJjVzFJRlNmdFJZVXIyTmU0cVFtakFUa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBnaUR5dC9yNkx1NlptS2FUdGNoZXhyK0NUVVMyNFVQSUM2MHQrTDFHMVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEJPanJ4VmVkZFIxNDZ3ZmZEMWU3cmZkaHlaallDVGw5eG9BaGs3d2IyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NtVDExL2VtNFVTbVJjb3g4N0ozaFNSdHBONDlycmZWZUdFUVU2LzFRZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlozNlAzc1lwdlBiOSt5MmNNcVBJWEZBcEpzdmRNeUxJRnJmY1J3US9IUmJURGxJdDBHeHN3eTdlTXdvaXl4RzZpUExYYVp5WmVqazlGL3Y2eXFFMkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJOSTRvWnNGMEg0NE1xL3cvSWRPSTRBdjVCMGtXckVGTkZ6aUtpVG9Cc2E4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRXzBubnF1aFNmLTdFTnhSdGNmY3FBIiwicGhvbmVJZCI6ImY5MzBlMWNmLWRkNDQtNGYzMy04YTQyLTMxZWVhODgzYzVmMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSUFVd2Y0c1J3MFpzWnh4L2tqZFpxdThLSTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHZaVjRiV1RJekNSNmswRGZ4UXpLeEZjbGQwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxKOTQ1VFRXIiwibWUiOnsiaWQiOiIyMzQ4MTM4NjExOTI2OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqdgMaXTsekIOG4n+G+sMmuyp/Jm+G0v+G0seG0ruG0vOG0v+GYieKEtSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFRXbnBvRUVKREt2N2dHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMzNFT3F0eVJjYWh2LzkrNTBtenpKcDJOdWNzcFFTRUg0RERYbmwrNk0zND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWWwzY3RKZm9DTjBLY3JkT3BxTWZ1cmd2T2pVRkNpSmNKcEhEVk90TCtuMEhpYUF2UVBHM1F0eE9aeWR5ZTRBTWsrbnRjamgwRHY1emRzQ0Z0d25yRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IjFCaDdVYWYvOVA5bUJnd2o3U09aYlhSM0lJUk11eXNkUXZpR09RZ2dZUTQ3N1l4SGVDbnRaZTQvc09jSVVQSkxic3JsRGg3dzhyQlRJUmhvRVRTUUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzODYxMTkyNjoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkOXhEcXJja1hHb2IvL2Z1ZEpzOHlhZGpibkxLVUVoQitBdzE1NWZ1ak4rIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MDk0OTQxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNjRiJ9"
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
