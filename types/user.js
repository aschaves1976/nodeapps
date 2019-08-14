module.exports = DataTypes => {
    return {
      user_id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      name: {allowNull: false, type: DataTypes.STRING},
      gender: {allowNull: false, type: DataTypes.STRING},
      age: {allowNull: false, type: DataTypes.INTEGER},
      email: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true, isEmail: true } },
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE }
    }
  }