import json

def write_data(data):
    with open(f"./db/json/{data['key']}_{data['executor']}.json", "w", encoding="utf-8") as f:
        json.dump(data, f, sort_keys=False, indent=2, ensure_ascii=False, separators=(",", ": "),)
