export default function EmployeeList({ items, onEdit, onDelete }) {
  if (!items.length) return <p className="no-employee">No employees added.</p>;

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(emp => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
            <td>{emp.phone}</td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(emp)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
