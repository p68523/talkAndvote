import React from "react";
import { FaHeart, FaRegComment, FaEdit, FaTrash } from "react-icons/fa";

const CommentActions = ({
  hasLiked,
  likeCount,
  onLikeClick,
  onReplyClick,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
      <button
        onClick={onLikeClick}
        className={`flex items-center gap-1 p-1 transition-colors ${
          hasLiked
            ? "text-emerald-500 hover:text-emerald-600"
            : "text-gray-400 hover:text-emerald-500"
        }`}
        title="좋아요"
      >
        <FaHeart
          className={`w-5 h-5 ${
            hasLiked ? "fill-emerald-500" : "fill-none stroke-[20] stroke-black"
          }`}
        />
        <span className="text-sm">{likeCount}</span>
      </button>

      <button
        onClick={onReplyClick}
        className="p-1 text-gray-400 hover:text-emerald-500 transition-colors"
        title="답글 작성"
      >
        <FaRegComment className="w-4 h-4" />
      </button>

      <button
        onClick={onEditClick}
        className="p-1 text-gray-400 hover:text-emerald-500 transition-colors"
        title="댓글 수정"
      >
        <FaEdit className="w-4 h-4" />
      </button>

      <button
        onClick={onDeleteClick}
        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
        title="댓글 삭제"
      >
        <FaTrash className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CommentActions;
