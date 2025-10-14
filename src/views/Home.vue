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
        <div class="card school-intro">
          <div class="school-intro-content">
            <div class="school-logo-section">
              <img src="/images/dvm-logo.png" alt="Dalmia Vidya Mandir" class="home-school-logo">
              <h2>Dalmia Vidya Mandir</h2>
              <p class="school-subtitle">Empowering Minds, Enriching Lives</p>
            </div>
            <p class="school-description">
              डाल्मिया विद्या मंदिर में, हम विद्यार्थियों को केवल शैक्षणिक ज्ञान ही नहीं, बल्कि जीवन कौशल और नैतिक मूल्यों की शिक्षा भी प्रदान करते हैं। 
              श्रीमद्भगवद्गीता के ये अध्याय विद्यार्थियों के व्यक्तित्व विकास और चरित्र निर्माण में सहायक हैं।
            </p>
            <a href="https://www.dalmiavidyamandir.org.in" target="_blank" class="school-website-btn">
              Visit Our Website →
            </a>
          </div>
        </div>
        
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
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.85) 0%, rgba(247, 147, 30, 0.85) 50%, rgba(255, 107, 53, 0.85) 100%),
              url('/images/hero.png');
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
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.5) 0%, rgba(247, 147, 30, 0.5) 100%),
              url('/images/chapter1.png');
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
}

.lesson-image-2 {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.5) 0%, rgba(129, 199, 132, 0.5) 100%),
              url('/images/chapter2.png');
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
}

.lesson-image-3 {
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.5) 0%, rgba(100, 181, 246, 0.5) 100%),
              url('/images/chapter3.png');
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
}

.lesson-image-4 {
  background: linear-gradient(135deg, rgba(156, 39, 176, 0.5) 0%, rgba(186, 104, 200, 0.5) 100%),
              url('/images/chapter4.png');
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
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

.school-intro {
  background: linear-gradient(135deg, #fff5e6 0%, #ffe8d6 100%);
  border: 2px solid var(--primary-color);
  margin-bottom: 2rem;
}

.school-intro-content {
  text-align: center;
}

.school-logo-section {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 107, 53, 0.2);
}

.home-school-logo {
  height: 100px;
  width: auto;
  object-fit: contain;
  margin-bottom: 1rem;
}

.school-icon-large {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.school-logo-section h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.school-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-style: italic;
  margin: 0;
}

.school-description {
  font-size: 1.15rem;
  line-height: 1.9;
  color: var(--text-primary);
  margin: 1.5rem 0;
  text-align: justify;
}

.school-website-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.school-website-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
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
