import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const totalMessages = contacts.length;
  const latestContact = contacts[0] || null;
  const latestContactDate = latestContact?.created_at
    ? new Date(latestContact.created_at).toLocaleString()
    : "No messages yet";
  const todayCount = contacts.filter((contact) => {
    if (!contact.created_at) return false;
    const createdAt = new Date(contact.created_at);
    const now = new Date();
    return createdAt.toDateString() === now.toDateString();
  }).length;

  // Check if password was saved in session
  useEffect(() => {
    const savedPassword = sessionStorage.getItem("admin_password");
    if (savedPassword) {
      setPassword(savedPassword);
      verifyPassword(savedPassword);
    }
  }, []);

  const verifyPassword = async (pwd) => {
    setLoading(true);
    setError("");
    try {
      // Try to fetch contacts to verify password
      const response = await fetch("http://127.0.0.1:8000/contacts/", {
        headers: {
          "x-admin-password": pwd,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data);
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_password", pwd);
      } else {
        throw new Error("Invalid password");
      }
    } catch (err) {
      setError("Invalid password or server error");
      setIsAuthenticated(false);
      sessionStorage.removeItem("admin_password");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    verifyPassword(password);
  };

  const handleDownload = async () => {
    try {
      const endpoint = "http://127.0.0.1:8000/contacts/export-excel";

      const response = await fetch(endpoint, {
        headers: {
          "x-admin-password": password,
        },
      });

      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "contacts_export.xlsx";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      alert("Error downloading file");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-md w-full backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Admin Access
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter admin password"
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl transition-colors disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Login"}
            </button>
            <a
              href="/"
              className="block w-full text-center border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/40 font-medium py-3 rounded-xl transition-colors"
            >
              Back to Portfolio
            </a>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-sky-300 to-blue-500">
              Admin Dashboard
            </h1>
            <p className="text-gray-400 mt-2">Manage contact submissions</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg bg-green-600/20 text-green-400 border border-green-600/30 hover:bg-green-600/30 transition-colors text-sm font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
              </svg>
              Download Excel
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem("admin_password");
                setIsAuthenticated(false);
                setPassword("");
              }}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-10">
          <div className="md:col-span-3 md:row-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-300/80">
                  Portfolio
                </p>
                <h3 className="text-2xl font-semibold text-white mt-2">
                  Back to the public site
                </h3>
                <p className="text-sm text-gray-300 mt-2 max-w-sm">
                  Review the live experience, updates, and layout before
                  sharing the link.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
                /home
              </span>
            </div>
            <a
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              Go to Portfolio
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M10 7h7v7"
                />
              </svg>
            </a>
          </div>

          <div className="md:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Total Messages
            </p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <p className="text-4xl font-semibold text-white">
                {totalMessages}
              </p>
              <p className="text-xs text-gray-400">
                {todayCount} received today
              </p>
            </div>
          </div>

          <div className="md:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Latest Message
            </p>
            <div className="mt-3">
              <p className="text-lg font-semibold text-white">
                {latestContact ? latestContact.name : "No messages yet"}
              </p>
              <p className="text-sm text-blue-300">
                {latestContact ? latestContact.email : "—"}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {latestContactDate}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-4 text-sm font-medium text-gray-400">
                    Date
                  </th>
                  <th className="p-4 text-sm font-medium text-gray-400">
                    Name
                  </th>
                  <th className="p-4 text-sm font-medium text-gray-400">
                    Email
                  </th>
                  <th className="p-4 text-sm font-medium text-gray-400">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {contacts.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="p-8 text-center text-gray-500">
                      No messages found.
                    </td>
                  </tr>
                ) : (
                  contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4 text-sm text-gray-400 whitespace-nowrap">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-sm text-white font-medium">
                        {contact.name}
                      </td>
                      <td className="p-4 text-sm text-blue-300">
                        {contact.email}
                      </td>
                      <td
                        className="p-4 text-sm text-gray-300 max-w-md truncate"
                        title={contact.message}
                      >
                        {contact.message}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
