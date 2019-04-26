# Environment Files

In diesem Verzeichnis liegen config Files für die jeweiligen Umgebungen.

## Aufbau (Bsp.)
```
DB_HOST=172.**.**.**
DB_USER=max
DB_PASS=mustermann
DB_TBLE=default-table
```

## Nutzung
* Env files werden NIE ins git committed (sind im ignore-file drin)
* Die Werte hinter dem gleich werden immer als Strings geladen, auf Encoding achten
