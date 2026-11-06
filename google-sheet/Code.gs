/**
 * Desirable Management – rental question log
 * Paste this into the Google Sheet's Apps Script editor (Extensions > Apps Script),
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 *
 * Each question asked in the "How may I help you?" box is added as a new row.
 * No names, emails, IP addresses or cookies are collected.
 */
var SHEET_NAME = "Questions";
var HEADERS = ["Date & time", "Activity", "What they asked or tapped", "Answer shown",
               "Answered?", "Link opened", "Website page", "Device", "Visit ID"];
var ACTIVITIES = { question: "Typed a question", button: "Tapped a quick question",
                   link: "Opened a link", open: "Opened the box" };

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (!ACTIVITIES[data.type]) return reply_("ignored");
    lock.waitLock(5000);
    var sheet = getSheet_();
    sheet.appendRow([
      new Date(),
      ACTIVITIES[data.type],
      clean_(data.question, 300),
      clean_(data.answer, 80),
      data.type === "question" || data.type === "button" ? (data.answer ? "Yes" : "No") : "",
      clean_(data.link, 200),
      clean_(data.page, 200),
      data.device === "phone" ? "Phone" : "Computer",
      clean_(data.visit, 20)
    ]);
    return reply_("ok");
  } catch (err) {
    return reply_("error");
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

// Visiting the web app link in a browser just confirms it's running.
function doGet() { return reply_("Desirable Management question log is running."); }

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
    sheet.getRange("A:A").setNumberFormat("mmm d, yyyy h:mm am/pm");
  }
  return sheet;
}

// Plain text only, trimmed, and never starting with = + - @ (so it can't act as a formula).
function clean_(value, max) {
  var s = String(value == null ? "" : value).replace(/[\u0000-\u001f]+/g, " ").trim().slice(0, max);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply_(text) {
  return ContentService.createTextOutput(text).setMimeType(ContentService.MimeType.TEXT);
}
