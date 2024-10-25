import React from 'react';
import { X } from 'lucide-react';

function NotificationsPanel({ onClose }) {
  const notifications = [
    { id: 1, message: 'New episode of your favorite show is now available!', time: '2 hours ago' },
    { id: 2, message: 'Don\'t miss out on the latest blockbuster movie!', time: '1 day ago' },
    { id: 3, message: 'Your subscription will renew in 3 days.', time: '2 days ago' },
  ];

  return (
    <div className="fixed inset-0 bg-zinc-900 bg-opacity-90 z-50 flex items-start justify-center pt-20">
      <div className="bg-zinc-800 p-8 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Notifications</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="bg-zinc-700 p-4 rounded">
              <p className="text-sm mb-2">{notification.message}</p>
              <p className="text-xs text-gray-400">{notification.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationsPanel;

