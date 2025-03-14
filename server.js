import express from 'express';
import cors from 'cors';  // استيراد مكتبة CORS

const app = express();
const port = 3000;

// تمكين CORS لجميع النطاقات
app.use(cors()); 

// أو تمكين CORS فقط للنطاقات المحددة
// app.use(cors({
//   origin: 'http://localhost:5173'
// }));

app.use(express.json());  // لتحليل طلبات JSON

app.post('/order', (req, res) => {
  // منطق الطلبات هنا
  res.status(200).send('Order received');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


