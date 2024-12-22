//메인 화면(홈, /경로)
// import Link from "next/link";

export default function Home() {
  return (
    // <div className="p-4">
    //   <h1 className="text-3xl font-bold mb-4">관리자 페이지</h1>
    //   <p>Welcome to the admin system. Navigate to the pages using the menu.</p>
    //   <ul>
    //     <li><Link href="/login">Go to Login</Link></li>
    //     <li><Link href="/dashboard">Go to Dashboard</Link></li>
    //     <li><Link href="/user-management">Go to Data Management</Link></li>
    //   </ul>
    // </div>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">로그인</h1>
        <form className="flex flex-col gap-4 w-1/3">
          <input
            type="text"
            placeholder="UserEmail"
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
          <button className="bg-blue-500 text-white py-2 rounded">로그인</button>
        </form>
      </div>
  );
}
