import { users } from './user/user.json'; // Assuming you have a users data file

export default function handler(req, res) {
  const { page = 1, pageSize = 10 } = req.query;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const paginatedUsers = users.slice(startIndex, endIndex);

  res.status(200).json({
    users: paginatedUsers,
    total: users.length,
    page: parseInt(page, 10),
    pageSize: parseInt(pageSize, 10),
  });
}