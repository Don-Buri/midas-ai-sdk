/**
 * Official Node.js Client SDK for Midas AI Developer Cloud APIs
 */
class MidasAI {
  constructor(options = {}) {
    this.apiKey = options.apiKey || process.env.MIDAS_AI_API_KEY || '';
    this.endpoints = {
      json: 'https://midas-json-api.vercel.app',
      pdfParser: 'https://midas-pdf-api.vercel.app',
      screenshot: 'https://midas-screenshot-api.vercel.app',
      qr: 'https://midas-qr-api.vercel.app',
      metadata: 'https://midas-metadata-api.vercel.app',
      pdfGenerator: 'https://midas-pdf-generator-api.vercel.app'
    };
  }

  async _request(baseUrl, path, method = 'POST', body = null) {
    const url = `${baseUrl}${path}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };

    const options = { method, headers };
    if (body && method !== 'GET') {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);
    return await res.json();
  }

  /** Asset #1: Extract JSON from text */
  async extractJSON(text) {
    return this._request(this.endpoints.json, '/api/extract', 'POST', { text });
  }

  /** Asset #2: Parse PDF tables */
  async parsePDFTable(fileBuffer) {
    return this._request(this.endpoints.pdfParser, '/api/extract', 'POST', { file: fileBuffer.toString('base64') });
  }

  /** Asset #3: Take website screenshot */
  async takeScreenshot(url) {
    return this._request(this.endpoints.screenshot, `/api/extract?url=${encodeURIComponent(url)}`, 'GET');
  }

  /** Asset #4: Generate QR or Barcode */
  async generateQR(data, type = 'qr') {
    return this._request(this.endpoints.qr, `/api/extract?text=${encodeURIComponent(data)}&type=${type}`, 'GET');
  }

  /** Asset #5: Extract Web OpenGraph Metadata */
  async extractMetadata(url) {
    return this._request(this.endpoints.metadata, `/api/extract?url=${encodeURIComponent(url)}`, 'GET');
  }

  /** Asset #6: Generate Vector PDF Document */
  async generatePDF(title, body) {
    return this._request(this.endpoints.pdfGenerator, '/api/generate', 'POST', { title, body });
  }
}

module.exports = { MidasAI };
