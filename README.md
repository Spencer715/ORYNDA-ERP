# ORYNDA-ERP

## 目录结构
- `backend/` FastAPI 后端
- `frontend/` React + Vite 前端
- `infra/` Docker Compose 配置

## 本地启动
1. 复制示例环境变量：`cp .env.example .env`
2. 启动后端：
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn app.main:app --reload
   ```
3. 启动前端：
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Docker 启动
1. 复制示例环境变量：`cp .env.example .env`
2. 运行：`docker compose -f infra/docker-compose.yml up --build`
