<template>
  <div class="home">
    <div class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="fade-in main-heading">गीता के गूढ़ ज्ञान को सरल भाषा में समझें</h1>
          <p class="hero-description-main">
            विद्यार्थियों के लिए प्रत्येक अध्याय में श्लोक, कहानियां, और जीवन में उपयोगी शिक्षाएं
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="lessons-grid">
        <div 
          v-for="lesson in lessons" 
          :key="lesson.id"
          class="lesson-card card fade-in"
          @click="goToLesson(lesson.id)"
        >
          <div class="lesson-image" :class="'lesson-image-' + lesson.id"></div>
          <div class="lesson-content">
            <div class="lesson-number">अध्याय {{ lesson.id }}</div>
            <h2>{{ lesson.title }}</h2>
            <p class="lesson-subtitle">{{ lesson.subtitle }}</p>
            <button class="btn btn-primary">अध्याय पढ़ें</button>
          </div>
        </div>
      </div>

      <div class="info-section">
        <div class="card">
          <h2>🙏 विद्यार्थियों के लिए इन अध्यायों के बारे में</h2>
          <p>
            ये अध्याय श्रीमद्भगवद्गीता के चुनिंदा श्लोकों पर आधारित हैं। प्रत्येक अध्याय में:
          </p>
          <ul class="features-list">
            <li>📜 मूल संस्कृत श्लोक और हिंदी अनुवाद</li>
            <li>💡 व्यावहारिक जीवन में उपयोग</li>
            <li>📖 प्रेरक कहानियां और उदाहरण</li>
            <li>🤔 आत्म-चिंतन के लिए प्रश्न</li>
            <li>🎯 जीवन में लागू करने योग्य शिक्षाएं</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { lessons } from '../data/lessons.js'

export default {
  name: 'Home',
  data() {
    return {
      lessons: lessons
    }
  },
  methods: {
    goToLesson(id) {
      this.$router.push({ name: 'lesson', params: { id } })
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.95) 0%, rgba(247, 147, 30, 0.95) 50%, rgba(255, 107, 53, 0.95) 100%),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ff6b35;stop-opacity:0.1" /><stop offset="100%" style="stop-color:%23f7931e;stop-opacity:0.1" /></linearGradient></defs><circle cx="100" cy="100" r="80" fill="url(%23grad1)" opacity="0.3"/><circle cx="1100" cy="150" r="100" fill="url(%23grad1)" opacity="0.2"/><circle cx="200" cy="500" r="60" fill="url(%23grad1)" opacity="0.3"/><circle cx="900" cy="450" r="90" fill="url(%23grad1)" opacity="0.2"/><path d="M600,50 Q650,150 600,250 Q550,150 600,50" fill="none" stroke="white" stroke-width="2" opacity="0.1"/><text x="50%" y="50%" text-anchor="middle" fill="white" opacity="0.05" font-size="200" font-family="serif">🕉</text></svg>');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 6rem 0;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.main-heading {
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.3;
  font-family: 'Tiro Devanagari Hindi', serif;
}

.hero-description-main {
  font-size: 1.8rem;
  font-weight: 500;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.lesson-card {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: #ffffff;
  transform: translateY(0);
  display: flex;
  flex-direction: column;
}

.lesson-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.4s ease;
}

.lesson-image::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
}

