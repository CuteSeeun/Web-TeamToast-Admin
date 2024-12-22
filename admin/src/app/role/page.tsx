export default function Role() {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">권한 및 역할 관리</h1>
        <p>서비스 내 권한 체계를 설정 및 관리</p>
        <ul>
          <li>관리자 계정 생성/삭제</li>
          <li>권한 레벨별 접근 가능 페이지 설정</li>
          <li>사용자의 역할 변경(Viewer, Editor, Admin)</li>
        </ul>
      </div>
    );
  }