import React from "react";

const EditableContent = ({
  isEditing,
  content,
  editContent,
  setEditContent,
  handleEdit,
  setIsEditing,
  isReply = false,
}) => {
  if (isEditing) {
    return (
      <div className="mt-2">
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className={`w-full p-2 ${isReply ? "text-sm" : ""} border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 resize-none`}
          rows={isReply ? 2 : 3}
        />
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={() => setIsEditing(false)}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
          >
            취소
          </button>
          <button
            onClick={handleEdit}
            disabled={!editContent.trim()}
            className="px-3 py-1 text-sm bg-emerald-500 text-white rounded hover:bg-emerald-600 disabled:opacity-50"
          >
            수정
          </button>
        </div>
      </div>
    );
  }

  return (
    <p className={`mt-1 text-gray-800 whitespace-pre-wrap ${isReply ? "text-sm" : ""}`}>
      {content}
    </p>
  );
};

export default EditableContent;
