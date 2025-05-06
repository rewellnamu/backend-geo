// src/types/types.ts
export interface Animal {
    id: number;
    name: string;
    species: string;
    image_url: string;
    park_id: number;
  }

  export interface Park {
    id: number;
    name: string;
    location: string;
    description: string;
    image_url: string;
  }
  // src/types/booking.type.ts
export interface Booking {
  id: number;
  name: string;
  email: string;
  parkId: number;
  visitDate: string; // Or Date if you're parsing it
}

