const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
const readline = require("readline-sync");
const { execSync } = require("child_process");

const config = {
    user: "u123456789",
    // Password will be prompted
    host: "46.202.182.226",
    port: 21,
    localRoot: __dirname + "/out/",
    remoteRoot: "/public_html/",
    include: ["*", "**/*"], // Upload everything in 'out'
    exclude: [".DS_Store", "*.map"],
    deleteRemote: false, // Safer to not delete everything first, but 'true' gives a cleaner sync. Let's stick to false for safety first run.
    forcePasv: true,
    sftp: false
};

// 1. Build the project
console.log("🔨 Building project...");
try {
    execSync("npm run build", { stdio: "inherit" });
} catch (e) {
    console.error("❌ Build failed. Aborting deployment.");
    process.exit(1);
}

// 2. Prompt for Password
const password = readline.question("🔑 Enter FTP Password: ", {
    hideEchoBack: true // The typed text on screen will be hidden by `*`
});
config.password = password;

// 3. Deploy
console.log("🚀 Starting deployment to Hostinger...");
ftpDeploy
    .deploy(config)
    .then((res) => console.log("✅ Deployment finished! Website should be live."))
    .catch((err) => console.log("❌ Deployment failed:", err));
