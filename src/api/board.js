import api from "./index";

// export const getBoardList = () => {
//   api
//     .get("/board/list", { params: { page: 1, num: 10 } })
//     .then((res) => {
//       return res.data.data;
//     })
//     .catch((err) => err);
// };

export const getDetail = (id, nav) => {
  api
    .get(`/board/list/${id}`, { params: { id: id } })
    .then((res) => {
      const article = res.data.data[0];
      nav(`/board/${id}`, {
        state: {
          data: article,
        },
      });
      return article;
    })
    .catch((err) => err);
};

export const writeContent = (title, content, writer, nav) => {
  api
    .post("board/write", {
      title: title,
      content: content,
      writer: writer,
    })
    .then((res) => {
      if (res.status === 200) {
        nav("/board");
        return alert("글이 등록되었습니다");
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const handleDelete = (boardId, nav) => {
  api
    .get(`/board/delete/${boardId}`, { params: { id: boardId } })
    .then((res) => {
      if (res.status === 200) {
        nav("/board");
        return alert("삭제되었습니다");
      }
    })
    .catch((err) => alert("삭제 실패"));
};

export const handleEdit = (title, content, boardId, writer, nav) => {
  api
    .post("board/edit", {
      title: title,
      content: content,
      board_id: boardId,
      writer: writer,
    })
    .then((res) => {
      if (res.status === 200) {
        nav("/board");
        return alert("수정되었습니다");
      }
    })
    .catch((err) => err);
};
