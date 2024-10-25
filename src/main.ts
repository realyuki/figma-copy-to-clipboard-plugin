figma.showUI(__html__, { width: 300, height: 200 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === "copy-status") {
    const status = msg.content;
    if (status === "success") {
      figma.notify("클립보드에 복사되었습니다.");
    } else if (status === "warn") {
      figma.notify("'figmeta' 문자열이 클립보드 데이터에 없습니다.");
    } else {
      figma.notify("클립보드 복사에 실패했습니다.");
    }
  }
};
