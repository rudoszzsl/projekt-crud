# Projekt CRUD — React + REST API

Projekt demonstracyjny typu **CRUD** zrealizowany w **React**, stworzony w celu zaprezentowania umiejętności tworzenia własnego **REST API** oraz korzystania z niego po stronie frontendu.

Aplikacja zarządza flotą samochodów firmowych — umożliwia:

- przeglądanie listy pojazdów,
- dodawanie nowych rekordów,
- edycję danych,
- usuwanie pojazdów,
- wyszukiwanie,
- filtrowanie wyników.

---

## Technologie

### Backend (API)

- Node.js
- Express
- CORS
- Przechowywanie danych w plikach JSON

### Frontend

- React
- Vite
- React Router
- Bootstrap

---

## 📁 Struktura projektu

```text
projekt-crud/
│
├── API/                                 # Backend — REST API
│   ├── server.js                        # Serwer Express z endpointami CRUD
│   ├── data/                            # Pliki JSON z danymi
│   │   ├── variant-01.json
│   │   ├── variant-02.json
│   │   ├── ...
│   │   └── variant-11.json              # Wariant używany przez nas
│   ├── package.json
│   └── package-lock.json
│
└── projekt-crud/                        # Frontend — aplikacja React
    ├── public/                          # Pliki statyczne serwowane bezpośrednio
    │   ├── favicon.svg                  # Ikona zakładki przeglądarki
    │   └── icons.svg
    │
    ├── src/                             # Kod źródłowy aplikacji
    │   ├── main.jsx                     # Punkt wejścia — montuje React + Router + Bootstrap
    │   ├── App.jsx                      # Główny komponent — nawigacja i routing
    │   ├── App.css                      # Style komponentu App
    │   ├── index.css                    # Globalne style aplikacji
    │   │
    │   ├── components/                  # Komponenty React
    │   │   ├── CarsPage.jsx             # Lista aut — GET, POST, PUT, DELETE
    │   │   ├── CarAddForm.jsx           # Formularz dodawania nowego pojazdu
    │   │   ├── CarDetailPage.jsx        # Szczegóły pojazdu — GET po id
    │   │   └── SearchBar.jsx            # Wyszukiwarka i filtr dostępności
    │   │
    │   └── assets/                      # Grafiki w bundlu Vite
    │       ├── react.svg
    │       └── vite.svg
    │
    ├── index.html                       # Szablon HTML — punkt startowy Vite
    ├── vite.config.js                   # Konfiguracja bundlera Vite
    ├── eslint.config.js                 # Konfiguracja lintera ESLint
    ├── package.json                     # Zależności i skrypty npm
    ├── package-lock.json
    └── .gitignore                       # Pliki ignorowane przez Git (m.in. node_modules)
```

---

## Uruchomienie projektu

Projekt składa się z dwóch części, które należy uruchomić osobno.

### 1. Backend (API)

Otwórz terminal i przejdź do folderu `API`:

```bash
cd API
npm install
node server.js
```

Serwer API uruchomi się pod adresem:

```text
http://localhost:3001
```

---

### 2. Frontend (React)

W drugim terminalu przejdź do folderu z aplikacją React:

```bash
cd projekt-crud
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem wyświetlonym w terminalu (domyślnie):

```text
http://localhost:5173
```

> **Uwaga:** Najpierw uruchom API, a dopiero potem frontend. Aplikacja React komunikuje się z backendem pod adresem `http://localhost:3001`.

---

## Endpointy API

| Metoda | Endpoint | Opis |
|---------|----------|--------|
| GET | `/api/:variant/items` | Pobierz listę elementów |
| GET | `/api/:variant/items/:id` | Pobierz pojedynczy element |
| POST | `/api/:variant/items` | Dodaj nowy element |
| PUT | `/api/:variant/items/:id` | Zaktualizuj element |
| DELETE | `/api/:variant/items/:id` | Usuń element |

Frontend korzysta z wariantu:

```text
/api/11/items
```

---

## Funkcjonalności

- Wyświetlanie listy samochodów
- Dodawanie nowych pojazdów
- Edycja istniejących rekordów
- Usuwanie pojazdów
- Podgląd szczegółów pojazdu
- Wyszukiwanie po marce i modelu
- Filtrowanie dostępnych pojazdów

---

## Cel projektu

Celem projektu było zaprezentowanie:

- tworzenia własnego REST API w Node.js i Express,
- obsługi żądań HTTP (GET, POST, PUT, DELETE),
- komunikacji frontend ↔ backend,
- pracy z React Router,
- zarządzania stanem komponentów React,
- budowy kompletnej aplikacji CRUD.
