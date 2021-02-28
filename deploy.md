# Set up an NGINX Reverse Proxy


```console
sudo apt update
```
## Download the key and intall NGINX
```console
wget http://nginx.org/keys/nginx_signing.key
```
> Saving to: ‘nginx_signing.key’
> 
> nginx_signing.key 100% ...

now we have le nginx key to my linode
***
```console
ls -l
```
```console
apt-key add nginx_signing.key
```
> OK
---
```console
vi /etc/apt/sources.list.d/nginx.list
```
write le content : 
> deb [arch=amd64] http://nginx.org/packages/mainline/ubuntu/ focal nginx
---

```console
apt update
```
> Done... no error...

```console
apt install nginx
```
If we check the status of NGNIX : `systemctl status nginx`, it is 'dead'
> nginx.service - nginx - high performance web server
> 
> Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
>
> Active: inactive (dead) since Tue 2021-02-23 12:39:22 UTC; 2min 25s ago
>
> Docs: https://nginx.org/en/docs/
> 
>   Main PID: 1367 (code=exited, status=0/SUCCESS)

Start service NGNIX
```console
systemctl start nginx
```
Check the status again : `systemctl status nginx`
>nginx.service - nginx - high performance web server
>
>Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
>
>Active: active (running) since Tue 2021-02-23 12:42:54 UTC; 4s ago
>
> ...

For start nginx on boot with systemd
```console
systemctl enable nginx
```
## Configure NGINX

```console
vi /etc/nginx/conf.d/example.com.conf
```

write the content :
```console
server {
        listen 80;
        listen [::]:80;

        server_name 139.162.199.44;

        location / {
                proxy_pass http://127.0.0.1:4201;
        }
    }
```
Set default disable
```console
mv default.conf default.conf.disabled
```
because `nginx/nginx.conf`

```console
...
include /etc/nginx/conf.d/*.conf;
...
```
## Test
```console
nginx -t
```
## Reload 
```console
nginx -s reload
```

# Set up Angular & Node.js
## Back-end server
Install Mongodb and start service :
```console
sudo systemctl start mongod
```
In folder of projet, install package for `server`
```console
(cd server)npm install
```
use pm2 to start service node.js
```console
pm2 start server.js
```
## Front-end client
Install Angular CLI : command line interface for Angular :
```console
npm install -g @angular/cli
```
In folder of projet, install package for `client`
```console
(cd client)npm install
```
build projet client
```console
ng build --prod
```
use express to start angular(with pm2)
```console
pm2 start startClient.js
```
# Configure domain DNS records on Linode
## Côte Linode
Domain -> Add a Domain :

- **Domain**: exemple.com
- **SOA Email Address**: your@email.com
- **Insert Defalt Records**: Insert default records from one of my Linodes. (and choose your linode)
- 
Choose **Add a Domaine**

So in the part of **NS Record**, we have **Name Servers** as `ns1/2/3/4/5.linode.com` and subdomain as `exemple.com`
## Côte Godaddy (part of Domain)
DNS Manager -> Nameservers : 
Change 'Using default nameservers' to `custom` and enter the 5 `ns1/2/3/4/5.linode.com` into list of **Nameserver**

Done.