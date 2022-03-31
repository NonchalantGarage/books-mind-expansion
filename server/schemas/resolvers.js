const { User } = require("../models");

// create signToken with JWT
const {signToken}= require('../utils/auth')



const resolvers = {
    Query: {
        user: async (parent, {_id}) =>{
            return User.findOne({_id});
        
        }
    },
    Mutation: {
        createUser: async (parent, args) =>{
            const user = User.create(args);
            const token = signToken(user);

            return {token, user};
        }
    }
    
}

module.exports = resolvers