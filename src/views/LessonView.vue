<template>
  <div class="lesson-view" v-if="lesson">
    <div class="lesson-header">
      <div class="container">
        <router-link to="/" class="back-link">← सभी अध्याय</router-link>
        <div class="lesson-title-section">
          <div class="lesson-number-badge">अध्याय {{ lesson.id }}</div>
          <h1>{{ lesson.title }}</h1>
          <p class="lesson-subtitle">{{ lesson.subtitle }}</p>
          <p v-if="lesson.chapter" class="chapter-info">📖 {{ lesson.chapter }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="lesson-content">
        <!-- Introduction if exists -->
        <div v-if="lesson.intro" class="card intro-section">
          <div v-html="formatText(lesson.intro)"></div>
        </div>

        <!-- Shlokas Section -->
        <div v-if="lesson.shlokas && lesson.shlokas.length" class="shlokas-section">
          <div v-for="(shlok, index) in lesson.shlokas" :key="index" class="shlok-card card">
            <div v-if="shlok.number" class="shlok-number">श्लोक {{ shlok.number }}</div>
            <div class="shlok">{{ shlok.sanskrit }}</div>
            <div class="translation">{{ shlok.translation }}</div>
            <div v-if="shlok.explanation" class="explanation">
              <strong>व्याख्या:</strong>
              <p>{{ shlok.explanation }}</p>
            </div>
          </div>
        </div>

        <!-- Content Sections -->
        <div v-for="(section, index) in lesson.content" :key="index" class="content-section">
          <!-- Regular Section -->
          <div v-if="section.type === 'section'" class="card">
            <h2>{{ section.heading }}</h2>
            <div v-if="section.text" v-html="formatText(section.text)"></div>
            
            <div v-if="section.subsections">
              <div v-for="(sub, subIndex) in section.subsections" :key="subIndex" class="subsection">
                <h3 v-if="sub.title">{{ sub.title }}</h3>
                <div v-if="sub.text" v-html="formatText(sub.text)"></div>
                
                <!-- Questions -->
                <div v-if="sub.questions" class="questions">
                  <ol>
                    <li v-for="(q, qIndex) in sub.questions" :key="qIndex" v-html="formatText(q)"></li>
                  </ol>
                </div>

                <!-- Story -->
                <div v-if="sub.type === 'story'" class="story-box">
                  <div class="story-icon">📖</div>
                  <div v-html="formatText(sub.text)"></div>
                </div>

                <!-- List -->
                <div v-if="sub.type === 'list'" class="list-box">
                  <ul>
                    <li v-for="(item, i) in sub.items" :key="i">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Lesson/Seekh Section -->
          <div v-else-if="section.type === 'lesson'" class="card lesson-box">
            <div class="lesson-icon">💡</div>
            <h2>{{ section.heading }}</h2>
            <div v-if="section.text" v-html="formatText(section.text)"></div>
            <div v-if="section.subsections">
              <div v-for="(sub, subIndex) in section.subsections" :key="subIndex">
                <div v-if="sub.questions" class="questions">
                  <ol>
                    <li v-for="(q, qIndex) in sub.questions" :key="qIndex" v-html="formatText(q)"></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <!-- Teaching Section -->
          <div v-else-if="section.type === 'teaching'" class="card teaching-box">
            <h2 v-if="section.title">{{ section.title }}</h2>
            <div v-html="formatText(section.text)"></div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="lesson-navigation">
          <button 
            v-if="lesson.id > 1" 
            @click="goToLesson(lesson.id - 1)"
            class="btn btn-outline"
          >
            ← पिछला अध्याय
          </button>
          <button 
            v-if="lesson.id < 4" 
            @click="goToLesson(lesson.id + 1)"
            class="btn btn-primary"
          >
            अगला अध्याय →
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <div class="card">
      <p>अध्याय नहीं मिला। <router-link to="/">मुख्य पृष्ठ पर वापस जाएं</router-link></p>
    </div>
  </div>
</template>

<script>
import { lessons } from '../data/lessons.js'

export default {
  name: 'LessonView',
  data() {
    return {
      lesson: null
    }
  },
  mounted() {
    this.loadLesson()
  },
  watch: {
    '$route.params.id'() {
      this.loadLesson()
      window.scrollTo(0, 0)
    }
  },
  methods: {
    loadLesson() {
      const id = parseInt(this.$route.params.id)
      this.lesson = lessons.find(l => l.id === id)
    },
    formatText(text) {
      if (!text) return ''
      return text.replace(/\n/g, '<br>')
    },
    goToLesson(id) {
      this.$router.push({ name: 'lesson', params: { id } })
    }
  }
}
</script>

<style scoped>
.lesson-header {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  padding: 2rem 0 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.back-link {
  color: white;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lesson-title-section {
  text-align: center;
}

.lesson-number-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.lesson-header h1 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.lesson-subtitle {
  font-size: 1.1rem;
  opacity: 0.95;
  margin-bottom: 0.5rem;
}

.chapter-info {
  font-size: 1rem;
  opacity: 0.9;
}

.lesson-content {
  max-width: 900px;
  margin: 0 auto;
}

.intro-section {
  background: linear-gradient(135deg, #fff8f0 0%, #ffe8d6 100%);
  font-size: 1.1rem;
  border-left: 4px solid var(--primary-color);
}

.shlokas-section {
  margin: 2rem 0;
}

.shlok-card {
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #fffaf5 0%, #fff5e6 100%);
  border-left: 4px solid var(--secondary-color);
}

.shlok-number {
  display: inline-block;
  background: var(--secondary-color);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.translation {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  font-size: 1.05rem;
}

.explanation {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 235, 205, 0.5);
  border-radius: 8px;
}

.explanation strong {
  color: var(--accent-color);
}

.content-section {
  margin: 2rem 0;
}

.subsection {
  margin: 1.5rem 0;
}

.subsection h3 {
  color: var(--primary-color);
  margin-top: 1.5rem;
}

.story-box {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  border-left: 4px solid #4caf50;
}

.story-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.lesson-box {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-left: 4px solid var(--secondary-color);
}

.lesson-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.teaching-box {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-left: 4px solid #2196f3;
}

.questions {
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}

.questions ol {
  margin-left: 1.5rem;
}

.questions li {
  margin: 1rem 0;
  line-height: 1.8;
}

.list-box ul {
  margin-left: 1.5rem;
}

.list-box li {
  margin: 0.5rem 0;
}

.lesson-navigation {
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  gap: 1rem;
}

.lesson-navigation button {
  flex: 1;
}

@media (max-width: 768px) {
  .lesson-header h1 {
    font-size: 1.8rem;
  }

  .lesson-subtitle {
    font-size: 1rem;
  }

  .lesson-navigation {
    flex-direction: column;
  }
}
</style>
