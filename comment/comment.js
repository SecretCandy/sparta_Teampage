// 입력창에 문자를 입력하면 "댓글을 작성하였습니다", 아무 문자도 입력하지 않았으면 "댓글을 작성해주세요."라고 알림이 뜨도록 함
function hey() {
    var input = document.querySelector('.form-control').value;
    if (input.trim() !== '') {
        alert("댓글을 작성하였습니다.");
    } else {
        alert("댓글을 작성해주세요.");
    }
}