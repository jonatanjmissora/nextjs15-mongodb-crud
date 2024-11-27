import RegisterForm from '../_components/RegisterForm'
import { getCollection } from '../lib/mongoConnect'

const getUsers = async () => {
  const collection = await getCollection("Prueba")
  const results = await collection
    .find({})
    .toArray()
  return results

}

export default async function page() {

  const users = await getUsers()
  console.log({users})

  return (
    <div className="h-full flex justify-center items-center">
        <RegisterForm />
    </div>
  )
}
