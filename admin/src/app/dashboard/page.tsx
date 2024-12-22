export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">대시보드</h1>
      <p>서비스 상태와 주요 지표를 요약하여 보여주는 첫 화면</p>
      <ul>
        <li>사용자 통계(전체 사용자 수, 신규 가입자 수, 활성 사용자 수)</li>
        <li>프로젝트/스프린트/이슈 통계(생성,진행중, 완료)</li>
        <li>최근 활동 로그 요약</li>
        <li>서버 상태 및 주요 알림</li>
      </ul>
    </div>
  );
}
