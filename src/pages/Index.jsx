import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Discover Africa</h1>
          <p className="mt-4 text-2xl">Explore the beauty and diversity of the African continent</p>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>About Africa</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center">
            <img src="/placeholder.svg" alt="African Culture" className="w-full md:w-1/2 rounded-lg shadow-lg" />
            <div className="mt-4 md:mt-0 md:ml-6">
              <p>Africa is a continent of immense diversity, rich culture, and breathtaking landscapes. From the vast savannas to the bustling cities, Africa offers a unique and unforgettable experience for every traveler.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Destinations Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Serengeti", "Victoria Falls", "Cape Town"].map((destination) => (
            <Card key={destination}>
              <img src="/placeholder.svg" alt={destination} className="w-full h-48 object-cover rounded-t-lg" />
              <CardContent>
                <h3 className="text-xl font-semibold">{destination}</h3>
                <p className="mt-2">A brief description of {destination}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Culture Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">African Culture</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {["Music", "Dance", "Art", "Festivals"].map((culture) => (
            <Card key={culture}>
              <img src="/placeholder.svg" alt={culture} className="w-full h-48 object-cover rounded-t-lg" />
              <CardContent>
                <h3 className="text-xl font-semibold">{culture}</h3>
                <p className="mt-2">A brief description of {culture}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message" />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>

      <Separator />

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Discover Africa. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;