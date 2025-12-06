/****************************************************************************************
 * MASTER TEMPLATE v3.0 (Dark Feminine Edition)
 * 
 * [ХЭРЭГЛЭХ ЗААВАР]
 * 1. НУУЦ ТОХИРГОО (Script Properties-д оруулна):
 *    - File -> Project Settings -> Script Properties хэсэгт дараах түлхүүрүүдийг утгын хамт нэмнэ:
 *      * GEMINI_API_KEY
 *      * MANYCHAT_API_TOKEN
 *      * TEMPLATE_ID
 *      * ADMIN_EMAIL      (Алдааны мэдээлэл очих email хаяг)
 * 
 * 2. ГАРЫН АВЛАГА:
 *    - Энэ код нь "Dark Feminine" сэтгэл зүйн зөвлөгөө гаргахад зориулагдсан.
 *    - Хэрэглэгчийн хариулт (A, B, C) дээр үндэслэн оношилж, хатуу зөвлөгөө өгнө.
 * 
 * 3. TRIGGER (Цагийн тохиргоо):
 *    - Function: "main"
 *    - Event Source: "Time-driven"
 *    - Type: "Minutes timer" -> "Every 5 minutes"
 ****************************************************************************************/

/****************************************************************************************
 * I. PRODUCT CONFIGURATION (БҮТЭЭГДЭХҮҮНИЙ ТУСГАЙ ТОХИРГОО)
 ****************************************************************************************/
