const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_09_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDk0LFxuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgyLFxuICAgICAgICA4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgODksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZUlVTkt4elhWVCt3Y1ZzMTZtQW1kdlN1WHJ0Um1PL2l5cSt4WHFITTBxUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMU93VmtYd0lRRmVVUTRCYmVPcVlZd1wiLFxuICBcInBob25lSWRcIjogXCJkNzBlZGI5My01MmFkLTQyNTEtODRlZC05OWNlMWUyNWQyY2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMjAzLFxuICAgICAgMTkyLFxuICAgICAgODYsXG4gICAgICA4OSxcbiAgICAgIDIwOCxcbiAgICAgIDEyMCxcbiAgICAgIDIzOSxcbiAgICAgIDU0LFxuICAgICAgOTcsXG4gICAgICAxOTksXG4gICAgICAxMTksXG4gICAgICAxNDUsXG4gICAgICAzNyxcbiAgICAgIDE1MSxcbiAgICAgIDE3MCxcbiAgICAgIDMzLFxuICAgICAgMTYsXG4gICAgICAxMTEsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMTIxLFxuICAgICAgMjE4LFxuICAgICAgMTgxLFxuICAgICAgNDksXG4gICAgICA2LFxuICAgICAgMTM0LFxuICAgICAgMTQsXG4gICAgICA0NixcbiAgICAgIDEzMSxcbiAgICAgIDExNCxcbiAgICAgIDE1MyxcbiAgICAgIDE0NCxcbiAgICAgIDU1LFxuICAgICAgODEsXG4gICAgICAzNyxcbiAgICAgIDUzLFxuICAgICAgMTk5LFxuICAgICAgMjIsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkJGUExKM1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NjI4ODUzMjgxOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzE4ODkwNzk0NzIyOTM6MzJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwicHJpbmNlbWFzaGFtYmEwOVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BYZzlJSUhFTU9LM0xNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieG9zOWpwQ2dkQklTSE9ZRlFCQXFKOVhlOVhHTUlwWWhHOFFqVVBHdHJuVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUbFNMTUI2c0w0bzN5NklFZzVhN2NwUHhhdGJzeW9kUklKUUkzYkF4bW5VRVRQOGxLVE1Xd1ZYWVc5U0Z3b21EcDNzWHlkQlR0cmJwdGY2UCtMcExEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0MDFSN2dRSmdLRWh4WFJHbFRiV0ZYajVNTnAxT0I1Q2RVc0FZNTlwVGRBRTlVR1NXanU0YXgzcERETVcvQ0VxeDNiN2Vua0M3RlZOVTRuN1AxdnNCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzYyODg1MzI4MTozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTA3NjE2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtVVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1VULmpzb24iOiAie1wia2V5RGF0YVwiOlwiZlhkQWZCdWphbFJEL2xvVjRLazJLVkNwTnkxNXR1M0FkbnVmaXpUSWovTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODg1MTU1NDQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
