"use client";

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, Spinner, Button } from 'reactstrap';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const fetchUsers = async () => {
  const response = await axios.get('/api/users');
  return response.data;
};

const UsersTable = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, error, isLoading, refetch } = useQuery(['users', page, pageSize], () =>
    fetchUsers({ page, pageSize })
  );

  const handleAddUser = () => {
    router.push('/user/create');
  };

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <div>Error fetching users</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>All Users</h2>
        <Button color="primary" onClick={handleAddUser}>Add User</Button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created At</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>{user.status ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between mt-3">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default UsersTable;