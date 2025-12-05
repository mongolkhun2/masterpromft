/****************************************************************************************
 * MASTER TEMPLATE v2.7 (Money Edition - Strict Order)
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
 *    - Энэ код нь "Утасны Дугаарын Зурхай" (Digital Destiny) гаргахад зориулагдсан.
 *    - ЗӨВХӨН "Мөнгө & Бизнес" чиглэлээр тайлан гаргана.
 * 
 * 3. TRIGGER (Цагийн тохиргоо):
 *    - Function: "main"
 *    - Event Source: "Time-driven"
 *    - Type: "Minutes timer" -> "Every 5 minutes"
 ****************************************************************************************/

/****************************************************************************************
 * I. PRODUCT CONFIGURATION (ГАР УТАСНЫ ЗУРХАЙН ТУСГАЙ ТОХИРГОО)
 ****************************************************************************************/
const PRODUCT_CONFIG = {
  // 1.1 PRODUCT INFO
  COACH_NAME: "Digital Numerologist",              
  PRODUCT_NAME: "Digital Destiny - Утасны Дугаарын Зурхай", 
  SHEET_NAME: "Sheet1",
  SEND_ERROR_EMAILS: true,

  // 1.2 BATCH SETTINGS
  BATCH_SIZE: 3, 

  // 1.3 AI PROMPT SETTINGS
  PROMPTS: {
    // SYSTEM ROLE
    SYSTEM_ROLE: `Expert Numerologist and Eastern Astrologer specializing in "Digital Feng Shui" and Mobile Number Analysis.`,
    
    // REFERENCE MATERIAL (Focused ONLY on Money/Business)
    REFERENCE_CONTENT: `
CONTEXT: You are writing a "Mobile Number Horoscope Report" (8 pages long).
FOCUS: Wealth, Career, Business Success, and Energy Management.
TONE: Mystical yet Scientific, authoritative, direct ("Та"), and highly professional. 
FORMATTING: Use EXACTLY the same structure, headers, and EMOJIS as the examples below.
**CRITICAL**: DO NOT output any introductory text like "Here is the report". START DIRECTLY with the content.

KEY ANALYSIS LOGIC (USE THIS LOGIC FOR THE USER):
1. **Element Calculation**: 1,6=Water; 2,7=Fire; 3,8=Wood; 4,9=Metal; 5,0=Earth (Adjust based on standard numerology if needed, but the user implies 9=Fire, 6=Metal).
   - *USER'S LOGIC*: 9 is Fire (High Energy), 6 is Metal (Money), 7 is Knowledge/Strategy, 4 is Hard Work.
2. **Yang/Yin**: Odd=Yang (Speed/Male), Even=Yin (Stability/Female).
3. **Sum Calculation (Soul Number)**: Sum of all digits -> reduce to single digit (or 11/22).
   - Sum 4 = Hard Work (No luck, just system).
   - Sum 11 = Mystic/Diplomat.
4. **Last 2 Digits**: The "Money Code" or "Ending".
   - 76 = Strategic Wealth (Mind over Muscle).
   - 99 = High Stress.

REQUIRED STRUCTURE (6 SECTIONS):

I ХЭСЭГ: ЭНЕРГИЙН ПАСПОРТ 🆔
- 1. ЭЛЕМЕНТИЙН ТООЦООЛОЛ (Total count of dominant numbers) 🔥
- 2. ЯН/ИНЬ БАЛАНС (Odd vs Even ratio) ⚡
- 3. СҮНСНИЙ ТООНЫ БОДОЛТ (Sum of digits) 🏗️
- 4. ТӨГСГӨЛИЙН КОД (Analysis of last 2 digits) 💎
- ШИНЖЭЭЧИЙН ДҮГНЭЛТ 🕵️‍♂️

II ХЭСЭГ: КОДНЫ ГАЖУУДАЛ БА СҮҮДЭР ТАЛ ⚠️
- Analyze negative aspects regarding MONEY & CAREER: "Hidden Glitch", "Burnout", "Financial Leakage".
- Mention "Energy Leakage" if elements conflict (e.g. Fire melts Metal = Money loss).
- ШИНЖЭЭЧИЙН ДҮГНЭЛТ 📉

III ХЭСЭГ: ХУВЬ ХҮН БА ДУГААРЫН ЗӨРЧИЛ ⚔️
- Compare User's Birth Year/Date (Life Path) vs The Phone Number.
- Example: "You are a Water person (Rat), but your number is Fire. This causes conflict."

IV ХЭСЭГ: НУУЦ БОЛОМЖ БА БАЯЖИХ КОД 💎
- Identify the strongest career path based on the number.
- "Smart Money" vs "Hard Money".
- ШИНЖЭЭЧИЙН ЗӨВЛӨМЖ 📈

V ХЭСЭГ: ЭНЕРГИЙН ЗАСАЛ БА ИДЭВХЖҮҮЛЭЛТ 🛡️
- **CRITICAL**: Provide "Cures" for Wealth Protection.
- 1. Wallpaper advice (e.g., Earth element to bridge Fire and Metal). 🏔️
- 2. Дэлгэцийн түгжээ тайлах код (4 эсвэл 6 оронтой тоо байх ёстой, нийлбэр нь 5 эсвэл 8 байна). 🔢
- 3. Digital Cleaning. 🗑️
- 4. Physical Screen integrity (No cracks!). 📱

VI ХЭСЭГ: АШИГЛАХ ЗААВАР & ЦАГЛАБАР 🕹️
- 1. Golden Hour (Best time to call/sales). ⏳
- 2. Danger Zone (When to put phone away). 🚫
- 3. Activation Mantra. 🗣️
- 4. Technical Maintenance. 🛡️
- 🏁 ЭЦСИЙН ДҮГНЭЛТ: "THE MATRIX CLOSED"

IMPORTANT:
- Use the emojis provided in the headers (🆔, 🔥, ⚡, etc.) EXACTLY.
- Text must be long, detailed, and "Book-like" (Justified alignment is handled by the script, but you must provide the text blocks).
- Do not use Markdown bold (**text**) excessively in the body, but use it for sub-headers.
    `,

    // PROMPT PART 1: SECTIONS I, II, III
    PART_1_TEMPLATE: `
I. ROLE: {{ROLE}}
II. DATA: 
   - User Name: {{NAME}}
   - Phone Number & Inputs: {{DATA}}
III. TASK: Write PART 1 (Sections I, II, III) of the Report.
IV. CRITICAL INSTRUCTIONS (MUST FOLLOW):
   1. **DATA PARSING (STRICT ORDER)**:
      - The {{DATA}} field contains text in this order: **Gender, DOB, Phone** (e.g., "Male, 1996.10.30, 99445342"). 
      - **YOU MUST EXTRACT 3 VALUES**:
        - **1. GENDER**: Look for "Male/Эрэгтэй" or "Female/Эмэгтэй". 
          - *Logic*: Use Gender to analyze Yin/Yang Balance. (Female + High Yang = Stress).
        - **2. DOB**: Find the Date of Birth (e.g., 19961030, 96/10/30). Convert to YYYY-MM-DD.
        - **3. PHONE**: Find the phone number (e.g., 99xxxxxx).
   2. **ACCURACY (CALCULATION)**: 
      - Use the EXTRACTED Phone Number for all calculations.
      - Use the EXTRACTED DOB for Section III (Conflict).
   3. **LENGTH & DETAIL**: 
      - **DO NOT SUMMARIZE.** The user wants an extensive, book-quality report.
      - Each subsection (e.g., 1.1, 1.2) must be a full, deep paragraph (approx 150-200 words each).
      - Total length for Part 1 should be substantial (approx 3-4 pages).
   4. **FORMATTING**:
      - **NO MARKDOWN BULLETS** (like * or -). Do not make it look like a list.
      - Use the provided EMOJIS (🔥, ⚡, etc.) as the ONLY visual markers.
      - Write in a "Narrative Flow" (Essays, not notes).
   5. **SCOPE**:
      - Write Section I (Passport), Section II (Glitches), Section III (Conflict).
      - STOP strictly after Section III.
V. REFERENCE (STYLE & LOGIC GUIDE): {{REFERENCE}}
`,

    // PROMPT PART 2: SECTIONS IV, V, VI
    PART_2_TEMPLATE: `
I. ROLE: {{ROLE}}
II. DATA: 
   - User Name: {{NAME}}
   - Phone Number & Inputs: {{DATA}}
III. TASK: Write PART 2 (Sections IV, V, VI) of the Report.
IV. CRITICAL INSTRUCTIONS (MUST FOLLOW):
   1. **FOCUS**:
      - This report is STRICTLY about **MONEY, BUSINESS & CAREER**. 
   2. **CONTINUITY**: 
      - Continue immediately from Section IV. Do not repeat Intro.
   3. **LENGTH & DETAIL**:
      - **EXTREME DETAIL REQUIRED.** Do not give short advice.
      - Section IV, V, and VI must cover approx 3-4 pages total.
   4. **FORMATTING**:
      - **NO MARKDOWN LISTS.** Write full, justified paragraphs.
      - Use exact EMOJIS from reference.
   5. **CONTENT**:
      - Section IV: Wealth Code.
      - Section V: Wealth Protection Cures.
      - Section VI: Business Timing.
   6. **Language**: Mongolian (Cyrillic).
V. REFERENCE (STYLE & LOGIC GUIDE): {{REFERENCE}}
`
  }
};

