const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "tere" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94775541868" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94775541868";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "ture"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "ture"
global.save_status = process.env.AUTO_SAVE_STATUS || "ture"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf
global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_40_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNixcbiAgICAgICAgMTY4LFxuICAgICAgICA1MixcbiAgICAgICAgMTk1LFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDM3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyNixcbiAgICAgICAgMTg5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNHlqN1dER1hZa0IvamJQOFp4WXpWZXNiTTdPNDN1UUt1b2h6ODdCZmZGMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRVpydC1ueUNUc1NYcExORTFscFZiQVwiLFxuICBcInBob25lSWRcIjogXCJiMTQ2OTc2NC1lNTI0LTRmNjctYThkZS1kOGFiOTJlNjJmYzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxMDMsXG4gICAgICA5NixcbiAgICAgIDExNyxcbiAgICAgIDAsXG4gICAgICAxMTcsXG4gICAgICAxNjAsXG4gICAgICAyMTUsXG4gICAgICAyMjAsXG4gICAgICAxNTAsXG4gICAgICAyMjcsXG4gICAgICAyMDcsXG4gICAgICA5NCxcbiAgICAgIDIxOCxcbiAgICAgIDEyNyxcbiAgICAgIDIzMyxcbiAgICAgIDEwNSxcbiAgICAgIDI0NixcbiAgICAgIDE0NixcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICA3MCxcbiAgICAgIDIyMSxcbiAgICAgIDcyLFxuICAgICAgMjAsXG4gICAgICAyMzEsXG4gICAgICAyNDQsXG4gICAgICAxNTAsXG4gICAgICAxOTIsXG4gICAgICAxOTEsXG4gICAgICAxNDUsXG4gICAgICAyMDQsXG4gICAgICA1MSxcbiAgICAgIDE4NSxcbiAgICAgIDEzMyxcbiAgICAgIDE3MSxcbiAgICAgIDUsXG4gICAgICAxMDUsXG4gICAgICAyMzksXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjZFQUdGWkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc1NTQxODY4OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2q/ZviDYstmG2Yog2YfYp9im2YrYqtmKINmF2LPYr9izXCIsXG4gICAgXCJsaWRcIjogXCIxNzI5MDMwNTIwODMyMjk6NTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1NdVBnRUVQK3c2TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1ZzZMUmVjeTdjVGdDQndMWnp3U0djOHhKdHZIV1ZSTUtDTkdOcjRRSXdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1FUDgzSW5BZERkVlljd2JMRldvNmFyNGtXREdwSGFwVUJlWUpjRFB5eE5qQ1BDTUc3N1Z3OTRVWUF1YUpZakZlUjJlQnlsc05nNzlSS0NhRGhGY0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBwNTZXYnhjZnlwd2I0Z1R5VVo5WlV2M0ROdkw0OVJKbzhoYjZGb0w2b1F0YTMzRVJFdm41R1IvSVdVNmNxOVVZWFhjbml4U1dNNzVPWjFLRXFjU2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc1NTQxODY4OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM3NDg1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURGWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREZYLmpzb24iOiAie1wia2V5RGF0YVwiOlwieXF2Ky9sY1h4eTExQTZqeXU1cjVLOHJXQ3J2VFpuZEwxdXA4TGVHRklidz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzI2MzE5MTEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyNDM3MjM1NTRcIn0iCn0="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
