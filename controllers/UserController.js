const models = require ('../models');
const User = require ('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next)=>{
    try{
        const user = await models.User.findOne({where: {email: req.body.email}});
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    name: user.username,
                    email: user.email,

                }, 'config.secret',{
                    expiresIn: 86400 //24 horas
                });

                res.status(200).send({auth: true,tokenReturn: token, user: user})
            }else{
                res.status(401).json({
                    error: 'Error en usuario o contraseña'
                });
            }
        }else{
            res.status(404).json({
                error: 'Error en usuario o contraseña'

            });
        }
    } catch(error) {
        res.status(500).send({
            message: 'Error!!'
        });
        next(e);
    }
}