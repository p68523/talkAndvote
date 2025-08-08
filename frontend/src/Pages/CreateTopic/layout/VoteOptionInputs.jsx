import React from "react";

const VoteOptionInputs = ({
  formData,
  onOptionAdd,
  onOptionRemove,
  onOptionChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        투표 옵션 <span className="text-red-500">*</span>
      </label>
      {formData.vote_options.map((option, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="text"
            value={option}
            onChange={(e) => onOptionChange(index, e.target.value)}
            required
            placeholder={`옵션 ${index + 1}`}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
          />
          {formData.vote_options.length > 1 && (
            <button
              type="button"
              onClick={() => onOptionRemove(index)}
              className="p-3 bg-red-100 text-red-500 rounded-lg hover:bg-red-200"
            >
              &times;
            </button>
          )}
        </div>
      ))}
      {formData.vote_options.length < 4 && (
        <button
          type="button"
          onClick={onOptionAdd}
          className="w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-200 mt-2"
        >
          옵션 추가
        </button>
      )}
    </div>
  );
};

export default VoteOptionInputs;