.lesson-image-1 {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><defs><linearGradient id="sky1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23ff8c42;stop-opacity:0.3"/><stop offset="100%" style="stop-color:%23ff6b35;stop-opacity:0.5"/></linearGradient></defs><rect fill="url(%23sky1)" width="800" height="400"/><ellipse cx="400" cy="350" rx="300" ry="80" fill="%23d45d2a" opacity="0.2"/><path d="M 200 250 Q 250 200 300 250 T 400 250 Q 450 200 500 250 T 600 250" stroke="%23ffffff" stroke-width="3" fill="none" opacity="0.4"/><circle cx="300" cy="150" r="30" fill="%23ffffff" opacity="0.15"/><circle cx="320" cy="140" r="35" fill="%23ffffff" opacity="0.15"/><circle cx="340" cy="155" r="25" fill="%23ffffff" opacity="0.15"/><circle cx="500" cy="120" r="25" fill="%23ffffff" opacity="0.12"/><circle cx="515" cy="110" r="30" fill="%23ffffff" opacity="0.12"/><path d="M 350 300 L 370 260 L 390 300 L 410 270 L 430 300 L 450 280" stroke="%23d45d2a" stroke-width="4" fill="none" opacity="0.3"/></svg>');
  background-blend-mode: overlay;
  background-size: cover;
}

.lesson-image-2 {
  background: linear-gradient(135deg, #4caf50 0%, #81c784 100%),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><defs><linearGradient id="nature1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%2366bb6a;stop-opacity:0.3"/><stop offset="100%" style="stop-color:%234caf50;stop-opacity:0.5"/></linearGradient></defs><rect fill="url(%23nature1)" width="800" height="400"/><ellipse cx="400" cy="380" rx="350" ry="50" fill="%23388e3c" opacity="0.2"/><path d="M 100 300 Q 150 280 200 300" fill="%232e7d32" opacity="0.3"/><path d="M 200 300 Q 300 250 400 300" fill="%232e7d32" opacity="0.3"/><path d="M 400 300 Q 500 270 600 300" fill="%232e7d32" opacity="0.3"/><path d="M 600 300 Q 650 290 700 300" fill="%232e7d32" opacity="0.3"/><circle cx="150" cy="180" r="40" fill="%23ffffff" opacity="0.1"/><circle cx="180" cy="160" r="50" fill="%23ffffff" opacity="0.12"/><circle cx="210" cy="185" r="35" fill="%23ffffff" opacity="0.1"/><ellipse cx="500" cy="200" rx="60" ry="40" fill="%23ffffff" opacity="0.08"/><path d="M 350 250 L 360 220 L 350 190 L 340 220 Z" fill="%23ffffff" opacity="0.15"/><path d="M 450 230 L 460 200 L 450 170 L 440 200 Z" fill="%23ffffff" opacity="0.15"/></svg>');
  background-blend-mode: overlay;
  background-size: cover;
}

.lesson-image-3 {
  background: linear-gradient(135deg, #2196f3 0%, #64b5f6 100%),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><defs><radialGradient id="water1" cx="50%" cy="50%"><stop offset="0%" style="stop-color:%2364b5f6;stop-opacity:0.3"/><stop offset="100%" style="stop-color:%232196f3;stop-opacity:0.5"/></radialGradient></defs><rect fill="url(%23water1)" width="800" height="400"/><circle cx="400" cy="200" r="120" fill="none" stroke="%23ffffff" stroke-width="2" opacity="0.15"/><circle cx="400" cy="200" r="90" fill="none" stroke="%23ffffff" stroke-width="2" opacity="0.2"/><circle cx="400" cy="200" r="60" fill="none" stroke="%23ffffff" stroke-width="2" opacity="0.25"/><circle cx="400" cy="200" r="30" fill="%23ffffff" opacity="0.2"/><path d="M 200 150 Q 250 120 300 150 T 400 150" stroke="%23ffffff" stroke-width="2" fill="none" opacity="0.2"/><path d="M 400 150 Q 450 120 500 150 T 600 150" stroke="%23ffffff" stroke-width="2" fill="none" opacity="0.2"/><path d="M 200 250 Q 250 280 300 250 T 400 250" stroke="%23ffffff" stroke-width="2" fill="none" opacity="0.2"/><path d="M 400 250 Q 450 280 500 250 T 600 250" stroke="%23ffffff" stroke-width="2" fill="none" opacity="0.2"/><circle cx="250" cy="100" r="15" fill="%23ffffff" opacity="0.15"/><circle cx="550" cy="300" r="20" fill="%23ffffff" opacity="0.15"/><circle cx="150" cy="280" r="18" fill="%23ffffff" opacity="0.12"/></svg>');
  background-blend-mode: overlay;
  background-size: cover;
}

.lesson-image-4 {
  background: linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><defs><linearGradient id="sky2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23ba68c8;stop-opacity:0.3"/><stop offset="100%" style="stop-color:%239c27b0;stop-opacity:0.5"/></linearGradient></defs><rect fill="url(%23sky2)" width="800" height="400"/><path d="M 0 320 Q 100 300 200 320 T 400 320 Q 500 300 600 320 T 800 320 L 800 400 L 0 400 Z" fill="%237b1fa2" opacity="0.2"/><polygon points="350,280 380,240 410,280" fill="%23ffffff" opacity="0.15"/><polygon points="320,300 340,270 360,300" fill="%23ffffff" opacity="0.12"/><polygon points="380,310 395,285 410,310" fill="%23ffffff" opacity="0.12"/><polygon points="440,290 465,250 490,290" fill="%23ffffff" opacity="0.15"/><polygon points="420,310 435,285 450,310" fill="%23ffffff" opacity="0.1"/><path d="M 400 150 L 410 180 L 440 185 L 415 205 L 420 235 L 400 220 L 380 235 L 385 205 L 360 185 L 390 180 Z" fill="%23ffffff" opacity="0.2"/><circle cx="300" cy="120" r="8" fill="%23ffffff" opacity="0.3"/><circle cx="320" cy="110" r="6" fill="%23ffffff" opacity="0.25"/><circle cx="340" cy="105" r="7" fill="%23ffffff" opacity="0.28"/><circle cx="500" cy="130" r="9" fill="%23ffffff" opacity="0.3"/><circle cx="520" cy="115" r="6" fill="%23ffffff" opacity="0.25"/></svg>');
  background-blend-mode: overlay;
  background-size: cover;
}

.lesson-card:hover .lesson-image {
  transform: scale(1.05);
}

.lesson-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.lesson-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.lesson-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary-color);
  box-shadow: 0 12px 30px rgba(255, 107, 53, 0.25);
}

