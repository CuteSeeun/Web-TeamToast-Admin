import { NextResponse } from "next/server";
import pool from "@/lib/db"; // Connection Pool import
import { RowDataPacket } from "mysql2"; // RowDataPacket 타입 가져오기

// 사용자 데이터 타입 정의
export interface User extends RowDataPacket {
  uid: number;
  uname: string;
  email: string;
  role: string;
  joinDate: string;
}

export async function GET() {
  try {
    const [rows] = await pool.query<User[]>("SELECT * FROM User");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("❌ Failed to fetch users:", error);
    return NextResponse.json({ message: "Failed to fetch users" }, { status: 500 });
  }
}
