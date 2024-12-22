export default function SystemMonitoring() {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">시스템 모니터링</h1>
        <p>서비스 서버 및 시스템 상태를 실시간으로 모니터링</p>
        <ul>
          <li>서버 상태 (cpu, 메모리 사용률률)</li>
          <li>에러 로그 및 상태 코드 통계</li>
          <li>api 호출 횟수 및 성능능</li>
          <li>시스템 알림 (장애 발생 시 알림)</li>
        </ul>
      </div>
    );
  }