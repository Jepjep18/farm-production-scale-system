import React from 'react';

function Settings() {
  return (
    <div className="w-full h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">
            System configuration and settings
          </p>
        </div>
      </div>
      <p>System configuration and settings</p>
    </div>
  );
}

export default Settings;