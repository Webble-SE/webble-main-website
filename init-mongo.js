db.createUser(
    {
        user: 'yourUsername',
        password: 'password123',
        roles : [
            {
                role: 'readWrite'
            }
        ]
    }
)