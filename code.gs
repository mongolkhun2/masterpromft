/****************************************************************************************
 * MASTER TEMPLATE v4.0 (Dark Feminine - 2-Stage Ultra Long Generation)
 * 
 * [ХЭРЭГЛЭХ ЗААВАР]
 * 1. НУУЦ ТОХИРГОО (Script Properties-д оруулна):
 *    - File -> Project Settings -> Script Properties хэсэгт дараах түлхүүрүүдийг утгын хамт нэмнэ:
 *      * GEMINI_API_KEY
 *      * MANYCHAT_API_TOKEN
 *      * TEMPLATE_ID
 *      * ADMIN_EMAIL      (Алдааны мэдээлэл очих email хаяг)
 * 
 * 2. ТЕХНИКИЙН ТАЙЛБАР:
 *    - Тайланг "ХЭТ УРТ" (10,000+ токен) болгохын тулд AI-г 2 удаа дуудаж (PART 1-2, PART 3-4),
 *      үр дүнг нь нэгтгэдэг 2-шатлалт системтэй.
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
  START_MARKER: "PART 1",

  // 1.6 AI PROMPT SETTINGS
  PROMPTS: {
    // SYSTEM ROLE
    SYSTEM_ROLE: `You are the "Dark Feminine" Psychologist. You are the user's "Bestie" who is brutally honest, sassy, seductive, and empowering. You slap them with the truth to help them win. Use emojis (🍷, 🥀, 💅, 💀, ⚠️) tastefully. NO FORMAL LANGUAGE. Speak like a Queen talking to a lost Princess.`,
    
    // REFERENCE LOGIC (Shared by both parts)
    REFERENCE_CONTENT: `
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
    `,

    // STYLE EXAMPLE (Shared)
    STYLE_EXAMPLE: `
[STYLE GUIDE - MIMIC THIS TONE AND FORMAT EXACTLY]
PART 1: THE MIRROR (ТОЛЬ) 🪞
Онош: THE ANXIOUS CHASER ⚠️
За, чиний хариултыг харлаа. Бүгд л "B" гэдэг хариулт байна. Энэ юу гэсэн үг вэ гэхээр чи яг л галзуурсан хүн шиг аашилж байна гэсэн үг! Чи өөрийгөө хараагүй юу? Чи эрчүүдийн араас гүйж, тэднийг хянаж, шаардаж, өмчлөх гээд байна. ‍♀️

Эрчүүд чамайг юу гэж хардаг вэ?
* Хэрэгсэл (Tool): Чи түүнийг байнга шалгаж, хаана юу хийж байгааг нь мэдэхийг хүсдэг.
* Ээж (Mother): Чи түүнийг байнга загнаж, гомдоллодог. Энэ нь чамайг ээж шиг нь харагдуулж байна.
* Галзуу хүүхэн (Crazy Woman): Чи уурлаж, тасалж, охин руу нь хүртэл дайрдаг.

Шок эмчилгээ: Чиний энэ стратеги огт ажиллахгүй байна! Чи эрчүүдийг түлхэж байна.
`,

    // --- PART 1 TEMPLATE ---
    PART_1_TEMPLATE: `
I. ROLE: {{ROLE}}
II. DATA:
   - User Name: {{NAME}}
   - User Answers: {{DATA}}
III. TASK: Write PART 1 and PART 2 of the report.
IV. CRITICAL INSTRUCTIONS:
   1. **ANALYZE DATA**: Determine Diagnosis (Nice Girl / Anxious Chaser / Dark Feminine).
   2. **NAME & LANGUAGE**:
      - Keep Name as is (No transliteration).
      - STRICTLY MONGOLIAN. No foreign words ("ưu tiên").
   3. **CONTENT (EXTREME DEPTH)**:
      - **PART 1: THE MIRROR** (Min 800 words): Diagnosis + Deep Analysis. Don't just list points; explain the PSYCHOLOGY behind "Mother", "Tool", etc.
      - **PART 2: THE FATAL FLAW** (Min 800 words): Evolutionary Psychology. Why men run. The biology of attraction.
      - **EXPAND**: Write full paragraphs for every bullet point. Use analogies.
   4. **FORMATTING**:
      - Add a BLANK LINE after every header/section.
      - Use BOLD headers and EMOJIS (🍷, 🥀, 💅, 💀, ⚠️).
   5. **STOP**: Stop strictly after PART 2. Do NOT write Part 3 yet.
V. REFERENCE: {{REFERENCE}}
VI. STYLE: {{STYLE_EXAMPLE}}
`,

    // --- PART 2 TEMPLATE ---
    PART_2_TEMPLATE: `
I. ROLE: {{ROLE}}
II. DATA: 
   - User Name: {{NAME}}
   - User Answers: {{DATA}}
III. TASK: Write PART 3 and PART 4 of the report (Continuing from Part 2).
IV. CRITICAL INSTRUCTIONS:
   1. **CONTEXT**: The user has been diagnosed based on {{DATA}}. Continue the advice.
   2. **CONTENT (EXTREME DEPTH)**:
      - **PART 3: THE PROTOCOL** (Min 800 words): The 3 Rules (Radio Silence, Mirror, Power of No). Explain HOW to do it step-by-step. What if he calls? What if he texts? Cover all scenarios.
      - **PART 4: THE SCRIPTS** (Min 600 words): The Text Messages. Explain WHY each word works psychologically.
   3. **FORMATTING**:
      - Add a BLANK LINE after every header/section.
      - Use BOLD headers and EMOJIS.
   4. **START**: Start immediately with "**PART 3: THE PROTOCOL**". Do not say "Here is Part 3".
V. REFERENCE: {{REFERENCE}}
VI. STYLE: {{STYLE_EXAMPLE}}
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
      const inputData = row[2];
      const status = row[4];      
      const errorCell = sheet.getRange(i + 1, 6); 

      if (!name || !inputData || (status && String(status).startsWith("DONE")) || status === "Processing...") continue;

      const statusCell = sheet.getRange(i + 1, 5); 
      statusCell.setValue("Processing...");
      SpreadsheetApp.flush(); 

      try {
        console.log(`Processing user: ${name}`);

        // 1. GEMINI GENERATION (2 STAGES)
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
 * 3. AI ENGINE (2-STAGE SPLIT)
 ****************************************/
