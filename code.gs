/****************************************************************************************
 * MASTER TEMPLATE v2.4 (Бүх төрлийн бүтээгдэхүүнд ашиглах боломжтой хувилбар)
 * 
 * [ХЭРЭГЛЭХ ЗААВАР]
 * 1. НУУЦ ТОХИРГОО (Script Properties-д оруулна):
 *    - File -> Project Settings -> Script Properties хэсэгт дараах түлхүүрүүдийг утгын хамт нэмнэ:
 *      * GEMINI_API_KEY
 *      * MANYCHAT_API_TOKEN
 *      * TEMPLATE_ID
 *      * ADMIN_EMAIL      (Алдааны мэдээлэл очих email хаяг)
 * 
 * 2. ГАРЫН АВЛАГА (Доорх PRODUCT_CONFIG хэсгийг л өөрчилнө):
 *    - Prompt, Бүтээгдэхүүний нэр зэргийг энд бичнэ.
 * 
 * 3. TRIGGER (Цагийн тохиргоо):
 *    - Function: "main"
 *    - Event Source: "Time-driven"
 *    - Type: "Minutes timer" -> "Every 5 minutes"
 ****************************************************************************************/

/****************************************************************************************
 * I. PRODUCT CONFIGURATION (ЗӨВХӨН ЭНЭ ХЭСГИЙГ ӨӨРЧИЛНӨ)
 ****************************************************************************************/
