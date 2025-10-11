<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>🕉️ श्रीमद्भगवद्गीता</h3>
          <p>जीवन के गूढ़ रहस्यों को समझने का मार्ग</p>
          <p>विद्यार्थियों के लिए जीवन कौशल और नैतिक मूल्यों की शिक्षा</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 श्रीमद्भगवद्गीता जीवन कौशल के अध्याय। सर्वाधिकार सुरक्षित।</p>
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
  text-align: center;
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
