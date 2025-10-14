<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>🕉️ श्रीमद्भगवद्गीता</h3>
          <p>जीवन के गूढ़ रहस्यों को समझने का मार्ग</p>
          <p>विद्यार्थियों के लिए जीवन कौशल और नैतिक मूल्यों की शिक्षा</p>
        </div>
        <div class="footer-section school-info">
          <div class="school-badge">
            <img src="/images/dvm-logo.png" alt="Dalmia Vidya Mandir" class="footer-school-logo">
            <div>
              <h4>Dalmia Vidya Mandir</h4>
              <p class="school-tagline">Empowering Minds, Enriching Lives</p>
            </div>
          </div>
          <a href="https://www.dalmiavidyamandir.org.in" target="_blank" class="school-website-link">
            Visit School Website →
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Dalmia Vidya Mandir. All rights reserved.</p>
        <p class="footer-credit">श्रीमद्भगवद्गीता - जीवन कौशल के अध्याय</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2d1b00 0%, #5a3a1a 100%);
  color: white;
  margin-top: auto;
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.footer-section p {
  opacity: 0.9;
  line-height: 1.8;
}

.school-info {
  text-align: right;
}

.school-badge {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
}

.footer-school-logo {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.school-icon {
  font-size: 2rem;
}

.school-badge h4 {
  color: var(--secondary-color);
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.school-tagline {
  font-size: 0.85rem;
  opacity: 0.8;
  margin: 0;
  font-style: italic;
}

.school-website-link {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.school-website-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
}

.quote {
  font-family: 'Tiro Devanagari Hindi', serif;
  font-style: italic;
  font-size: 1.1rem;
  line-height: 2;
}

.quote-translation {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.8;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-bottom p {
  opacity: 0.8;
  font-size: 0.9rem;
  margin: 0.25rem 0;
}

.footer-credit {
  font-family: 'Noto Sans Devanagari', sans-serif;
  opacity: 0.6;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .quote {
    font-size: 1rem;
  }
}
</style>
