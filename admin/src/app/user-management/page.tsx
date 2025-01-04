"use client"; // 클라이언트 컴포넌트 선언

import { useEffect, useState } from "react";
import { User } from "../api/users/route"; // User 타입 가져오기

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]); // 사용자 데이터를 저장할 상태
  // const [loading, setLoading] = useState<boolean>(true); // 로딩 상태

  useEffect(() => {
    // API에서 데이터 가져오기
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">사용자 관리</h1>
      <p>서비스 이용자 정보를 관리하는 기능</p>
      {/* <ul>
          <li>사용자 조회, 검색, 필터링</li>
          <li>사용자 상세 정보 확인(가입일, 활동 이력 등)</li>
          <li>사용자 권한 관리(일반 사용자, 관리자, 제한 계정)</li>
          <li>계정 잠금/해제 및 삭제</li>
          <li>사용자 로그 확인(로그인/로그아웃 기록 등등)</li>
        </ul> */}

      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Role</th>
            <th className="border border-gray-400 px-4 py-2">Join Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td className="border border-gray-400 px-4 py-2">{user.uid}</td>
              <td className="border border-gray-400 px-4 py-2">{user.uname}</td>
              <td className="border border-gray-400 px-4 py-2">{user.email}</td>
              <td className="border border-gray-400 px-4 py-2">{user.role}</td>
              <td className="border border-gray-400 px-4 py-2">
                {new Date(user.joinDate).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