const PRODUCT_CONFIG = {
  // 1.1 PRODUCT INFO
  COACH_NAME: "Саруулбат",              
  PRODUCT_NAME: "Дархлаа Сэргээх Хувийн Төлөвлөгөө", 
  SHEET_NAME: "Sheet1",
  SEND_ERROR_EMAILS: true, // Алдааны email илгээх эсэх

  // 1.2 BATCH SETTINGS (Хурд болон Ачааллын тохиргоо)
  // Нэг удаа ажиллахдаа хэдэн хүнийг боловсруулах вэ? (3-5 байхад тохиромжтой)
  BATCH_SIZE: 3, 

  // 1.3 AI PROMPT SETTINGS (AI ЗААВАР)
  PROMPTS: {
    // SYSTEM ROLE (AI хэн бэ?)
    SYSTEM_ROLE: `Professional Wellness & Immunity Coach named "Саруулбат"`,
    
    // REFERENCE MATERIAL (Загвар текст, онол, жишээ)
    REFERENCE_CONTENT: `
CONTEXT: You are writing a personalized "Immune Recovery & Energy Plan" for a client who is experiencing burnout, fatigue, and stress.
INPUT DATA: The client provides answers to 12 Yes/No questions about stress, sleep, diet, and symptoms.

GOAL: Create a HIGHLY PROFESSIONAL, EXTENSIVE, and SCIENTIFIC report. The user wants a detailed book-like experience (approx. 10+ pages in total length).

STRUCTURE & CONTENT REQUIREMENTS:

IMPORTANT: 
1. **NAME HANDLING**: If the client's name is in Latin script (e.g., "Munkhbat"), you MUST transliterate it to the CORRECT Cyrillic Mongolian spelling (e.g., "Мөнхбат", NOT "Мунхбат").
2. DO NOT greet the user ("Hello Name"). The document template already contains the greeting. Start DIRECTLY with the content (Introduction).
3. DO NOT use markdown dividers like "---" or "***". Use standard headers.

I. ORSHIL (Introduction)
   - Acknowledge their situation with empathy. 
   - Explain that their symptoms (fatigue, joint pain) are "SOS" signals, not weakness.
   - Tone: Encouraging, professional, native Mongolian.
   - AVOID: "Welcome". USE: "Таны бие танд дохио өгч байна..."

II. BODY ANALYSIS - THE 3 PILLARS OF LEAKAGE (Energy Leaks)
   *INSTRUCTION: Write LONG, DETAILED paragraphs for each section.*

   1. СТРЕССИЙН ЦИКЛИЙН ТҮГЖРЭЛ (The Stress Cycle Trap)
   - Explain Cortisol and Adrenal Fatigue.
   - Why they can't relax even after work.
   
   2. "ЧИМЭЭГҮЙ" ҮРЭВСЭЛ (Silent Inflammation)
   - Explain how stress + sugar = internal inflammation.
   - Why their immune system is distracted fighting internal fires instead of viruses.

   3. БИОЛОГИЙН ЦАГИЙН ХЯМРАЛ (Circadian Rhythm Disruption)
   - Explain Blue Light vs. Melatonin.
   - Why they wake up tired.

III. THE RECOVERY STRATEGY (FUEL, FLOW, MINDSET)
   *INSTRUCTION: Detailed scientific protocols. Explain the "Why" and "How".*
   
   1. FUEL (ТЭЖЭЭЛ)
   - Hydration protocol (Morning warm water).
   - Sugar Detox explanation.
   - Intermittent Fasting benefits for immunity.

   2. FLOW (УРСГАЛ)
   - Why intense cardio is bad for them right now.
   - Recommend "Recovery Movement" (Walking, Stretching).
   - Sun exposure benefits.

   3. MINDSET (СЭТГЭЛ ЗҮЙ)
   - Digital Sunset protocol.
   - Box Breathing technique (4-4-4-4).

IV. 7 ХОНОГИЙН ҮЙЛДЛИЙН ТӨЛӨВЛӨГӨӨ (7-Day Action Plan)
   *INSTRUCTION: This must be very detailed.*
   - **CRITICAL**: For EACH DAY (Day 1 to Day 7), provide a FULL NARRATIVE.
     - **Өглөө:** Hydration, Light movement, Breakfast.
     - **Өдөр:** Lunch choice, Stress management micro-break.
     - **Орой:** Digital detox routine, Dinner, Sleep prep.
   - **AVOID SHORT BULLET POINTS**. Write as if you are coaching them in person.

V. БАГШИЙН ЗӨВЛӨГӨӨ (Conclusion)
   - Powerful motivating closing.
   - Sign-off: "Таны Wellness Ментор Саруулбат"

TONE:
- Native Mongolian (Natural flow, correct grammar).
- Warm but authoritative.
    `,

    // PROMPT PART 1: ANALYSIS (Оршил -> Стратеги)
    PART_1_TEMPLATE: `
I. ROLE: {{ROLE}}
II. CLIENT: {{NAME}} (Transliterate Latin to Cyrillic if needed)
III. DATA: {{DATA}}
IV. TASK: Write PART 1 of "{{PRODUCT_NAME}}".
V. SCOPE:
   - Section I: Introduction (Direct start, no greetings).
   - Section II: THE 3 PILLARS OF LEAKAGE (Detailed explanation of Cortisol, Inflammation, Melatonin).
   - Section III: THE RECOVERY STRATEGY (Detailed protocols for Hydration, Fasting, Movement, Breathing).
   - **DETAIL**: Write extensive paragraphs. Avoid bullet points where possible.
   - STOP STRICTLY after Section III.
VI. NEGATIVE CONSTRAINTS:
   - **DO NOT** write Section IV (7-Day Plan).
   - **DO NOT** write "IV. 7 ХОНОГИЙН ҮЙЛДЛИЙН ТӨЛӨВЛӨГӨӨ".
   - **STOP** immediately after the Breathing technique.
VII. REFERENCE: {{REFERENCE}}
`,

    // PROMPT PART 2: ACTION PLAN (7 хоногийн төлөвлөгөө -> Төгсгөл)
    PART_2_TEMPLATE: `
I. ROLE: {{ROLE}}
II. CLIENT: {{NAME}}
III. CONTEXT: Continue from Section III.
IV. TASK: Write PART 2 of "{{PRODUCT_NAME}}".
V. SCOPE:
   - Section IV: 7-DAY ACTION PLAN (Day 1 - Day 7).
   - Section V: Conclusion & Advice.
   - **INSTRUCTION**: This is the core. IT MUST BE LONG AND DETAILED.
   - **DO NOT USE SHORT LISTS**. For each time slot (Morning, Afternoon, Evening), write 2-3 sentences explaining the "What" and "Why".
VI. STRICT FORMAT:
   - START DIRECTLY with the header: "IV. 7 ХОНОГИЙН ҮЙЛДЛИЙН ТӨЛӨВЛӨГӨӨ".
   - NO "Here is Part 2".
   - NO introductory text.
VII. REFERENCE: {{REFERENCE}}
`
  }
};

