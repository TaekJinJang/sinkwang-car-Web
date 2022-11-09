module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      // MySQL에는 Posts 테이블로 생성됌
      content: {
        type: DataTypes.TEXT, // 제한없이 무제한
        allowNull: false,
      },
      userPW: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      Phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', // 한글 + 이모티콘
      collate: 'utf8mb4_general_ci', // 한글 + 이모티콘 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.Admin); // post.addUser, post.getUser, post.setUser
    db.Post.hasMany(db.Comment); // post.addComments, post.getComments
  };
  return Post;
};
