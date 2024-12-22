export default function UserManagement() {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">사용자 관리</h1>
        <p>서비스 이용자 정보를 관리하는 기능</p>
        <ul>
          <li>사용자 조회, 검색, 필터링</li>
          <li>사용자 상세 정보 확인(가입일, 활동 이력 등)</li>
          <li>사용자 권한 관리(일반 사용자, 관리자, 제한 계정)</li>
          <li>계정 잠금/해제 및 삭제</li>
          <li>사용자 로그 확인(로그인/로그아웃 기록 등등)</li>
        </ul>
      </div>
    );
  }
  