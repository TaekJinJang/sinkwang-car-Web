module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      // MySQL에는 Posts 테이블로 생성됌
      content: {
        type: DataTypes.TEXT, // 제한없이 무제한
        allowNull: false,
      },
      userPW: {
        type: DataTypes.STRING(30),
      },
    },
    {
      charset: 'utf8mb4', // 한글 + 이모티콘
      collate: 'utf8mb4_general_ci', // 한글 + 이모티콘 저장
    }
  );
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.Admin);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};
