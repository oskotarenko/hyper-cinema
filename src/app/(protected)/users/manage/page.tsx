import { Metadata } from "next";
import { Suspense } from "react";

import { getAllUsers } from "@/actions/user/get-all-users";
import { Table, TableColumn } from "@/shared/ui/table";

import { LoadingComponent } from "../../_module/components/loading/LoadingComponent";
import { RoleGate } from "../../_module/components/roles-gate/RolesGate";

export const metadata: Metadata = {
  title: "Users | Hyper Cinema",
  robots: {
    index: false,
  },
};

export default async function ManageUsersPage() {
  const users = await getAllUsers();
  return (
    <Suspense fallback={<LoadingComponent />}>
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
    </Suspense>
  );
}