const PRODUCT_CONFIG = {
  // 1.1 PRODUCT INFO
  COACH_NAME: "Dark Feminine Psychologist",
  PRODUCT_NAME: "Dark Feminine Advice - Хатан Хааны Стратеги",
  SHEET_NAME: "Sheet1",
  SEND_ERROR_EMAILS: true,

  // 1.2 DELIVERY SETTINGS
  DELIVERY_MESSAGE: `✨ Сайн байна уу, {{NAME}}? \n\nТаны "Dark Feminine" тайлан бэлэн боллоо. 🍷\n\nДоорх линк дээр дарж татаж авна уу: 👇\n\n{{URL}}`,

  // 1.3 BATCH SETTINGS
  BATCH_SIZE: 3, 

  // 1.4 AI MODEL SETTINGS
  GEMINI_MODEL: "gemini-2.0-flash",

  // 1.5 REPORT CLEANING
  START_MARKER: "PART 1", // The code will look for this string to start the report content.

  // 1.6 AI PROMPT SETTINGS
  PROMPTS: {
    // SYSTEM ROLE
    SYSTEM_ROLE: `You are the "Dark Feminine" Psychologist. You are the user's "Bestie" who is brutally honest, sassy, seductive, and empowering. You slap them with the truth to help them win. Use emojis (🍷, 🥀, 💅, 💀, ⚠️) tastefully. NO FORMAL LANGUAGE. Speak like a Queen talking to a lost Princess.`,
    
    // REFERENCE MATERIAL (Q&A Logic & Style)
    REFERENCE_CONTENT: `
CONTEXT: You are writing a psychological analysis report based on user answers.
TONE: Sassy, Direct ("Chi"), Dark Feminine, Empowering. NO "Hello", NO "Here is your report". START DIRECTLY with PART 1.

LOGIC (DIAGNOSIS):
Count the user's answers (A, B, C).
- Mostly A = "The Nice Girl" (Too available, boring, safe).
- Mostly B = "The Anxious Chaser" (Insecure, aggressive, needy).
- Mostly C = "The Dark Feminine" (Queen, detached, high value).

INTERPRETATION OF ANSWERS (CONTEXT):
1. No text for 6 hours: A=Worry, B=Anger, C=Ignore.
2. Drunk call 11PM: A=Run to him, B=Fight, C=No answer.
3. Ex-girlfriend: A=Scared to ask, B=Stalks, C=Don't care.
4. Relationship Status: A=Waiting, B=Demanding, C=He begged.
5. Gifts/Money: A=Can't ask, B=Demands, C=He provides naturally.
6. Hurtful words: A=Cry inside, B=Fight back, C=Cold silence.
7. Vulnerability: A=Shared everything, B=Complain, C=Secretive.
8. Story with other girls: A=Depressed, B=Attack her, C=Ignore/Next.
9. Bedroom Power: A=Follow him, B=Demand, C=He worships me.
10. Reconciliation: A=I beg, B=No one, C=He begs.
11. Why this test: A=Fear of loss, B=Going crazy, C=Skill check.
12. Definition of Love: A=Sacrifice, B=Possession, C=Power.

REQUIRED STRUCTURE (4 SECTIONS):

PART 1: THE MIRROR (ТОЛЬ) 🪞
- **Diagnosis**: State clearly (e.g., "Онош: THE NICE GIRL").
- **Analysis**: Roast the user based on their dominant answer type. Tell them exactly how they look in men's eyes (e.g., "Convenience Store", "Mother figure", "Desperate").
- **Shock Therapy**: Make them realize their current strategy is failing.

PART 2: THE FATAL FLAW (ГАШУУН ҮНЭН) 🥀
- **Evolutionary Psychology**: Explain WHY men run away from them (e.g., "Men are hunters", "You killed the chase").
- **The "Mother" Trap**: Explain why caring too much kills desire.
- **Scent of Fear**: Explain how men smell desperation.

PART 3: THE PROTOCOL (ЭМЧИЛГЭЭ) 💉
- **3 Hard Rules** to start tomorrow.
- 1. RADIO SILENCE (Stop initiating).
- 2. MIRROR METHOD (Match his energy).
- 3. POWER OF NO (Set boundaries).

PART 4: THE SCRIPTS (ЗЭВСЭГ) 🔫
- **3 Copy-Paste Texts** for specific scenarios.
- 1. The "Ghost" Returns (When he texts after silence).
- 2. Last Minute Invite (Booty call rejection).
- 3. The "Bored" Text / "What are we?" (Creating mystery).

IMPORTANT FORMATTING:
- Headers must be BOLD.
- Use the emojis provided (🍷, 🥀, 💅, etc.).
- Text language: Mongolian (Cyrillic).
- **NO GREETINGS**. Do not say "Sain baina uu". Start immediately with "PART 1: THE MIRROR".
    `,

    // SINGLE PROMPT (Since the report is shorter/structured, we can do it in one go or split if needed.
    // Given the previous code had 2 parts, let's keep it safe but maybe just 1 part is enough for 4 sections?
    // Let's stick to the user's request: "PART 1 to PART 4".
    // I will combine it into one robust prompt to ensure consistency of the "Diagnosis" across sections.)
    FULL_REPORT_TEMPLATE: `
I. ROLE: {{ROLE}}
II. DATA: 
   - User Name: {{NAME}}
   - User Answers (12 Questions): {{DATA}}
III. TASK: Write the FULL REPORT (PART 1, PART 2, PART 3, PART 4).
IV. CRITICAL INSTRUCTIONS:
   1. **ANALYZE DATA FIRST**: Count A, B, C from {{DATA}}. Determine the Diagnosis.
   2. **NO GREETINGS**: The template already has "Hello {{name}}". DO NOT REPEAT IT. Start with "PART 1...".
   3. **STRUCTURE**: Follow the 4-part structure strictly.
   4. **LENGTH & DETAIL**:
      - **EXTREME DETAIL REQUIRED**. The user has paid for a "Premium" report.
      - Do NOT summarize. Write deep, psychological breakdowns.
      - **Target Length**: 2000+ words (approx 4-5 pages).
   5. **LANGUAGE**: Mongolian.
V. REFERENCE: {{REFERENCE}}
`
  }
};

/****************************************************************************************
 * II. SYSTEM ENGINE
 ****************************************************************************************/

function getProperty(key) {
  const val = PropertiesService.getScriptProperties().getProperty(key);
  if (!val) throw new Error(`MISSING SCRIPT PROPERTY: ${key}. Please set it in File > Project Settings.`);
  return val;
}