/****************************************************************************************
 * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
 * II. SYSTEM ENGINE (ЭНДЭЭС ДООШ ГАР ХҮРЭХ ШААРДЛАГАГҮЙ !!!)
 * "Master Template" Logic: Queue System, PDF Generator, API Handler
 * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
 ****************************************************************************************/

// PROPERTIES HELPER (Нууц тохиргоог татах)
function getProperty(key) {
  const val = PropertiesService.getScriptProperties().getProperty(key);
  if (!val) throw new Error(`MISSING SCRIPT PROPERTY: ${key}. Please set it in File > Project Settings.`);
  return val;
}

function main() {
  const lock = LockService.getScriptLock();
  // Try to get lock for 10 seconds. If busy, exit silent (the next trigger will pick it up).
  if (!lock.tryLock(10000)) {
    console.log("System busy, skipping this run.");
    return;
  }

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(PRODUCT_CONFIG.SHEET_NAME);
    if (!sheet) throw new Error(`${PRODUCT_CONFIG.SHEET_NAME} олдсонгүй!`);

    const rows = sheet.getDataRange().getValues();
    let processedCount = 0;
    
    // Get Keys once per batch
    const KEYS = {
      GEMINI: getProperty("GEMINI_API_KEY"),
      MANYCHAT: getProperty("MANYCHAT_API_TOKEN"),
      TEMPLATE: getProperty("TEMPLATE_ID")
    };

    // Iterate through rows (Skip header)
    for (let i = 1; i < rows.length; i++) {
      
      // BATCH LIMIT CHECK (Prevent Timeout)
      if (processedCount >= PRODUCT_CONFIG.BATCH_SIZE) {
        console.log(`Batch limit (${PRODUCT_CONFIG.BATCH_SIZE}) reached. Stopping for now.`);
        break; 
      }

      const row = rows[i];
      const name = row[0];        // A: Name
      const contactID = row[1];   // B: ID
      const inputData = row[2];   // C: Data
      const status = row[4];      // E: Status
      const errorCell = sheet.getRange(i + 1, 6); // F: Error Log

      // QUEUE LOGIC: Process only if status is Empty or "PENDING"
      if (!name || !inputData || (status && String(status).startsWith("DONE")) || status === "Processing...") continue;

      // Mark as Processing
      const statusCell = sheet.getRange(i + 1, 5); // E
      statusCell.setValue("Processing...");
      SpreadsheetApp.flush(); 

      try {
        console.log(`Processing user: ${name}`);

        // 1. GEMINI GENERATION
        let reportText = generateReportGemini(name, inputData, KEYS.GEMINI);

        // 2. PDF GENERATION
        let pdfUrl = createPdfFromTemplate(name, reportText, KEYS.TEMPLATE);

        // 3. SEND TO MANYCHAT
        sendToManyChat(contactID, pdfUrl, name, KEYS.MANYCHAT);

        // 4. FINALIZE
        sheet.getRange(i + 1, 4).setValue(pdfUrl); // D: URL
        
        // Add Timestamp to DONE status
        const now = new Date();
        const timeString = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
        statusCell.setValue(`DONE (${timeString})`);
        
        errorCell.setValue(""); // Clear previous errors
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
 * 3. AI ENGINE (GENERIC)
 ****************************************/
function generateReportGemini(userName, inputData, apiKey) {
  
  const variables = {
    "{{ROLE}}": PRODUCT_CONFIG.PROMPTS.SYSTEM_ROLE,
    "{{NAME}}": userName,
    "{{DATA}}": inputData,
    "{{PRODUCT_NAME}}": PRODUCT_CONFIG.PRODUCT_NAME,
    "{{REFERENCE}}": PRODUCT_CONFIG.PROMPTS.REFERENCE_CONTENT
  };

  // BUILD & CALL PART 1
  let prompt1 = PRODUCT_CONFIG.PROMPTS.PART_1_TEMPLATE;
  for (const [key, value] of Object.entries(variables)) {
    prompt1 = prompt1.split(key).join(value);
  }
  let result1 = callGeminiAPI(prompt1, apiKey);

  // BUILD & CALL PART 2
  let prompt2 = PRODUCT_CONFIG.PROMPTS.PART_2_TEMPLATE;
  for (const [key, value] of Object.entries(variables)) {
    prompt2 = prompt2.split(key).join(value);
  }
  let result2 = callGeminiAPI(prompt2, apiKey);

  return result1.text + "\n\n" + result2.text;
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
          text: json.candidates[0].content.parts[0].text
      };
  }
  throw new Error("Gemini No Candidates: " + res.getContentText());
}

/****************************************
 * 4. PDF ENGINE (GENERIC)
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
  let cleanText = content
    .replace(/\*\*/g, "")       
    .replace(/\*/g, "")         
    .replace(/##/g, "")         
    .replace(/^#\s/gm, "")      
    .replace(/[-_]{3,}/g, "")   
    .replace(/(^\s*[\r\n]){2,}/gm, "\n\n")
    .replace(/([IVX]+\.\s)/g, "\n\n$1"); 
    
  body.replaceText("{{report}}", cleanText);
  body.replaceText("{{REPORT}}", cleanText); 

  // 3. FORMATTING (JUSTIFY)
  const paragraphs = body.getParagraphs();
  for (let p of paragraphs) {
    const currentAlign = p.getAlignment();
    if (p.getText().trim().length > 0 && 
        currentAlign !== DocumentApp.HorizontalAlignment.CENTER && 
        currentAlign !== DocumentApp.HorizontalAlignment.RIGHT) {
        p.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
    }
  }
  const listItems = body.getListItems();
  for (let item of listItems) {
      item.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  }

  doc.saveAndClose();

  // 4. EXPORT PDF
  const pdfBlob = UrlFetchApp.fetch(`https://docs.google.com/document/d/${copyId}/export?format=pdf`, {
    headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() }
  }).getBlob().setName(`${name} - ${PRODUCT_CONFIG.PRODUCT_NAME}.pdf`);

  const pdfFile = DriveApp.createFile(pdfBlob);
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  
  // Cleanup
  DriveApp.getFileById(copyId).setTrashed(true);

  return pdfFile.getUrl();
}

