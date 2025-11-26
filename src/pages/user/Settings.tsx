import React from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Bell, Shield, Database, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Settings() {
  const navigate = useNavigate();

  // Mock settings data
  const [settings, setSettings] = React.useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    twoFactorAuth: false,
    language: "en",
    timezone: "Africa/Nairobi"
  });

  const handleSettingChange = (key: string, value: boolean | string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="h-8 w-8"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences</p>
        </div>
      </div>

      <Tabs defaultValue="notifications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Preferences
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Data
          </TabsTrigger>
        </TabsList>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure how you receive notifications and alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <div className="text-sm text-muted-foreground">
                    Receive important updates via email
                  </div>
                </div>
                <Switch
                  id="email-notifications"
                  checked={settings.emailNotifications}
                  onCheckedChange={(value) => handleSettingChange('emailNotifications', value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <div className="text-sm text-muted-foreground">
                    Get instant alerts on your device
                  </div>
                </div>
                <Switch
                  id="push-notifications"
                  checked={settings.pushNotifications}
                  onCheckedChange={(value) => handleSettingChange('pushNotifications', value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="weekly-reports">Weekly Reports</Label>
                  <div className="text-sm text-muted-foreground">
                    Receive weekly farm performance summaries
                  </div>
                </div>
                <Switch
                  id="weekly-reports"
                  checked={settings.weeklyReports}
                  onCheckedChange={(value) => handleSettingChange('weeklyReports', value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and privacy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <div className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </div>
                </div>
                <Switch
                  id="two-factor"
                  checked={settings.twoFactorAuth}
                  onCheckedChange={(value) => handleSettingChange('twoFactorAuth', value)}
                />
              </div>

              <div className="space-y-4">
                <Button variant="outline">Change Password</Button>
                <Button variant="outline" className="ml-4">
                  Manage Devices
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Account Preferences</CardTitle>
              <CardDescription>
                Customize your experience and regional settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select
                  value={settings.language}
                  onValueChange={(value) => handleSettingChange('language', value)}
                >
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="sw">Kiswahili</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select
                  value={settings.timezone}
                  onValueChange={(value) => handleSettingChange('timezone', value)}
                >
                  <SelectTrigger id="timezone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Africa/Nairobi">East Africa Time (Nairobi)</SelectItem>
                    <SelectItem value="UTC">UTC</SelectItem>
                    <SelectItem value="America/New_York">Eastern Time (New York)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data Tab */}
        <TabsContent value="data">
          <Card>
            <CardHeader>
              <CardTitle>Data Management</CardTitle>
              <CardDescription>
                Control your data and privacy settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Button variant="outline">Export My Data</Button>
                <div className="text-sm text-muted-foreground">
                  Download a copy of your personal data
                </div>
              </div>

              <div className="space-y-4">
                <Button variant="outline" className="text-red-600 hover:text-red-700">
                  Delete Account
                </Button>
                <div className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save Button */}
      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button onClick={() => {
          // Here you would typically save settings to your backend
          console.log('Settings saved:', settings);
          navigate(-1);
        }}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default Settings;