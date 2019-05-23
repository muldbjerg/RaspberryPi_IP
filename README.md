# Gem IP fra Raspberry Pi to Firebase

En Raspberry Pi's ip ændre sig, og derfor det her lille setup, som gemmer ip'en når Pi'en starter og viser den på en hjemmeside. 

## Instruktion: 

## På Raspberry Pi'en 
* Opret en mappe på Pi'en
* Flyt filerne fra NodeServer mappen til den nye mappe
  * Kør npm install (for at hente node modules)
* Tilføj 'ServiceAccountKey.json' fra Firebase til mappen
* Ret informationerne (devicename og url) i 'index.js

### Tilføj til cronjob
* Åben cronjob ved 
```javascript
  sudo crontab -e
```
* Indsæt denne linje kode nederst (Husk at ret filsti, sådan den peger på scriptet)
```javascript
  @reboot sleep 10 && node /home/pi/piIp/index.js 
```

## Vis hjemmesiden