function main() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    console.log("System busy, skipping this run.");
    return;
  }

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(PRODUCT_CONFIG.SHEET_NAME);
    if (!sheet) throw new Error(`${PRODUCT_CONFIG.SHEET_NAME} олдсонгүй!`);

    const rows = sheet.getDataRange().getValues();
    let processedCount = 0;
    
    const KEYS = {
      GEMINI: getProperty("GEMINI_API_KEY"),
      MANYCHAT: getProperty("MANYCHAT_API_TOKEN"),
      TEMPLATE: getProperty("TEMPLATE_ID")
    };

    for (let i = 1; i < rows.length; i++) {
      if (processedCount >= PRODUCT_CONFIG.BATCH_SIZE) break;

      const row = rows[i];
      const name = row[0];        
      const contactID = row[1];   
      const inputData = row[2]; // Column C contains the answers (e.g. "A, B, A, C...")
      const status = row[4];      
      const errorCell = sheet.getRange(i + 1, 6); 

      if (!name || !inputData || (status && String(status).startsWith("DONE")) || status === "Processing...") continue;

      const statusCell = sheet.getRange(i + 1, 5); 
      statusCell.setValue("Processing...");
      SpreadsheetApp.flush(); 

      try {
        console.log(`Processing user: ${name}`);

        // 1. GEMINI GENERATION
        let reportResult = generateReportGemini(name, inputData, KEYS.GEMINI);
        let reportText = reportResult.text;
        let tokenUsage = reportResult.usage;

        // 2. PDF GENERATION
        let pdfUrl = createPdfFromTemplate(name, reportText, KEYS.TEMPLATE);

        // 3. SEND TO MANYCHAT
        sendToManyChat(contactID, pdfUrl, name, KEYS.MANYCHAT);

        // 4. FINALIZE
        sheet.getRange(i + 1, 4).setValue(pdfUrl); 
        sheet.getRange(i + 1, 7).setValue(tokenUsage); 
        
        const now = new Date();
        const timeString = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
        statusCell.setValue(`DONE (${timeString})`);
        
        errorCell.setValue(""); 
        processedCount++;

      } catch (err) {
        console.error(`Error for ${name}: ${err}`);
        statusCell.setValue("ERROR"); 
        errorCell.setValue(err.toString()); 
        sendErrorEmail(name, err.toString());
      }
    }
  } catch (e) {
    console.error("System Critical: " + e);
    sendErrorEmail("SYSTEM_CRITICAL", e.toString());
  } finally {
    lock.releaseLock();
  }
}

/****************************************
 * 3. AI ENGINE
 ****************************************/
function generateReportGemini(userName, inputData, apiKey) {
  
  const variables = {
    "{{ROLE}}": PRODUCT_CONFIG.PROMPTS.SYSTEM_ROLE,
    "{{NAME}}": userName,
    "{{DATA}}": inputData,
    "{{PRODUCT_NAME}}": PRODUCT_CONFIG.PRODUCT_NAME,
    "{{REFERENCE}}": PRODUCT_CONFIG.PROMPTS.REFERENCE_CONTENT
  };

  // We use a SINGLE prompt to ensure context (Diagnosis) carries over through all 4 parts.
  // Splitting into Part 1 and Part 2 might cause Part 2 to forget the "Diagnosis" from Part 1
  // unless we explicitly pass it, but a single long context window is better for this 4-part structure.
  let prompt = PRODUCT_CONFIG.PROMPTS.FULL_REPORT_TEMPLATE;
  for (const [key, value] of Object.entries(variables)) {
    prompt = prompt.split(key).join(value);
  }

  let result = callGeminiAPI(prompt, apiKey);
  return { text: result.text, usage: result.usage };
}

function callGeminiAPI(prompt, apiKey) {
  const model = PRODUCT_CONFIG.GEMINI_MODEL || "gemini-2.0-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const payload = {
    "contents": [{ "parts": [{ "text": prompt }] }],
    "generationConfig": { "temperature": 0.8, "maxOutputTokens": 8192 } // Higher temp for more "Sassy" creativity
  };
  const options = { 
    "method": "post", 
    "contentType": "application/json", 
    "payload": JSON.stringify(payload), 
    "muteHttpExceptions": true 
  };
  
  const res = UrlFetchApp.fetch(url, options);
  
  if (res.getResponseCode() !== 200) {
    throw new Error(`Gemini API Error ${res.getResponseCode()}: ${res.getContentText()}`);
  }

  const json = JSON.parse(res.getContentText());
  if (json.candidates && json.candidates[0].content) {
      return { 
          text: json.candidates[0].content.parts[0].text,
          usage: json.usageMetadata ? json.usageMetadata.totalTokenCount : 0
      };
  }
  throw new Error("Gemini No Candidates: " + res.getContentText());
}

