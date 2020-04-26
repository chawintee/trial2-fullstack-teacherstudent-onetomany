module.exports = (sequelize, DataTypes)=>{
    const Teacher = sequelize.define('teacher',{
        name: {
            type : DataTypes.STRING,
        },
        surname: {
            type : DataTypes.STRING,
        },
    })

    Teacher.associate = models => {
        Teacher.belongsTo(models.student)
    }


    return Teacher;
}