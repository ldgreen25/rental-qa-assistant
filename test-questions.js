// Checks that common tenant questions get the right answer.
// Run with:  node test-questions.js
// To add a case, add a line: ["The question someone might type", "Answer label it should get"]
// Use null when the bot should NOT answer and should send people to the office instead.

const fs = require("fs");
const html = fs.readFileSync(__dirname + "/index.html", "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const logic = script.split("/* ---------- Chat UI")[0];
const findMatch = new Function(logic + "; return findMatch;")();

const cases = [
  // Old false matches (these used to answer with the pet policy or income)
  ["How do I submit an application?", "How to apply"],
  ["What's the location of the property?", null],
  ["Is there carpet in the bedrooms?", null],
  ["Can I learn more about the area?", null],

  // Original topics
  ["What is the application fee?", "Application fee"],
  ["How much does it cost to apply", "Application fee"],
  ["How much income do I need?", "Income requirements"],
  ["How much do I need to make", "Income requirements"],
  ["What credit score do I need?", "Credit requirements"],
  ["I have bad credit, can I use a cosigner?", "Credit requirements"],
  ["Do you allow cats?", "Pet policy"],
  ["Is it pet friendly?", "Pet policy"],
  ["Can I bring my dogs", "Pet policy"],
  ["Do you accept Section 8?", "Housing vouchers"],
  ["Do you take vouchers", "Housing vouchers"],
  ["Can I tour the house?", "Schedule a showing"],
  ["What homes are available?", "Available rentals"],
  ["What do I need to apply?", "Documents needed"],
  ["What documents do you require", "Documents needed"],
  ["How much is the security deposit?", "Deposit / move-in costs"],
  ["How much money do I need to move in", "Deposit / move-in costs"],

  // New topics
  ["How much is rent?", "Rent amount & due date"],
  ["When is rent due?", "Rent amount & due date"],
  ["How long is the lease?", "Lease length"],
  ["Do I need renters insurance?", "Renters insurance"],
  ["Are utilities included?", "Utilities"],
  ["Is water included", "Utilities"],
  ["Who do I call for maintenance?", "Maintenance requests"],
  ["My sink has a leak", "Maintenance requests"],
  ["What's your phone number?", "Contact us"],
  ["How long until I'm approved?", "Approval time"],

  // Popular-question buttons must answer themselves
  ...["How to apply","Application fee","Income requirements","Housing vouchers","Pet policy",
      "Deposit / move-in costs","Schedule a showing","Available rentals"].map(l => [l, l]),
];

let failed = 0;
for (const [q, want] of cases) {
  const got = findMatch(q);
  const label = got ? got.label : null;
  const ok = label === want;
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${q.padEnd(44)} → ${label ?? "(sends to office)"}${ok ? "" : `   expected: ${want ?? "(sends to office)"}`}`);
}
console.log(`\n${cases.length - failed} of ${cases.length} passed`);
process.exit(failed ? 1 : 0);
