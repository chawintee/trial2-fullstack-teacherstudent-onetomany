module.exports = (sequelize,DataTypes)=>{
    const student = sequelize.define('student',{
        name: {
           type : DataTypes.STRING,
        },
        surname: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.STRING,
        },
        room : {
            type: DataTypes.INTEGER,
        },
        number : {
            type: DataTypes.INTEGER,
        }
    });


    student.associate = models => {
        student.hasMany(models.teacher)
    }



    return student;
}