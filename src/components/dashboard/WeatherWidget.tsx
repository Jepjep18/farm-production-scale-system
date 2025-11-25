// src/components/dashboard/WeatherWidget.tsx
import React from "react";
import { Cloud, Droplets, Wind, Sun } from "lucide-react";

function WeatherWidget() {
  return (
    <div className="bg-card rounded-lg p-6 border shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Weather Forecast</h2>
      
      {/* Current Weather */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-muted-foreground">Santa Barbara</p>
          <p className="text-4xl font-bold">28°C</p>
          <p className="text-sm text-muted-foreground mt-1">Partly Cloudy</p>
        </div>
        <Sun className="h-16 w-16 text-yellow-500" />
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Droplets className="h-5 w-5 text-blue-500" />
          <div>
            <p className="text-xs text-muted-foreground">Humidity</p>
            <p className="font-semibold">65%</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-xs text-muted-foreground">Wind Speed</p>
            <p className="font-semibold">12 km/h</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Cloud className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-xs text-muted-foreground">Rain Chance</p>
            <p className="font-semibold">20%</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Sun className="h-5 w-5 text-yellow-500" />
          <div>
            <p className="text-xs text-muted-foreground">UV Index</p>
            <p className="font-semibold">High</p>
          </div>
        </div>
      </div>

      {/* Weekly Forecast */}
      <div className="mt-6 pt-4 border-t">
        <p className="text-sm font-medium mb-3">5-Day Forecast</p>
        <div className="space-y-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
            <div key={day} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{day}</span>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4 text-yellow-500" />
                <span>27°-31°C</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;