export default function AnalyicsReports() {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">통계 및 보고서</h1>
        <p>서비스 상태 및 사용 현황에 대한 데이터 시각화</p>
        <ul>
          <li>사용자 통계 (활성 비율, 재방문율 등)</li>
          <li>프로젝트 및 이슈 생성 추이</li>
          <li>서비스 성능 지표(응답 시간, 에러 발생률 등)</li>
          <li>데이터 다운로드 기능(CSV, Excel)</li>
        </ul>
      </div>
    );
  }