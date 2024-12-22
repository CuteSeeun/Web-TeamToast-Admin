export default function ActivityLogs() {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">활동 로그</h1>
        <p>서비스 내 모든 작업 기록을 확인</p>
        <ul>
          <li>사용자 활동 로그(로그인/로그아웃, 데이터 변경 등)</li>
          <li>시스템 변경 로그 (관리자가 수행한 작업 기록)</li>
          <li>검색 및 필터 기능 제공</li>
        </ul>
      </div>
    );
  }