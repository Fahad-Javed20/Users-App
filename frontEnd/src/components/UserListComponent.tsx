import type { UserType } from "../types/UserType";

interface UserListComponentProps {
  usersList: UserType[];
}

const UserListComponent = ({ usersList }: UserListComponentProps    ) => {
  return (
    <div >
        {/* want to decrese space between table celss */}
        <table className="w-full ">
            <thead className="bg-gray-200">
                <tr>
                    <th className="border px-4 py-1">Name</th>
                    <th className="border px-4 py-1">Email</th>
                    <th className="border px-4 py-1">City</th>
                    <th className="border px-4 py-1">Salary</th>
                </tr>
            </thead>
            <tbody>
                {usersList.map((user) => (
                    <tr key={user.id}>
                        <td className="border px-4 py-1">{user.name}</td>
                        <td className="border px-4 py-1">{user.email}</td>
                        <td className="border px-4 py-1">{user.city}</td>
                        <td className="border px-4 py-1">{user.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserListComponent
