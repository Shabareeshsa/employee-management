import { useState, useEffect } from 'react';

export default function EmployeeForm({ onSubmit, onCancel, initial }) {
  const [form, setForm] = useState({ name: '', age: '', phone: '' });

  useEffect(() => {
    setForm(initial ? { ...initial } : { name: '', age: '', phone: '' });
  }, [initial]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.age || !form.phone) return;
    onSubmit(form);
    setForm({ name: '', age: '', phone: '' });
  }

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <button type="submit">{initial ? 'Update' : 'Add'}</button>
      {initial && <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>}
    </form>
  );
}
