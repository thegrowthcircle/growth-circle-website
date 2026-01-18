const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
const { execSync } = require("child_process");

const config = {
    user: "u247576081",
    password: "6ZsYUeXU7[de6H3",
    host: "46.202.182.226",
    port: 21,
    localRoot: __dirname + "/out/",
    remoteRoot: "/domains/thegrowthcircle.co.in/public_html/",
    include: ["*", "**/*"],
    exclude: [".DS_Store", "*.map"],
    deleteRemote: false,
    forcePasv: true,
    sftp: false
};

// 1. Build
console.log("🔨 Building project...");
try {
    execSync("npm run build", { stdio: "inherit" });
} catch (e) {
    console.error("❌ Build failed. Aborting deployment.");
    process.exit(1);
}

// 2. Deploy
console.log("🚀 Starting deployment to Hostinger (Workshop Content Update)...");
ftpDeploy
    .deploy(config)
    .then((res) => console.log("✅ Deployment finished! Website is live."))
    .catch((err) => console.error("❌ Deployment failed:", err));
