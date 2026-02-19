const http = require("http");
const fs = require("fs");
const os = require("os");

const PORT = 2000;

// function to convert bytes to GB
function formatBytes(bytes) {
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
}

// function to format uptime
function formatUptime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60);
    return `${hrs}h ${mins}m ${secs}s`;
}

const server = http.createServer((req, res) => {

    // HOME ROUTE
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hello I'm on home page");
    }

    // WRITE LOG ROUTE
    else if (req.url === "/write-log") {
        const logMessage = `Log written at: ${new Date().toLocaleString()}\n`;

        fs.appendFile("logs.txt", logMessage, (err) => {
            if (err) {
                res.end("Error writing log");
                return;
            }
            res.end("Log written successfully!");
        });
    }

    // READ LOG ROUTE
    else if (req.url === "/read-log") {
        fs.readFile("logs.txt", "utf8", (err, data) => {
            if (err) {
                res.end("No logs found yet");
                return;
            }
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(data);
        });
    }

    // SYSTEM SPECS ROUTE
    else if (req.url === "/system") {
        const specs = `
System Information:

Hostname: ${os.hostname()}
Platform: ${os.platform()}
Free Memory: ${formatBytes(os.freemem())}
Total Memory: ${formatBytes(os.totalmem())}
Uptime: ${formatUptime(os.uptime())}
        `;

        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(specs);
    }

    // NOT FOUND
    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Route not found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
