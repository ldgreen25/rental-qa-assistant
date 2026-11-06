/* Desirable Management rental answers + question matching.
   Shared by index.html (full page) and widget.html (the embeddable box).
   Edit answers here only. */
/* ---------------------------------------------------------------
   PREVIEW MODE
   Answers confirmed by Desirable Management (Nov 2026). Set
   PREVIEW_MODE=true to show the "pending review" labels again.
---------------------------------------------------------------- */
const PREVIEW_MODE=false;
const OFFICE="(757) 806-4593";
const EMERGENCY="(757) 806-4593, ext. 2";
const EMAIL="Yesrent2me@gmail.com";
const LINKS={
  rentals:"https://showmojo.com/ef0519201a/l",
  qualifications:"https://www.shedoesitall.net/rental-qualifications",
  policies:"https://www.shedoesitall.net/application-policies",
  pets:"https://www.shedoesitall.net/pet-application",
  portal:"https://desirablemanagement.appfolio.com/connect/users/sign_in",
  benefits:"https://www.shedoesitall.net/tenant-benifit-package",
  owners:"https://www.shedoesitall.net/current-potential-owners",
  contact:"https://www.shedoesitall.net/#contactus"
};

const data=[
{label:"How to apply",keys:["how to apply","how do i apply","apply","application","submit application","apply online"],
 answer:"Start by finding a home on our available rentals page and applying there. Every adult 18 or older who will live in the home must complete their own application.\n\nWe begin processing once all applicants have submitted their applications, uploaded their documents and paid the application fee. Applications are processed in the order they're received.",
 link:{text:"View available rentals",href:LINKS.rentals}},
{label:"Application fee",keys:["application fee","fee to apply","cost to apply","apply fee","screening fee"],
 answer:"The application fee is $47 per adult applicant and is non-refundable. Personal checks are not accepted."},
{label:"Documents needed",keys:["what do i need to apply","what do i need","documents","paperwork","pay stub","proof of income","identification","photo id","id","les"],
 answer:"Each adult applicant will need:\n• A photo ID (state, military or government-issued)\n• Your two most recent pay stubs, or your two most recent LES if you're active-duty military\n• Recent bank statements showing deposits that match your pay stubs\n• Self-employed applicants: six months of bank statements showing business deposits",
 link:{text:"See full rental qualifications",href:LINKS.qualifications}},
{label:"Approval time",keys:["how long approval","how long to hear","approval time","approved","decision","when will i know","processing time"],
 answer:"Applications are processed in the order received, starting once every applicant has submitted a complete application, documents and fee. Missing items are the most common cause of delays and can mean the home goes to another applicant.\n\nOnce approved, your approval is good for 60 days. Your application also stays on file for 60 days if you'd like to be considered for a different home."},
{label:"Income requirements",keys:["income requirement","income","salary","how much do i need to make","make","earn","wages","job","employment","employed","self employed"],
 answer:"Your household's combined net (take-home) income should be at least 2 times the monthly rent. Income from all adult applicants is combined.\n\nYou'll also need to have been at your current job for more than 3 months, unless you've transferred within your company. Self-employed applicants can qualify with six months of bank statements showing business deposits."},
{label:"Credit requirements",keys:["credit requirement","credit score","credit","fico","bad credit","no credit","co signer","cosigner","guarantor"],
 answer:"A credit score of at least 580 is required.\n\nWe don't accept co-signers or guarantors."},
{label:"Rental & background history",keys:["eviction","evictions","background check","background","criminal","felony","bankruptcy","judgment","rental history","landlord reference"],
 answer:"You'll need good, verifiable rental history, or proof that you previously owned your home.\n\nWe can't approve applications with any of the following:\n• An eviction within the last 3 years\n• Judgments or garnishments\n• A bankruptcy within the last 3 years\n• A conviction within the last 5 years related to drugs, violent crimes or firearms",
 link:{text:"See full rental qualifications",href:LINKS.qualifications}},
{label:"Second chance program",keys:["second chance program","second chance","2nd chance","fresh start program","fresh start"],
 answer:"Please review our Rental Qualifications page for the requirements every applicant must meet. If you have questions about your situation, call our office at "+OFFICE+".",
 link:{text:"See rental qualifications",href:LINKS.qualifications}},
{label:"Housing assistance",keys:["section 8","voucher","housing choice","housing assistance","rental assistance","hcv"],
 answer:"Yes. We work with all agencies that assist with housing. Applicants using housing assistance must still meet our rental qualifications."+OFFICE+" with any questions about using your voucher with a specific home."},
{label:"Pet policy",keys:["pet policy","pet","dog","cat","animal","pet fee","pet rent","breed","esa","emotional support","service animal"],
 answer:"Yes, pets are allowed at some of our homes. It depends on the property, so check the listing for the home you're interested in.\n\nPets are screened through PetScreening, a third-party service. The pet application fee is $20 for the first pet and $15 for the second. Approved pets may have pet rent, a pet deposit and a pet acceptance fee, based on the pet's age, weight and breed, owner approval and its FIDO score.\n\nAll service and emotional support animals are screened for free and must be approved before we make a decision on your application.",
 link:{text:"Start a pet application",href:LINKS.pets}},
{label:"Deposit / move-in costs",keys:["security deposit","deposit","move in cost","move in","holding fee","upfront","first month","prorated"],
 answer:"The security deposit is one month's rent. Here's how move-in works after approval:\n• A holding fee equal to one month's rent is due within 24 hours of approval to hold the home. It becomes your security deposit when you move in.\n• Your lease must be signed and returned within 72 hours.\n• Your first month's rent, prorated if you move in mid-month, is due before move-in.\n• Move-in is within 30 days of approval or of the home becoming available, whichever is later.\n\nIf you don't sign the lease or move in, the holding fee is forfeited. Move-in funds are paid online, and self check-in is available on move-in day."},
{label:"Schedule a showing",keys:["schedule a showing","showing","tour","view property","see property","see the house","walk through","visit","coming soon"],
 answer:"You can request a showing for any home directly from its listing on our available rentals page.\n\nIf a listing says \"Coming soon,\" the home isn't ready for showings yet. You can enter your email address on the listing to be notified when it's ready to show.",
 link:{text:"View rentals and schedule",href:LINKS.rentals}},
{label:"Available rentals",keys:["available rentals","available","availability","vacancy","vacancies","homes for rent","listing","rentals","for rent","waiting list","waitlist"],
 answer:"All of our current homes are listed on our available rentals page. If nothing fits right now, you can join our waiting list on our website by entering your email address.",
 link:{text:"View available rentals",href:LINKS.rentals}},
{label:"Service area",keys:["service area","what areas","which cities","where are your homes","location","hampton","newport news","norfolk","virginia beach","chesapeake","williamsburg","yorktown","portsmouth","carrollton","isle of wight"],
 answer:"We manage homes across Hampton Roads, including Hampton, Newport News, Williamsburg, Yorktown, Norfolk, Portsmouth, Chesapeake, Virginia Beach, Carrollton and Isle of Wight."},
{label:"Paying rent",keys:["pay rent","how much is rent","rent price","monthly rent","rent","payment","due date","late fee","cash","portal","echeck","e check","convenience fee","payment slip","personal check"],
 answer:"Rent varies by home and is shown on each listing. Rent is due on the 3rd of each month, and rent received after the 3rd is late and a late fee applies.\n\nResidents pay rent online through the resident portal, which is available 24/7. There's no convenience fee when you pay by eCheck in the portal.\n\nYou can also pay cash using your payment slip. A convenience fee applies. We don't accept cash or personal checks any other way.",
 link:{text:"Resident portal",href:LINKS.portal}},
{label:"Lease length",keys:["lease length","how long is the lease","lease term","lease","month to month","year lease","12 month"],
 answer:"Our standard lease term is one year (12 months)."},
{label:"Renters insurance",keys:["renters insurance","renter insurance","insurance"],
 answer:"Renters insurance is required for the full term of your lease."},
{label:"Utilities",keys:["utilities","utility","electric","water","gas","trash","sewer","internet","cable"],
 answer:"Applicants must be able to turn on all utilities in their own name. Please check with us about which utilities apply to a specific home."},
{label:"Resident Benefit Package",keys:["resident benefit package","benefit package","benefits","credit building","rent reporting"],
 answer:"Every lease includes our Resident Benefit Package, starting at $15 per month, which is billed with your rent. It includes:\n• A 24/7 online resident portal\n• Positive rent reporting to help build your credit\n• A 24/7 emergency maintenance hotline and priority maintenance\n• Routine property check-ins and help with renewals and move-outs",
 link:{text:"Learn more",href:LINKS.benefits}},
{label:"Maintenance requests",keys:["maintenance request","maintenance","repair","broken","leak","work order","emergency","after hours","after-hours"],
 answer:"Current residents must submit all maintenance requests through the resident portal, which is available anytime. Requests are tracked so you can follow their status, and we respond within 24–48 business hours.\n\nFor after-hours emergencies, call "+EMERGENCY+". If you smell gas or there is a fire, leave the home and call 911 first."+EMERGENCY+". If you smell gas or there is a fire, leave the home and call 911 first.",
 link:{text:"Submit a request",href:LINKS.portal}},
{label:"Property owners",keys:["property owner","owner","manage my property","management services","rent my house","landlord services","rental analysis"],
 answer:"We manage single-family homes, multi-family properties, apartments and commercial space. Owners can schedule a free consultation to review rent strategy, expenses and liability.",
 link:{text:"See owner services",href:LINKS.owners}},
{label:"Contact us",keys:["contact","phone number","phone","call","email","office hours","talk to someone","speak to someone","office","address"],
 answer:"Desirable Management LLC\n"+OFFICE+"\n"+EMAIL+"\n8106 Roanoke Ave, Hampton, VA 23605\n\nOffice hours: Monday–Friday, 9 a.m. to 5 p.m. Closed Saturday and Sunday."}
];
const popular=["How to apply","Application fee","Income requirements","Credit requirements","Housing assistance","Pet policy","Deposit / move-in costs","Available rentals"];
const FALLBACK="I don't have an answer for that one yet. Please call our office at "+OFFICE+" (Mon–Fri, 9–5) or email "+EMAIL+" and we'll make sure you get the right information.";

