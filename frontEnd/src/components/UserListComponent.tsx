import type { UserType } from "../types/UserType";

interface UserListComponentProps {
  usersList: UserType[];
}

const UserListComponent = ({ usersList }: UserListComponentProps    ) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">City</th>
                    <th className="border px-4 py-2">Salary</th>
                </tr>
            </thead>
            <tbody>
                {usersList.map((user) => (
                    <tr key={user.id}>
                        <td className="border px-4 py-2">{user.name}</td>
                        <td className="border px-4 py-2">{user.email}</td>
                        <td className="border px-4 py-2">{user.city}</td>
                        <td className="border px-4 py-2">{user.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserListComponent
