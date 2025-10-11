# श्रीमद्भगवद्गीता - जीवन कौशल के अध्याय वेबसाइट

एक सुंदर और आधुनिक वेबसाइट जो भगवद्गीता के चुनिंदा अध्यायों को विद्यार्थियों के लिए प्रस्तुत करती है।

## विशेषताएं

- 📚 **4 संपूर्ण अध्याय** - मोह, परिस्थिति का स्वरूप, नित्य/अनित्य का भेद, और उद्देश्य परिवर्तन
- 🕉️ **संस्कृत श्लोक** - मूल श्लोकों के साथ हिंदी अनुवाद
- 📖 **कहानियां और उदाहरण** - प्रत्येक अध्याय में शिक्षाप्रद कहानियां
- 💡 **व्यावहारिक शिक्षाएं** - जीवन में लागू करने योग्य ज्ञान
- 🎨 **सुंदर UI/UX** - आकर्षक और उपयोगकर्ता-अनुकूल डिजाइन
- 📱 **रेस्पॉन्सिव** - मोबाइल, टैबलेट और डेस्कटॉप पर बेहतरीन अनुभव
- ⚡ **तेज़ और हल्का** - Vue 3 और Vite के साथ निर्मित

## भविष्य की सुविधाएं (आगामी)

- 🔐 **सदस्यता प्रणाली** - उपयोगकर्ता पंजीकरण और लॉगिन
- 💳 **Paywall** - प्रीमियम सामग्री के लिए भुगतान प्रणाली
- 🔍 **उन्नत खोज** - अध्यायों में खोज की सुविधा
- 🔖 **बुकमार्क** - पसंदीदा अध्याय सहेजें
- 📝 **नोट्स** - व्यक्तिगत नोट्स जोड़ें
- 🌙 **डार्क मोड** - रात में पढ़ने के लिए

## तकनीकी जानकारी

### उपयोग की गई तकनीकें

- **Vue 3** - प्रोग्रेसिव JavaScript फ्रेमवर्क
- **Vue Router** - SPA नेविगेशन
- **Vite** - तेज़ बिल्ड टूल
- **Noto Sans Devanagari** - सुंदर हिंदी फ़ॉन्ट
- **Tiro Devanagari Hindi** - संस्कृत श्लोकों के लिए

## Deployment to GitHub Pages

### Setup Steps:

1. **Create a GitHub Repository:**
   - Go to GitHub.com and create a new repository
   - Name it `gita-lessons` (or any name you prefer)
   - Don't initialize with README (we already have one)

2. **Link Your Local Repository to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/gita-lessons.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - Save the settings

4. **Automatic Deployment:**
   - The workflow is already configured in `.github/workflows/deploy.yml`
   - Every push to `main` branch will automatically build and deploy
   - Your site will be live at: `https://YOUR_USERNAME.github.io/gita-lessons/`

### Manual Deployment Commands:

If you want to deploy manually:

```bash
# Build the project
npm run build

# The dist folder contains your production files
```

### Update Base Path (if needed):

If your repository name is different from `gita-lessons`, update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/YOUR_REPO_NAME/',
  // ... other config
})
```

## इंस्टॉलेशन और सेटअप

### आवश्यकताएं

- Node.js (v16 या उच्चतर)
- npm या yarn

### सेटअप चरण

1. **Dependencies इंस्टॉल करें:**
   ```bash
   npm install
   ```

2. **Development सर्वर शुरू करें:**
   ```bash
   npm run dev
   ```
   
   वेबसाइट `http://localhost:3000` पर खुल जाएगी

3. **Production बिल्ड बनाएं:**
   ```bash
   npm run build
   ```

4. **Production प्रीव्यू:**
   ```bash
   npm run preview
   ```

## प्रोजेक्ट स्ट्रक्चर

```
gita-website/
├── public/              # स्टैटिक फ़ाइलें
├── src/
│   ├── components/      # Vue कॉम्पोनेन्ट्स
│   │   ├── Header.vue   # हेडर नेविगेशन
│   │   └── Footer.vue   # फुटर
│   ├── views/           # पेज व्यूज़
│   │   ├── Home.vue     # होम पेज (पाठ सूची)
│   │   └── LessonView.vue  # व्यक्तिगत पाठ पेज
│   ├── data/
│   │   └── lessons.js   # सभी पाठों का डेटा
│   ├── App.vue          # मुख्य ऐप कॉम्पोनेन्ट
│   ├── main.js          # ऐप एंट्री पॉइंट
│   └── style.css        # ग्लोबल स्टाइल्स
├── index.html           # HTML टेम्पलेट
├── vite.config.js       # Vite कॉन्फ़िगरेशन
└── package.json         # प्रोजेक्ट मेटाडेटा

```

## भविष्य में Paywall और Subscription जोड़ना

यह प्रोजेक्ट भविष्य में निम्नलिखित सुविधाओं को जोड़ने के लिए तैयार है:

### 1. Authentication
- Firebase Authentication या JWT-based auth
- User registration और login pages
- Protected routes

### 2. Subscription Management
- Stripe या Razorpay integration
- Subscription plans (monthly, yearly)
- Payment processing

### 3. Content Protection
- Middleware for route protection
- API endpoints for premium content
- User subscription status verification

### सुझावित स्ट्रक्चर:
```javascript
// Future structure
src/
├── middleware/
│   └── auth.js          // Authentication middleware
├── services/
│   ├── auth.service.js  // Auth API calls
│   └── payment.service.js  // Payment processing
├── store/               // Vuex/Pinia state management
│   ├── auth.js
│   └── user.js
└── views/
    ├── Login.vue
    ├── Register.vue
    └── Subscription.vue
```

## योगदान

इस प्रोजेक्ट में योगदान देने के लिए:

1. Repository को Fork करें
2. नई feature branch बनाएं (`git checkout -b feature/AmazingFeature`)
3. अपने changes commit करें (`git commit -m 'Add some AmazingFeature'`)
4. Branch को Push करें (`git push origin feature/AmazingFeature`)
5. Pull Request खोलें

## लाइसेंस

© 2025 श्रीमद्भगवद्गीता जीवन कौशल के अध्याय। सर्वाधिकार सुरक्षित।

## संपर्क

प्रश्नों या सुझावों के लिए कृपया संपर्क करें।

---

**नोट:** यह वेबसाइट शैक्षिक उद्देश्यों के लिए है और भगवद्गीता की शिक्षाओं को विद्यार्थियों के लिए आधुनिक तरीके से प्रस्तुत करती है। इसका उद्देश्य छात्रों में जीवन कौशल, नैतिक मूल्य और सकारात्मक सोच विकसित करना है।
