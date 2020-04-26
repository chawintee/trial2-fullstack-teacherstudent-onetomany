module.exports = (sequelize,DataTypes)=>{
    const Student = sequelize.define('student',{
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


    Student.associate = models => {
        Student.hasMany(models.teacher)
    }



    return Student;
}