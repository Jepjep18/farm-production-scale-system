import React from 'react';

function ProductionOverview() {
  return (
    <div className="w-full h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Production Overview</h1>
          <p className="text-muted-foreground mt-1">
            Production data including Volume, AUV, TIRP, and TOM%
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
        <p className="font-bold">Production Overview is working!</p>
        <p>This page will contain production data like Volume, AUV, TIRP, TOM%</p>
      </div>

      {/* You can add your production stats cards here similar to Dashboard */}
    </div>
  );
}

export default ProductionOverview;