/****************************************
 * 5. DELIVERY ENGINE (MANYCHAT)
 ****************************************/
function sendToManyChat(subscriberId, pdfUrl, name, token) {
  const url = "https://api.manychat.com/fb/sending/sendContent";
  
  const cleanId = String(subscriberId).trim();
  if (!cleanId) throw new Error("Subscriber ID is empty.");
  if (cleanId.toUpperCase().includes("E+")) {
     throw new Error(`INVALID ID FORMAT: '${cleanId}'. Check Google Sheet formatting.`);
  }

  const payload = {
    "subscriber_id": cleanId, 
    "data": {
      "version": "v2",
      "content": {
        "messages": [
          {
            "type": "text",
            "text": `Сайн байна уу, ${name}? 🌱\n\nТаны "${PRODUCT_CONFIG.PRODUCT_NAME}" бэлэн боллоо. Доорх линк дээр дарж татаж авна уу: 👇\n\n${pdfUrl}`
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
  const responseBody = response.getContentText();

  if (response.getResponseCode() !== 200) {
    throw new Error(`ManyChat HTTP Error: ${responseBody}`);
  }

  let json;
  try { json = JSON.parse(responseBody); } catch(e) { throw new Error("Invalid JSON from ManyChat"); }

  if (json.status !== "success") {
    if (responseBody.includes("Subscriber does not exist")) {
       throw new Error(`Subscriber ID '${cleanId}' not found.`);
    }
    throw new Error(`ManyChat API Error: ${responseBody}`);
  }
}

/****************************************
 * 6. UTILITIES
 ****************************************/
function sendErrorEmail(name, errorMsg) {
  if (!PRODUCT_CONFIG.SEND_ERROR_EMAILS) return;
  
  try {
    const adminEmail = getProperty("ADMIN_EMAIL"); // Get email from Script Properties
    MailApp.sendEmail({
      to: adminEmail,
      subject: `Error: ${PRODUCT_CONFIG.PRODUCT_NAME}`,
      body: `User: ${name}\nError: ${errorMsg}`
    });
  } catch (e) {
    console.error("Failed to send error email: " + e.toString());
  }
}
