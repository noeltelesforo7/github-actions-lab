const fs = require('fs');
const path = require('path');

const sourceDirectory = path.join(__dirname, '..', 'src');
const destinationDirectory = path.join(__dirname, '..', 'dist');

fs.rmSync(destinationDirectory, { recursive: true, force: true });
fs.mkdirSync(destinationDirectory, { recursive: true });

for (const file of fs.readdirSync(sourceDirectory)) {
  fs.copyFileSync(
    path.join(sourceDirectory, file),
    path.join(destinationDirectory, file)
  );
}

console.log('Build generado correctamente en dist/');