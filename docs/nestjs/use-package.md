## 常用包清单

`NestJS` 初始化项目为一个最简单的工程，我们拿来做生产环境的应用时，通常需要配置很多东西，大部分东西官方都已提供对应的包，以下为我在使用时的一些常用配置，并进行了分类。

### 配置

- `@nestjs/config`
- `js-yaml`
- `@types/js-yaml`
- `joi`

1. 配置文件默认是 `.env` 类型；
2. 如果要使用 `yaml` 文件类型，需要安装 `js-yaml` 和 `@types/js-yaml`；
3. 如果要对配置进行校验，需要 `joi`；

### 数据库

```bash
# 1. 选择数据库类型
npm install mysql2 --save # 使用MySQL
npm install mongoose --save # or 使用 MongoDB
npm install pg --save # or 使用 Postgres

# 2. 选择 orm 框架
# 2.1 使用 Sequelize ORM
npm install sequelize sequelize-typescript @nestjs/sequelize --save
npm install `@types/sequelize --save-dev

# 2.2 使用 TypeORM
npm install typeorm @nestjs/typeorm --save

# 2.3 使用 MongoDB（NestJS官方）
npm install typeorm @nestjs/mongoose --save

# 2.4 使用 MikroORM
npm install @mikro-orm/core @mikro-orm/nestjs --save
```

### 验证入参

- `class-validator`
- `class-transformer`

### 缓存

- `@nestjs/cache-manager`
- `cache-manager`

### 定时任务调度

- `@nestjs/schedule`

## 队列
- `@nestjs/bullmq`
- `bullmq`



- `cookie-parser`
- `@types/cookie-parser`
- `@nestjs/event-emitter`
- `compression`
- `@types/multer`
- `@nestjs/axios`
- `axios`
- `express-session`
- `@types/express-session`
- `@nestjs/jwt`
- `@nestjs/websockets`
- `@nestjs/platform-socket.io`
- `@nestjs/microservices`
- `ioredis`
- `mqtt`
- `nats`
- `amqplib`
- `amqp-connection-manager`
- `kafkajs`
- `@grpc/grpc-js`
- `@grpc/proto-loader`
- `@nestjs/swagger`
- `@nestjs/passport`
- `passport`
- `passport-local`
- `@types/passport-local`
- `@nestjs/terminus`
- `@compodoc/compodoc`
- `@nestjs/serve-static`

