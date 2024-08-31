const User = require("../models/user.model");
const Profile = require("../models/profile.model");
const sequelize = require("../config/db");
const { Op } = require("sequelize");
const Joi = require("joi");
const userValidateSchema = require("../middleware/userValidate.js");

exports.create = async (req, res) => {
  console.log("create api call");

  try {
    // const { error } = userValidateSchema.validate(req.body);
    // if (error) {
    //   return res.status(400).json({ message: error });
    // }
    // const user = await User.findAll({
    //   attributes: [
    //     "name",
    //     [sequelize.fn("COUNT", sequelize.col("name")), "name_count"],
    //   ],
    //   group: "name",
    // });

    // const { count, rows } = await User.findAndCountAll({
    //   where: { age: { [Op.not]: 10 } },
    //   // offset: 1,
    //   limit: 1,
    // });

    // const user = await User.max("age", { where: { age: { [Op.lt]: 200 } } });

    // const user = await User.bulkCreate({ name: req.body.name, age: 20 },{ name: "fdlkfb", age: 20 });

    // const user = await User.bulkCreate([{ name: 'abc123',age : 201 }, { name: 'name too long',age:20 }],
    //     {validate: true}
    // );

    // const user = await User.create(req.body);
    // const profile = await Profile.create({
    //   userId: user.id,
    //   userName: req.body.userName,
    // });

    const user = await User.findAll({
      where: {
        id: 3,
      },
      include: [
        {
          model: Profile,
          as: "profile",
        },
      ],
    });

    // const profile = await Profile.findAll({
    //   include: {
    //     model: User,
    //     where: {
    //       id: sequelize.col("profile.id"),
    //     },
    //     as : "new"
    //   },
    //   // [{ association: "user" }],
    //   //   // model: User,
    //   //   // as: "user",

    //   // attributes: ["userName"],
    // });
    // const user = await sequelize.query("SELECT * FROM Users", {
    //   // model: User,
    //   // mapToModel: false,
    //   // type: sequelize.QueryTypes.SELECT,
    // });

    // const user = await User.findAll()

    // const user = await User.findOne({
    //   attributes: ["name"],
    //   where: sequelize.where(
    //     sequelize.fn("char_length", sequelize.col("name")),
    //    {[Op.gt]: 5}
    //   ),
    // });
    // console.log("user== ", JSON.stringify(user, null, 2));
    return res.status(201).json({
      message: "User created successfully",
      user,
      // profile,
    });
  } catch (error) {
    console.log("error creating user", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
