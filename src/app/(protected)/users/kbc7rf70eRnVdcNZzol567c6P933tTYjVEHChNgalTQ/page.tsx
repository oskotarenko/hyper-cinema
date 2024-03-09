import { getAllUsers } from "@/actions/user/get-all-users";
import { Table, TableColumn } from "@/shared/ui/table";

import { RoleGate } from "../../_module/components/roles-gate/RolesGate";

export default async function AdminUsersPage() {
  const users = await getAllUsers();
  return (
    <RoleGate allowedRole="ADMIN">
      <Table data={users} title="All Users" emptyMessage="No users found... Ha-ha, imposible?">
        <TableColumn title="Email">
          {users.map((user) => (
            <p key={user.id}>{user.email}</p>
          ))}
        </TableColumn>
        <TableColumn title="Name">
          {users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </TableColumn>
        <TableColumn title="Created At">
          {users.map((user) => (
            <p key={user.id}>{new Date(user.createdAt).toUTCString()}</p>
          ))}
        </TableColumn>
      </Table>
    </RoleGate>
  );
}
