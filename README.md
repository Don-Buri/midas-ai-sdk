# Midas AI Developer Cloud SDK

Official multi-language SDK wrapper library for **Midas AI Developer Cloud APIs**:
- 🤖 **AI JSON Extractor API**: `https://midas-json-api.vercel.app`
- 📄 **PDF Table Parser API**: `https://midas-pdf-api.vercel.app`
- 📸 **Website Screenshot API**: `https://midas-screenshot-api.vercel.app`
- ⚡ **QR Code & Barcode API**: `https://midas-qr-api.vercel.app`
- 🌐 **Web Metadata Extractor API**: `https://midas-metadata-api.vercel.app`
- 📝 **HTML to PDF Generator API**: `https://midas-pdf-generator-api.vercel.app`

---

## 🚀 Quickstart Usage

### Node.js
```javascript
const { MidasAI } = require('midas-ai-sdk');
const client = new MidasAI({ apiKey: 'YOUR_API_KEY' });

// 1. Generate Vector PDF Document
const pdf = await client.generatePDF("Invoice #1092", "Total Paid: $9.99 USD");
console.log(pdf.data_uri);

// 2. Extract Web Metadata
const meta = await client.extractMetadata("https://github.com");
console.log(meta.metadata.title);
```

### Python
```python
from midas_ai import MidasAI
client = MidasAI(api_key="YOUR_API_KEY")

# 1. Generate Vector PDF Document
pdf = client.generate_pdf("Invoice #1092", "Total Paid: $9.99 USD")
print(pdf["data_uri"])

# 2. Extract Web Metadata
meta = client.extract_metadata("https://github.com")
print(meta["metadata"]["title"])
```

---

## 🛒 Licensing & API Keys
Get instant API key delivery on Gumroad:
👉 [https://burigokko.gumroad.com](https://burigokko.gumroad.com)
