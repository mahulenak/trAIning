# trAIning

**Praktické rady pro práci s generativní AI**

Interaktivní vzdělávací platforma poskytující základní přehled nástrojů zdrojů pro práci s velkými jazykovými modely (LLM) a generativní umělou inteligencí obecně.

##  Účel projektu

Projekt **trAIning** je určen pro ty, kteří chtějí začít pracovat s generativní AI, ale neví kde začít. Cílem je:

- Poskytnout srozumitelný úvod do fungování jazykových modelů
- Ukázat praktické způsoby využití LLM v každodenní praxi
- Nabídnout inspiraci a osvědčené techniky pro práci s AI nástroji

Forma a obsah je tvořen především pro pracovníky ve výzkumném prostředí, některé aspekty nebo možnosti, které generativní AI nabízí, zde tak nemusí být pokryty.

##  Obsah

### 1. **Základy**
- Jak jazykové modely skutečně fungují
- AI, ML, LLM – co je co
- Neuronové sítě, Transformery a Attention mechanismy
- Jak se LLM učí (základní trénink, reinforcement learning)

### 2. **Základní pojmy (Glosář)**
Interaktivní slovníček klíčových termínů:
- Prompt & Prompt engineering
- Few-shot / Zero-shot learning
- Temperature
- Kontextové okno & Tokeny
- Embeddingy
- Halucinace & Bias
- Reasoning modely
- Fine-tuning & RAG

### 3. **Jak pracovat s LLM (Prompting)**
Techniky pro efektivní komunikaci s AI:
- Základní principy promptování
- Pokročilé techniky (Chain-of-Thought, Few-shot learning, atd.)
- Praktické tipy pro lepší výsledky

### 4. **Jak jazykové modely využít**
Praktické případy použití:
- Rychlejší orientace v informacích
- Shrnutí dokumentů a textů
- Asistence při běžné práci

### 5. **Přehled vybraných modelů**
Srovnání hlavních poskytovatelů:
- ChatGPT (OpenAI)
- Google Gemini
- Claude (Anthropic)
- Mistral AI

### 6. **Doporučené zdroje**
Seznam vybraných externích zdrojů pro další vzdělávání

##  O webu samotném

Projekt je postaven jako **statická webová aplikace** s následujícími funkcemi:

- **Vanilla JavaScript** – bez závislostí na frameworkích
- **Dynamické načítání stránek** – Page loader pro rychlé přepínání mezi sekcemi
- **Interaktivní komponenty**:
  - Collapsible bloky
  - Info bubbles (tooltipové nápovědy)
  - Lightbox pro obrázky
  - Hotspot tooltips
  - Tokenizer demo (LLaMA3)
  - Glossary navigace
- **MathJax** pro matematické vzorce
- **Responzivní design** s moderními CSS technikami
- **Accessibility-first** přístup (ARIA, keyboard navigation)

## 📁 Struktura projektu

```
trAIning/
├── index.html              # Hlavní HTML soubor
├── style.css              # Hlavní styly
├── pages/                 # HTML soubory jednotlivých sekcí
│   ├── introduction.html
│   ├── basics.html
│   ├── glossary.html
│   ├── prompting.html
│   ├── usage.html
│   ├── models.html
│   ├── resources.html
│   └── safety.html
├── js/                    # JavaScript moduly
│   ├── page-loader.js
│   ├── collapsible.js
│   ├── glossary-nav.js
│   ├── tokenizer.js
│   └── ... (další interaktivní komponenty)
├── css/                   # Modulární styly pro komponenty
├── lib/                   # Externí knihovny
│   └── llama3-tokenizer.js
├── img/                   # Obrázky a ikony
└── materialy/             # Podpůrné materiály

```

## 🌐 Živá verze

Projekt je hostován na **GitHub Pages**: [https://mahulenak.github.io/trAIning/](https://mahulenak.github.io/trAIning/)

## 🤝 Přispívání

Projekt je živý dokument, který se vyvíjí. Budeme rádi za:
- Zpětnou vazbu
- Návrhy na vylepšení
- Sdílení zkušeností z praxe
- Pull requesty s opravami nebo rozšířeními

## 👥 Autoři

Mahulena a Mirek – tým trAIning

## 📄 Licence

Tento projekt je otevřený pro vzdělávací účely.

---

💡 **Tip na závěr:** Kreativní a zábavné činnosti AI nesvěřujte – právě ty dávají práci radost a smysl!
