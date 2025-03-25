const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3535;

// ✅ CORS middleware aktif et
app.use(cors());  

const START_TIME = new Date('2025-03-25T12:00:00Z'); // örnek sabit tarih

app.get('/api/stage', (req, res) => {
  const now = new Date();
  const diffInHours = (now - START_TIME) / (1000 * 60 * 60);

  let stage = '';
  if (diffInHours < 0) {
    stage = 'Henüz başlamadı';
  } else if (diffInHours < 9) {
    stage = 'Bekleniyor: 1. Aşama';
  } else if (diffInHours >= 9 && diffInHours < 13) {
    stage = '1. Aşama Aktif';
  } else if (diffInHours >= 13) {
    stage = '2. Aşama Aktif';
  } 

  res.json({ stage });
});

app.listen(PORT, () => {
  console.log(`API sunucusu ${PORT} portunda çalışıyor`);
});
  