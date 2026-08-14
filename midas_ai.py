"""
Official Python Client SDK for Midas AI Developer Cloud APIs
"""
import os
import requests

class MidasAI:
    def __init__(self, api_key=None):
        self.api_key = api_key or os.environ.get("MIDAS_AI_API_KEY", "")
        self.endpoints = {
            "json": "https://midas-json-api.vercel.app",
            "pdf_parser": "https://midas-pdf-api.vercel.app",
            "screenshot": "https://midas-screenshot-api.vercel.app",
            "qr": "https://midas-qr-api.vercel.app",
            "metadata": "https://midas-metadata-api.vercel.app",
            "pdf_generator": "https://midas-pdf-generator-api.vercel.app"
        }

    def _headers(self):
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

    def extract_json(self, text):
        url = f"{self.endpoints['json']}/api/extract"
        return requests.post(url, json={"text": text}, headers=self._headers()).json()

    def parse_pdf_table(self, file_bytes):
        url = f"{self.endpoints['pdf_parser']}/api/extract"
        return requests.post(url, json={"file": file_bytes}, headers=self._headers()).json()

    def take_screenshot(self, target_url):
        url = f"{self.endpoints['screenshot']}/api/extract?url={target_url}"
        return requests.get(url, headers=self._headers()).json()

    def generate_qr(self, text, type="qr"):
        url = f"{self.endpoints['qr']}/api/extract?text={text}&type={type}"
        return requests.get(url, headers=self._headers()).json()

    def extract_metadata(self, target_url):
        url = f"{self.endpoints['metadata']}/api/extract?url={target_url}"
        return requests.get(url, headers=self._headers()).json()

    def generate_pdf(self, title, body):
        url = f"{self.endpoints['pdf_generator']}/api/generate"
        return requests.post(url, json={"title": title, "body": body}, headers=self._headers()).json()
