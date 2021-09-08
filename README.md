# Socket.io Chatroom Webapp

This web app project uses **socket.io**, node.js and ngrok to host a server on your localhost that gives you and whoever else has the URL the ability to chat with each other.

## Prerequisites
##### 1. Node.js
```bash
https://nodejs.org/en/download/
```

##### 2. Ngrok
```bash
https://ngrok.com/download
```

##### 3. Git Bash
```bash
https://git-scm.com/downloads
```


## Installation

##### 1. Clone the project using git bash on your local machine

```bash
git clone https://github.com/swapnil233/Socket.io_chat_webapp.git
```

##### 2. cd into the folder, open `index.html` and `server.js` 

##### 3. Install the dependencies
```
npm install
```

##### 4. Start the server using npm. This server will be in ```localhost:5500```
```
node server
```

##### 4. Start the ngrok localhost server. 
###### Open ngrok.exe, type in:
```
ngrok http 5500
```

##### 5. Go to the "Forwarding" address given by ngrok to get to your server. You can give this address to your friend, and chat together.
###### Example:

```
Forwarding                    http://40cc1e3f.ngrok.io -> localhost:5500
Forwarding                    https://40cc1e3f.ngrok.io -> localhost:5500
```

### You now have the chatroom up and running. 

## Thanks to testers:
* **Nadir El Tahir** - [GitHub](https://github.com/Couls) 

## License
[MIT](https://choosealicense.com/licenses/mit/)
