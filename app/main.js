"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const port = process.env.PORT || 8080;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log(__dirname);
    await app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map