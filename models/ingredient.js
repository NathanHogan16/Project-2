module.exports = function(sequelize, DataTypes) {
    const Ingredient = seqelize.define(
        'Ingredient',
        {
            ingredient_name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {
                    len: [1]
                }
            }
        },
    );
    return Ingredient;
};