/****************************************
 * 4. PDF ENGINE
 ****************************************/
function createPdfFromTemplate(name, content, templateId) {
  const template = DriveApp.getFileById(templateId);
  const copy = template.makeCopy(`${name} - ${PRODUCT_CONFIG.PRODUCT_NAME}`);
  const copyId = copy.getId();
  const doc = DocumentApp.openById(copyId);
  const body = doc.getBody();

  // 1. FILL VARIABLES
  body.replaceText("{{name}}", name); 
  body.replaceText("{{NAME}}", name); 
  
  // 2. CLEAN TEXT & REMOVE GREETINGS
  // Finds the START_MARKER (e.g., "PART 1") and discards everything before it.
  // This ensures no "Hello", "Sure, here is the report" garbage gets in.
  let startIndex = content.indexOf(PRODUCT_CONFIG.START_MARKER);
  if (startIndex === -1) {
    // Fallback: If AI didn't output "PART 1" exactly, try to find the first bold header or just use full text
    // but try to strip common greetings.
    startIndex = 0;
  }

  let cleanText = content.substring(startIndex)
    .replace(/\*\*/g, "")       // Remove markdown bold
    .replace(/^#\s/gm, "")      // Remove markdown headers
    .replace(/(^\s*[\r\n]){2,}/gm, "\n\n"); // Remove excess newlines

  // Extra safety: Remove likely greetings if they still exist at the very start
  cleanText = cleanText.replace(/^(Сайн байна уу|Hello|Hi).*?\n/i, "");

  body.replaceText("{{report}}", cleanText);
  body.replaceText("{{REPORT}}", cleanText); 

  // 3. FORMATTING (JUSTIFY)
  const paragraphs = body.getParagraphs();
  for (let p of paragraphs) {
    const text = p.getText();
    const currentAlign = p.getAlignment();
    
    if (text.trim().length > 0 && 
        currentAlign !== DocumentApp.HorizontalAlignment.CENTER && 
        currentAlign !== DocumentApp.HorizontalAlignment.RIGHT) {
        p.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
    }
  }

  doc.saveAndClose();

  const pdfBlob = UrlFetchApp.fetch(`https://docs.google.com/document/d/${copyId}/export?format=pdf`, {
    headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() }
  }).getBlob().setName(`${name} - ${PRODUCT_CONFIG.PRODUCT_NAME}.pdf`);

  const pdfFile = DriveApp.createFile(pdfBlob);
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  
  DriveApp.getFileById(copyId).setTrashed(true);

  return pdfFile.getUrl();
}

/****************************************
 * 5. DELIVERY ENGINE
 ****************************************/
function sendToManyChat(subscriberId, pdfUrl, name, token) {
  const url = "https://api.manychat.com/fb/sending/sendContent";
  const cleanId = String(subscriberId).trim();
  
  let message = PRODUCT_CONFIG.DELIVERY_MESSAGE
    .replace("{{NAME}}", name)
    .replace("{{URL}}", pdfUrl);

  const payload = {
    "subscriber_id": cleanId, 
    "data": {
      "version": "v2",
      "content": {
        "messages": [
          {
            "type": "text",
            "text": message
          }
        ]
      }
    }
  };
  
  const options = {
    "method": "post",
    "headers": { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };
  
  const response = UrlFetchApp.fetch(url, options);
  if (response.getResponseCode() !== 200) {
    throw new Error(`ManyChat Error: ${response.getContentText()}`);
  }
}

/****************************************
 * 6. UTILITIES
 ****************************************/
function sendErrorEmail(name, errorMsg) {
  if (!PRODUCT_CONFIG.SEND_ERROR_EMAILS) return;
  try {
    const adminEmail = getProperty("ADMIN_EMAIL"); 
    MailApp.sendEmail({
      to: adminEmail,
      subject: `Error: ${PRODUCT_CONFIG.PRODUCT_NAME}`,
      body: `User: ${name}\nError: ${errorMsg}`
    });
  } catch (e) { console.error(e); }
}
