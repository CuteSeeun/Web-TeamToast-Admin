export default function ServiceSettings() {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">서비스 설정</h1>
        <p>서비스의 전반적인 환경 설정 관리</p>
        <ul>
          <li>시스템 알림 설정(이메일, 푸시 알림)</li>
          <li>데이터 보존 기간 설정</li>
          <li>서비스 정책 관리(이용약관, 개인정보 처리방침 등)</li>
          <li>외부 서비스 연동 관리(슬랙, 깃허브 등)</li>
        </ul>
      </div>
    );
  }