## Instruktion 

For at få scriptet til køre ved reboot, skal der tilføjes en linje kode i crontab. 

# Åben Crontab: 
----
sudo crontab -e
----


# Indsæt code linje nederst
----
@reboot sleep 10 && node /home/pi/piIp/index.js 
----

Husk at ret den sidste filsti, sådan den peger på scriptet