import { useEffect, useState } from 'react';
import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } from '../services/api';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';

export default function EmployeeDashboard({ onLogout }) {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);

  async function load() {
    setEmployees(await fetchEmployees());
  }
  useEffect(() => { load(); }, []);

  async function handleAdd(emp) {
    await addEmployee(emp);
    load();
  }
  async function handleUpdate(id, emp) {
    await updateEmployee(id, emp);
    setEditing(null);
    load();
  }
  async function handleDelete(id) {
    if (window.confirm('Delete employee?')) {
      await deleteEmployee(id);
      load();
    }
  }

  return (
    <div className="dashboard-bg">
      <header className="dashboard-header">
        <div className="logo">Accentra HR</div>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </header>
      <main className="dashboard-main">
        <section className="employee-section">
          <h1>Employee Management</h1>
          <EmployeeForm onSubmit={editing ? emp => handleUpdate(editing.id, emp) : handleAdd}
                        onCancel={() => setEditing(null)}
                        initial={editing} />
          <EmployeeList items={employees} onEdit={setEditing} onDelete={handleDelete} />
        </section>
      </main>
    </div>
  );
}