/* ---------- Matching: whole words only (so "application" no longer triggers "cat") ---------- */
const STOP=new Set(["what","when","where","which","does","have","with","your","about","from","that","this","there","need","much","many","will","would","could","should","know","want","like","into","they","them","their","just","also"]);
function stem(w){if(w.length>4&&w.endsWith("ies"))return w.slice(0,-3)+"y";if(w.length>3&&w.endsWith("s")&&!w.endsWith("ss"))return w.slice(0,-1);return w}
function words(s){return s.toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9]+/g," ").trim().split(" ").filter(Boolean).map(stem)}
function hasPhrase(q,p){outer:for(let i=0;i<=q.length-p.length;i++){for(let j=0;j<p.length;j++)if(q[i+j]!==p[j])continue outer;return true}return false}
const index=data.map(x=>({item:x,keys:x.keys.map(words)}));
function findMatch(text){
  const q=words(text);let best=null,score=0;
  for(const {item,keys} of index){
    let s=0;const seen=new Set();
    for(const k of keys){
      if(hasPhrase(q,k)){s+=2+k.length;k.forEach(w=>seen.add(w))}
    }
    for(const k of keys)for(const w of k)if(w.length>3&&!STOP.has(w)&&!seen.has(w)&&q.includes(w)){s+=1;seen.add(w)}
    if(s>score){score=s;best=item}
  }
  return score>=3?best:null;
}
