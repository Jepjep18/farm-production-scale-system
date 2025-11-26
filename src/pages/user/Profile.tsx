import React from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

function Profile() {
  const navigate = useNavigate();

  // Mock user data - replace with actual data from your backend
  const userData = {
    name: "Admin User",
    email: "admin@abfi.com",
    role: "Administrator",
    phone: "+1 (555) 123-4567",
    location: "Nairobi, Kenya",
    joinDate: "January 15, 2023",
    avatar: "https://github.com/shadcn.png",
    farm: "ABFI Main Farm",
    department: "Farm Management"
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
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Overview Card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={userData.avatar} />
                <AvatarFallback className="text-lg">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">{userData.name}</CardTitle>
            <CardDescription>{userData.email}</CardDescription>
            <Badge variant="secondary" className="mt-2">
              {userData.role}
            </Badge>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="w-full">Edit Profile</Button>
          </CardContent>
        </Card>

        {/* Details Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Your personal details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Full Name</p>
                  <p className="text-sm text-muted-foreground">{userData.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email Address</p>
                  <p className="text-sm text-muted-foreground">{userData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone Number</p>
                  <p className="text-sm text-muted-foreground">{userData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{userData.location}</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Farm Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium">Assigned Farm</p>
                  <p className="text-sm text-muted-foreground">{userData.farm}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Department</p>
                  <p className="text-sm text-muted-foreground">{userData.department}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Member Since</p>
                    <p className="text-sm text-muted-foreground">{userData.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Profile;