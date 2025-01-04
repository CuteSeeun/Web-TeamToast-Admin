//lib 폴더는 프로젝트에서 공통적으로 사용하는 유틸리티 파일을 모아 놓는 디렉토리이다.
//디비 연결도 전역에서 재사용하므로 lib 폴더에 두는 것이 적합하다.
//connection pool 생성 파일일

import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

// .env 파일 로드
dotenv.config();

// Connection Pool 생성
const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 10,
  queueLimit: 0,
});

// Connection 확인 (선택적)
pool.getConnection()
  .then((connection) => {
    console.log("✅ Database connected");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });

export default pool;
