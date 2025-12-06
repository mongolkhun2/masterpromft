/****************************************************************************************
 * MASTER TEMPLATE v3.1 (Dark Feminine - Ultra Long)
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
  START_MARKER: "PART 1",

  // 1.6 AI PROMPT SETTINGS
  PROMPTS: {
    // SYSTEM ROLE
    SYSTEM_ROLE: `You are the "Dark Feminine" Psychologist. You are the user's "Bestie" who is brutally honest, sassy, seductive, and empowering. You slap them with the truth to help them win. Use emojis (🍷, 🥀, 💅, 💀, ⚠️) tastefully. NO FORMAL LANGUAGE. Speak like a Queen talking to a lost Princess.`,
    
    // STYLE EXAMPLE (The "Golden Standard" text provided by user)
    STYLE_EXAMPLE: `
PART 1: THE MIRROR (ТОЛЬ) 🪞
Онош: THE ANXIOUS CHASER ⚠️
За, чиний хариултыг харлаа. Бүгд л "B" гэдэг хариулт байна. Энэ юу гэсэн үг вэ гэхээр чи яг л галзуурсан хүн шиг аашилж байна гэсэн үг! Чи өөрийгөө хараагүй юу? Чи эрчүүдийн араас гүйж, тэднийг хянаж, шаардаж, өмчлөх гээд байна. ‍♀️ Чиний энэ байдал эрчүүдийг айлгаж байгааг ойлгох хэрэгтэй. Чи бол яг л хавч шиг, хавчиж, атгаж, амьсгалуулахгүй байна.

Эрчүүд чамайг юу гэж хардаг вэ?
* Хэрэгсэл (Tool): Чи түүнийг байнга шалгаж, хаана юу хийж байгааг нь мэдэхийг хүсдэг. Энэ нь чамайг түүний хэрэгцээг хангадаг хэрэгсэл болгож харагдуулж байна.
* Ээж (Mother): Чи түүнийг байнга загнаж, гомдоллодог. Энэ нь чамайг ээж шиг нь харагдуулж байна. Ээж нь эрчүүдэд таалагддаггүй шүү дээ, ойлгооч!
* Галзуу хүүхэн (Crazy Woman): Чи уурлаж, тасалж, охин руу нь хүртэл дайрдаг. Энэ нь чамайг галзуу хүүхэн шиг харагдуулж байна. Хэн галзуу хүүхэнтэй хамт байхыг хүсэх вэ? 💀

Шок эмчилгээ: Чиний энэ стратеги огт ажиллахгүй байна! Чи эрчүүдийг түлхэж байна. Тэд чамаас зугтаж байна. Чи өөрийгөө үнэ цэнэгүй болгож байна. Чи өөрийнхөө аз жаргалыг эрчүүдээс хамааралтай болгож байна. ⚠️ Чи өөрчлөгдөхгүй бол ганцаараа үлдэх болно.

PART 2: THE FATAL FLAW (ГАШУУН ҮНЭН) 🥀
Эволюцийн сэтгэл зүй: Яагаад эрчүүд чамаас зугтдаг вэ?
Эрчүүд бол анчид. Тэд олзоо хөөж, барьж авахыг хүсдэг. Чи бол олзоо өөрөө барьж өгч байгаатай адилхан. Чи хөөцөлдөх боломжийг нь үгүй хийж байна. Ан хийх сонирхолгүй болсон анчин яах вэ? Мэдээж, зугтана! Тэд хөөцөлдөх хүсэлтэй өөр "олз"-ыг хайна. 🍷

"Ээж" занга: Хэтэрхий их халамжлах нь яагаад хүслийг үгүй хийдэг вэ?
Эрчүүд халамж хүсдэггүй гэсэн үг биш. Гэхдээ чи хэтэрхий их халамжлаад байна. Чи түүний бүх хэрэгцээг хангаж, түүний төлөө бүх зүйлийг хийж байна. Энэ нь түүнийг чамаас хамааралтай болгож, тачаангуй байдлыг үгүй хийж байна. Тэр чамайг ээж шиг нь хардаг болно. Чи бол ээж биш, харин хатан байх ёстой!

Айдсын үнэр: Эрчүүд яагаад цөхрөлийг үнэрлэдэг вэ?
Эрчүүд цөхрөлийг үнэрлэж чаддаг. Энэ бол феромонтой холбоотой зүйл биш, харин чиний үйлдэл, хандлагатай холбоотой. Чи түүнд хэтэрхий их анхаарал хандуулж, түүний зөвшөөрлийг авах гэж хичээж, түүнгүйгээр амьдарч чадахгүй байгаагаа харуулж байна. Энэ нь чамайг сул дорой, үнэ цэнэгүй харагдуулж байна. Эрчүүд хүчтэй, өөртөө итгэлтэй эмэгтэйг хүсдэг. 🥀
`,

    // REFERENCE MATERIAL (Logic)
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

    FULL_REPORT_TEMPLATE: `
I. ROLE: {{ROLE}}
II. DATA: 
   - User Name: {{NAME}}
   - User Answers (12 Questions): {{DATA}}
III. TASK: Write the FULL REPORT (PART 1, PART 2, PART 3, PART 4).
IV. STYLE GUIDE (MIMIC THIS EXACTLY):
   {{STYLE_EXAMPLE}}
V. CRITICAL INSTRUCTIONS:
   1. **ANALYZE DATA FIRST**: Count A, B, C from {{DATA}}. Determine the Diagnosis.
   2. **LENGTH & DEPTH (VERY IMPORTANT)**:
      - The user complained the previous report was too short.
      - **YOU MUST EXPAND**. Do not just write 2 sentences per point. Write a paragraph for each bullet point.
      - **PART 1**: Diagnosis & Analysis (Min 400 words). Roast them hard.
      - **PART 2**: The Truth (Min 400 words). Deep evolutionary psychology.
      - **PART 3**: The Protocol (Min 400 words). Detailed instructions for the 3 rules.
      - **PART 4**: The Scripts (Min 300 words). The exact scripts + explanation why they work.
   3. **FORMATTING**:
      - Use BOLD headers.
      - Use EMOJIS (🍷, 🥀, 💅, 💀, ⚠️) exactly like the Style Guide.
      - Language: Mongolian (Cyrillic).
   4. **NO GREETINGS**: Start immediately with "PART 1: THE MIRROR".
VI. REFERENCE LOGIC: {{REFERENCE}}
VII. STYLE EXAMPLE: {{STYLE_EXAMPLE}}
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
    "{{REFERENCE}}": PRODUCT_CONFIG.PROMPTS.REFERENCE_CONTENT,
    "{{STYLE_EXAMPLE}}": PRODUCT_CONFIG.PROMPTS.STYLE_EXAMPLE
  };

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
    .replace(/^\s*\*\s/gm, "")          // Remove Bullet Points (asterisks at start of line)
    .replace(/^\s*-\s/gm, "")           // Remove Bullet Points (hyphens at start of line)
    .replace(/^#\s/gm, "")              // Remove Markdown Headers
    .replace(/(^\s*[\r\n]){2,}/gm, "\n\n"); // Remove excess newlines

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