.lesson-card:hover::before {
  transform: scaleX(1);
}

.lesson-number {
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  color: white;
  padding: 0;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: none;
  z-index: 10;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}

.lesson-card:hover .lesson-number {
  transform: translateX(-50%) scale(1.05);
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);
}

.lesson-card h2 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  margin-top: 0;
  color: var(--accent-color);
  font-weight: 700;
  transition: color 0.3s ease;
  font-family: 'Tiro Devanagari Hindi', serif;
}

.lesson-card:hover h2 {
  color: var(--primary-color);
}

.lesson-subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1.25rem;
  line-height: 1.6;
  font-weight: 400;
  flex: 1;
}

.lesson-card .btn {
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}

.lesson-card .btn::after {
  content: '→';
  position: absolute;
  right: 1.5rem;
  transition: transform 0.3s ease;
}

.lesson-card:hover .btn::after {
  transform: translateX(5px);
}

.info-section {
  margin-top: 4rem;
}

.info-section .card {
  background: linear-gradient(135deg, #fff8f0 0%, #ffffff 100%);
  border-left: 6px solid var(--primary-color);
  padding: 2.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.info-section .card h2 {
  color: var(--accent-color);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.info-section .card > p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}

.features-list li {
  padding: 1.25rem;
  font-size: 1.15rem;
  border-bottom: 2px solid #f0e5d8;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  background: white;
}

.features-list li:hover {
  background: linear-gradient(135deg, #fff5e6 0%, #ffe8d6 100%);
  transform: translateX(10px);
  border-left: 4px solid var(--primary-color);
  padding-left: 1.5rem;
}

.features-list li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
  }

  .main-heading {
    font-size: 2rem;
  }

  .hero-description-main {
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
  }

  .lessons-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
