<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <h1>🕉️ श्रीमद्भगवद्गीता</h1>
            <p class="subtitle">जीवन कौशल के अध्याय</p>
          </router-link>
        </div>
        <nav class="nav">
          <router-link to="/" class="nav-link">मुख्य पृष्ठ</router-link>
          <button class="nav-link" @click="showSearch">खोजें</button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    showSearch() {
      this.$emit('search')
    }
  }
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo a {
  text-decoration: none;
  color: white;
}

.logo h1 {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 0.25rem;
}

.subtitle {
  font-size: 0.9rem;
  opacity: 0.95;
  margin: 0;
}

.nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Noto Sans Devanagari', sans-serif;
  font-size: 1rem;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.router-link-active {
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  .logo h1 {
    font-size: 1.5rem;
  }

  .nav {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
