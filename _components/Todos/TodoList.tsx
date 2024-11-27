import { ObjectId } from 'mongodb'
import React from 'react'

type UserType = {
    _id: ObjectId;
    username: string;
    userpassword: string;
}

export default function TodoList({user}: {user: UserType}) {

  return (
    <div>Welcome {JSON.stringify(user, null, 2)}</div>
  )
}