/****************************************************************************************
 * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
 * II. SYSTEM ENGINE (STANDARD)
 * No changes needed here for the logic, but we ensure it supports the new config.
 * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
 ****************************************************************************************/

// PROPERTIES HELPER
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

  let prompt1 = PRODUCT_CONFIG.PROMPTS.PART_1_TEMPLATE;
  for (const [key, value] of Object.entries(variables)) {
    prompt1 = prompt1.split(key).join(value);
  }
  let result1 = callGeminiAPI(prompt1, apiKey);

  let prompt2 = PRODUCT_CONFIG.PROMPTS.PART_2_TEMPLATE;
  for (const [key, value] of Object.entries(variables)) {
    prompt2 = prompt2.split(key).join(value);
  }
  let result2 = callGeminiAPI(prompt2, apiKey);

  const totalTokens = (result1.usage || 0) + (result2.usage || 0);
  return { text: result1.text + "\n\n" + result2.text, usage: totalTokens };
}

function callGeminiAPI(prompt, apiKey) {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey;
  const payload = {
    "contents": [{ "parts": [{ "text": prompt }] }],
    "generationConfig": { "temperature": 0.7, "maxOutputTokens": 8192 } 
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
  
  // 2. CLEAN TEXT
  // Only remove strict markdown that might break formatting, but keep structure.
  // Also clean AI chatter before the first section.
  let startIndex = content.indexOf("I ХЭСЭГ");
  if (startIndex === -1) startIndex = 0;

  let cleanText = content.substring(startIndex)
    .replace(/\*\*/g, "")       
    .replace(/^#\s/gm, "")      
    .replace(/(^\s*[\r\n]){2,}/gm, "\n\n");
    // We keep headers intact as plain text if they are not using Markdown headers
    
  body.replaceText("{{report}}", cleanText);
  body.replaceText("{{REPORT}}", cleanText); 

  // 3. FORMATTING (JUSTIFY)
  const paragraphs = body.getParagraphs();
  for (let p of paragraphs) {
    const text = p.getText();
    const currentAlign = p.getAlignment();
    
    // Auto-detect headers based on content patterns (e.g., "I ХЭСЭГ", "1.")
    // If it looks like a header, we can make it bold (optional, requires more complex logic)
    // For now, we ensure body text is Justified.
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
  
  const payload = {
    "subscriber_id": cleanId, 
    "data": {
      "version": "v2",
      "content": {
        "messages": [
          {
            "type": "text",
            "text": `✨ Сайн байна уу, ${name}? \n\nТаны "Дижитал Зурхай" бэлэн боллоо. 🔮\n\nДоорх линк дээр дарж татаж авна уу: 👇\n\n${pdfUrl}`
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
