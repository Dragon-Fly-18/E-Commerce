const fs = require('fs');
const path = require('path');

const root = process.cwd();

const tailwindPath = path.join(root, 'tailwind.config.cjs');
const postcssPath = path.join(root, 'postcss.config.cjs');

const tailwindContent = `module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: { extend: {} },
  plugins: [],
};
`;

const postcssContent = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
`;

function writeIfMissing(filePath, content) {
  if (fs.existsSync(filePath)) {
    console.log(`${path.basename(filePath)} already exists, skipping.`);
    return;
  }
  fs.writeFileSync(filePath, content);
  console.log(`Created ${path.basename(filePath)}`);
}

writeIfMissing(tailwindPath, tailwindContent);
writeIfMissing(postcssPath, postcssContent);

console.log('Done.');
