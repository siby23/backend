

module.exports=(sequelize, DataTypes)=>{
    const Contact=sequelize.define('contact',{
        name:{
            type:DataTypes.STRING,
            allowsNull:false
        },
        location:{
            type:DataTypes.STRING,
            allowsNull:false
        },
        mobile:{
            type:DataTypes.STRING,
            allowsNull:false
        }
    })
    return Contact
}