import React from "react";
import TopicCard from "../topiccard";

const Grid = ({ topics, loading, onVote }) => {
  if (loading) {
    return <p className="text-center text-gray-500 col-span-4">로딩 중...</p>;
  }

  if (topics.length === 0) {
    return (
      <p className="text-center text-gray-500 col-span-4">
        등록된 토픽이 없습니다.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {topics.map((topic) => (
        <TopicCard key={topic.topic_id} topic={topic} onVote={onVote} />
      ))}
    </div>
  );
};

export default Grid;
