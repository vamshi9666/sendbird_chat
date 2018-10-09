import express from 'express';
import User from '../models/user';

const Router = express.Router();
Router.post('/login', (req, res, next) => {
    User.find({
        userName: req.body.username
    })
        .then(result => {
            console.log(result)
            if (result.length < 1) {
                return res.status(301).json({
                    message: "Error in authentication"
                })
            }
            bcrypt.compare(req.body.password, result[0].password, (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(201).json({
                        message: " error in authentication",
                        erroe: err
                    })
                }
                if (doc) {
                    const token = jwt.sign({
                        userName: req.body.username
                    }, process.env.JWT_KEY, {
                            expiresIn: "1h"
                        })

                    return res.status(200).json({
                        message: "user authenticated successfully !",
                        session: req.session,
                        token: token
                    })
                }
            })
        })
        .catch(err => {
            console.log(err)
            res.status(201).json({
                message: " error in authentication",
                error: err
            })
        })
})
Router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            console.log(`[Bcrypt] : Error in hashing password : ${err}`)
            res.status(301).json({
                message: " Error in creatting new user stage 1 ",
                data: err
            })
        }
        else {
            const user = new User({
                name: req.body.name,
                password: hash
            })
            user.save()
                .then(result => {
                    console.log(`Error in creating new user Stage 2 `)
                    res.status(202).json({
                        message: `Error in creating new user Stage 2 `,
                        data: result
                    })
                })
                .catch(err => {
                    console.log(`Error in creating new user Stage 3`)
                    res.status(302).json({
                        message: `Error in creating new user Stage 3`,
                        data: err
                    })
                })
        }
    })
})
module.exports = Router;
