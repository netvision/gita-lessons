<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <div class="school-branding">
              <img src="/images/dvm-logo.png" alt="Dalmia Vidya Mandir" class="school-logo">
              <span class="school-name">Dalmia Vidya Mandir</span>
            </div>
            <h1>🕉️ श्रीमद्भगवद्गीता</h1>
            <p class="subtitle">जीवन कौशल के अध्याय</p>
          </router-link>
        </div>
        <nav class="nav">
          <a href="https://www.dalmiavidyamandir.org.in" target="_blank" class="nav-link school-link">
            <img src="/images/dvm-logo.png" alt="DVM" class="nav-school-logo">
            <span>स्कूल वेबसाइट</span>
          </a>
          <router-link to="/" class="nav-link">मुख्य पृष्ठ</router-link>
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

.school-branding {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.school-logo {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.school-name {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.school-link {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.nav-school-logo {
  height: 20px;
  width: auto;
  object-fit: contain;
}

.school-icon {
  font-size: 1.1rem;
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
