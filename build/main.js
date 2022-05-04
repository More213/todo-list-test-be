"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const express_1 = require("express");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
    app.enableCors();
    await app.listen(process.env.PORT || 3000, () => {
        console.log(`Server started on port ${process.env.PORT || 3000}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map