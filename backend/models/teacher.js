module.exports = (sequelize, DataTypes)=>{
    const teacher = sequelize.define('teacher',{
        name: {
            type : DataTypes.STRING,
        },
        surname: {
            type : DataTypes.STRING,
        },
    })

    teacher.associate = models => {
        teacher.belongsTo(models.student)
    }


    return teacher;
}