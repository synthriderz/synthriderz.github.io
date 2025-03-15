import fs from "fs-extra";
import path from "path";
import axios from "axios";
import {fileURLToPath} from "url";

// Fix `__dirname` in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths (adjusted for root directory)
const DOCS_DIR = path.join(__dirname, "docs");
const JS_DIR = path.join(DOCS_DIR, "assets/js");
const CSS_DIR = path.join(DOCS_DIR, "assets/css");
const NODE_MODULES = path.join(__dirname, "node_modules");
const INDEX_HTML = path.join(DOCS_DIR, "index.html");

// Files to copy from npm-installed packages
const jsFiles = {
    "docsify-copy-code/dist/docsify-copy-code.min.js": "docsify-copy-code.min.js",
    "docsify-count/dist/countable.min.js": "countable.min.js",
    "docsify-pagination/dist/docsify-pagination.min.js": "docsify-pagination.min.js",
    "docsify-plugin-flexible-alerts/dist/docsify-plugin-flexible-alerts.js": "docsify-plugin-flexible-alerts.js",
    "docsify-plugin-toc/dist/docsify-plugin-toc.min.js": "docsify-plugin-toc.min.js",
    "docsify-top-banner-plugin/dist/index.js": "docsify-top-banner-plugin.js",
    "docsify-updated/src/time-updater.js": "time-updater.js",
    "docsify/lib/docsify.min.js": "docsify.min.js",
    "docsify/lib/plugins/search.min.js": "search.min.js",
    "docsify/lib/plugins/zoom-image.min.js": "zoom-image.min.js"
};

const cssFiles = {
    "docsify-plugin-toc/dist/light.css": "toc-light.css",
    "docsify-top-banner-plugin/dist/style.css": "docsify-top-banner-plugin.css"
};

// External files (URL → Local filename)
const externalFiles = {
    "https://cdn.jsdelivr.net/gh/A5yncX/docsify-theme-darcula@v1.0/darcula.css": path.join(DOCS_DIR, "assets/css/darcula.css")
};

// PrismJS Components (only the required ones)
const prismJsFiles = {
    "prismjs/components/prism-bash.min.js": "prism-bash.min.js",
    "prismjs/components/prism-csp.min.js": "prism-csp.min.js",
    "prismjs/components/prism-http.min.js": "prism-http.min.js",
    "prismjs/components/prism-python.min.js": "prism-python.min.js"
};

// Function to copy files from node_modules
async function copyFiles(files, destDir) {
    await fs.ensureDir(destDir);
    await Promise.all(Object.entries(files).map(async ([src, dest]) => {
        const srcPath = path.join(NODE_MODULES, src);
        const destPath = path.join(destDir, dest);

        if (fs.existsSync(srcPath)) {
            await fs.copy(srcPath, destPath);
            console.log(`✅ Copied: ${destPath}`);
        } else {
            console.warn(`⚠️ File not found: ${srcPath}`);
        }
    }));
}

// Function to download external files
async function downloadFiles(files) {
    await Promise.all(Object.entries(files).map(async ([url, destPath]) => {
        try {
            const response = await axios.get(url, {responseType: "arraybuffer"});
            await fs.outputFile(destPath, response.data);
            console.log(`✅ Downloaded: ${destPath}`);
        } catch (error) {
            console.error(`❌ Failed to download ${url}: ${error.message}`);
        }
    }));
}

// Function to generate index.html dynamically
async function generateIndexHtml() {
    console.log("🔧 Generating index.html...");

    const allCssFiles = {...cssFiles, ...Object.fromEntries(Object.values(externalFiles).map(file => [file, path.basename(file)]))};
    const cssLinks = Object.values(allCssFiles)
        .map(file => `    <link rel="stylesheet" href="assets/css/${file}">`)
        .join("\n");

    const allJsFiles = {...jsFiles, ...prismJsFiles};
    const jsScripts = Object.values(allJsFiles)
        .map(file => `    <script src="assets/js/${file}"></script>`)
        .join("\n");

    const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Synthriderz Community Wiki</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="description" content="Synthriderz Community Wiki">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
    <link rel="manifest" href="assets/site.webmanifest">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

${cssLinks}

    <title>Synthriderz Community Wiki</title>
</head>
<body>
<div id="app"></div>

<!-- Docsify Configuration -->
<script>
    window.$docsify = {
        name: "Synthriderz Community Wiki",
        repo: "https://github.com/synthriderz/synthriderz.github.io",
        loadSidebar: true,
        loadNavbar: true,
        auto2top: true,
        maxLevel: 5,
        subMaxLevel: 0,
        // logo: '/assets/synthriderz.png',
        search: {
            depth: 5,
            noData: "No results!",
            placeholder: "Search...",
        },
        pagination: {
            crossChapter: true,
            crossChapterText: true,
        },
        toc: {
            scope: '.markdown-section',
            headings: 'h1, h2, h3, h4, h5, h6',
            title: 'Table of Contents',
        },
        count: {
            countable: true,
            position: 'top',
            margin: '10px',
            float: 'right',
            fontsize: '1em',
            color: 'rgb(90,90,90)',
            language: 'english',
            localization: {
                words: "",
                minute: ""
            },
            isExpected: true
        },
        alias: {
            '/.*/_sidebar.md': '/_sidebar.md'
        },
        timeUpdater: {
            text: "> last modified: {docsify-updated}",
            formatUpdated: "{DD}.{MM}.{YYYY} - {HH}:{mm}.{ss}h",
        },
        share: { // docsify-share
            reddit: true,
            linkedin: false,
            facebook: false,
            twitter: false,
            whatsapp: false,
            telegram: false,
        }
        //topBanner: {
        //content: 'This is a restore of the now offline wiki.synthriderz.com! Please note that this is a work in progress and may not be complete.',
        //position: 'relative',
        //zIndex: -1,
        //}
    };
</script>

${jsScripts}

</body>
</html>`;

    await fs.writeFile(INDEX_HTML, indexContent);
    console.log("✅ index.html updated.");
}

// Main function
async function updateAssets() {
    console.log("📥 Updating Docsify assets...\n");
    await copyFiles(jsFiles, JS_DIR);
    await copyFiles(prismJsFiles, JS_DIR);
    await copyFiles(cssFiles, CSS_DIR);
    await downloadFiles(externalFiles);
    await generateIndexHtml();
    console.log("\n✅ Update complete.");
}

// Run the update process
updateAssets();
