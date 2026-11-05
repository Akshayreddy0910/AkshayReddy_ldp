import requests

class OllamaClient:
    def __init__(self, base_url="http://localhost:11434", timeout=180):
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout

    def list_models(self):
        r = requests.get(f"{self.base_url}/api/tags", timeout=10)
        r.raise_for_status()
        return r.json().get("models", [])

    def check_model(self, model):
        names = [x.get("name", "") for x in self.list_models()]
        if model not in names and not any(n.split(":")[0] == model.split(":")[0] for n in names):
            raise RuntimeError(f"Model '{model}' is not installed. Run: ollama pull {model}")

    def generate(self, model, prompt, system=None, temperature=0.2):
        payload = {"model": model, "prompt": prompt, "stream": False,
                   "options": {"temperature": temperature}}
        if system:
            payload["system"] = system
        r = requests.post(f"{self.base_url}/api/generate", json=payload, timeout=self.timeout)
        r.raise_for_status()
        answer = r.json().get("response", "").strip()
        if not answer:
            raise RuntimeError("Ollama returned an empty response.")
        return answer
