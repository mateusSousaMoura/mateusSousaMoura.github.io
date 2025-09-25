const fs = require("fs");

try {
  fs.copyFileSync("dist/index.html", "dist/404.html");
  console.log("✅ 404.html criado com sucesso!");
} catch (err) {
  console.error("❌ Erro ao copiar index.html -> 404.html", err);
}
