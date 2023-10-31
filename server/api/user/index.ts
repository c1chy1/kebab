import User from "~/server/models/user";

export default defineEventHandler(async (event) => {
    try {



        const [user, count] = await Promise.all([
            User.find()

                .limit(1),
            User.count(),
        ]);


        console.log(user)
        return {
            user,
            count,
        };
    } catch (error) {

        console.log(error)

    }
});
