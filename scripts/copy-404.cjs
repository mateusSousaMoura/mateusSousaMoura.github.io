const fs = require("fs");
const path = require("path");

try {
  // Copia index.html para 404.html
  fs.copyFileSync("dist/index.html", "dist/404.html");
  console.log("✅ 404.html criado com sucesso!");
  
  // Copia .nojekyll se existir
  if (fs.existsSync("public/.nojekyll")) {
    fs.copyFileSync("public/.nojekyll", "dist/.nojekyll");
    console.log("✅ .nojekyll copiado com sucesso!");
  }
  
  // Copia _headers se existir
  if (fs.existsSync("public/_headers")) {
    fs.copyFileSync("public/_headers", "dist/_headers");
    console.log("✅ _headers copiado com sucesso!");
  }
  
} catch (err) {
  console.error("❌ Erro durante pós-build:", err);
}
