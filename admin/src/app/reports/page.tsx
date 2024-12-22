export default function Reports() {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">신고 및 문의 관리</h1>
        <p>사용자가 제출한 신고나 문의 사항을 처리</p>
        <ul>
          <li>신고된 프로젝트/이슈 검토 및 처리(삭제, 경고)</li>
          <li>문의 사항 답변 및 처리 상태 관리</li>
          <li>신고/문의 통계(유형별 빈도 등)</li>
        </ul>
      </div>
    );
  }