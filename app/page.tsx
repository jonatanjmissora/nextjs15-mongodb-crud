import LoginForm from '../_components/Auth/LoginForm'
import RegisterForm from '../_components/Auth/RegisterForm'
import TodoList from '../_components/Todos/TodoList'
import getUserFromCookie from '../_lib/utils/getUser'

export default async function page() {

  const user = await getUserFromCookie()

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {
        user
        ? <TodoList user={user} />
        : <LoginForm />
      }
        
    </div>
  )
}