function generateReportGemini(userName, inputData, apiKey) {
  
  const variables = {
    "{{ROLE}}": PRODUCT_CONFIG.PROMPTS.SYSTEM_ROLE,
    "{{NAME}}": userName,
    "{{DATA}}": inputData,
    "{{PRODUCT_NAME}}": PRODUCT_CONFIG.PRODUCT_NAME,
    "{{REFERENCE}}": PRODUCT_CONFIG.PROMPTS.REFERENCE_CONTENT,
    "{{STYLE_EXAMPLE}}": PRODUCT_CONFIG.PROMPTS.STYLE_EXAMPLE
  };

  // --- STAGE 1: PART 1 & 2 ---
  let prompt1 = PRODUCT_CONFIG.PROMPTS.PART_1_TEMPLATE;
  for (const [key, value] of Object.entries(variables)) {
    prompt1 = prompt1.split(key).join(value);
  }
  let result1 = callGeminiAPI(prompt1, apiKey);

  // --- STAGE 2: PART 3 & 4 ---
  // Note: We use the same variables so Context/Diagnosis is consistent.
  let prompt2 = PRODUCT_CONFIG.PROMPTS.PART_2_TEMPLATE;
  for (const [key, value] of Object.entries(variables)) {
    prompt2 = prompt2.split(key).join(value);
  }
  let result2 = callGeminiAPI(prompt2, apiKey);

  // --- MERGE ---
  // Join with double newline to ensure clean separation.
  const fullText = result1.text + "\n\n" + result2.text;
  const totalTokens = (result1.usage || 0) + (result2.usage || 0);

  return { text: fullText, usage: totalTokens };
}

function callGeminiAPI(prompt, apiKey) {
  const model = PRODUCT_CONFIG.GEMINI_MODEL || "gemini-2.0-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const payload = {
    "contents": [{ "parts": [{ "text": prompt }] }],
    "generationConfig": { "temperature": 0.8, "maxOutputTokens": 8192 }
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
  let startIndex = content.indexOf(PRODUCT_CONFIG.START_MARKER);
  if (startIndex === -1) {
    startIndex = 0;
  }

  let cleanText = content.substring(startIndex)
    .replace(/\*\*/g, "")               // Remove Markdown Bold
    .replace(/^\s*\*\s/gm, "")          // Remove Bullet Points (asterisks)
    .replace(/^\s*-\s/gm, "")           // Remove Bullet Points (hyphens)
    .replace(/^#\s/gm, "")              // Remove Markdown Headers
    .replace(/(^\s*[\r\n]){2,}/gm, "\n\n"); // Normalize spacing

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
