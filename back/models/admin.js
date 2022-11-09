module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'Admin',
    {
      // MySQL에는 users 테이블로 생성됌
      adminId: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수라는 뜻
        unique: true,
      },
      adminPW: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수라는 뜻
      },
    },
    {
      charset: 'utf8', // 이걸 해줘야 한글 쓸 수 있음,
      collate: 'utf8_general_ci', // 이걸 해줘야 한글 쓸 수 있음,
    }
  );
  Admin.associate = (db) => {
    db.Admin.hasMany(db.Post); // 게시글
    db.Admin.hasMany(db.Comment); // 댓글
  };
  return Admin;
};
