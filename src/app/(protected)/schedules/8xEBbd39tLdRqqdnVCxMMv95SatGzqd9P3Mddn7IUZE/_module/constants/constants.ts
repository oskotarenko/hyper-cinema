import { GenerateSchedulesScheme, } from "../types/generate-shedules";

import type { HallsScheme } from "../types/hall-scheme";

export const HALL_QTY = 5;

export const hallsScheme: HallsScheme[] = [
  { rows: 7, seats: [10, 10, 10, 10, 10, 10, 13], },
  { rows: 7, seats: [10, 10, 10, 10, 10, 10, 13], },
  { rows: 6, seats: [10, 10, 10, 10, 10, 12], },
  { rows: 6, seats: [10, 10, 10, 10, 10, 12], },
  { rows: 5, seats: [9, 9, 9, 9, 10], },
];

export const generateSchedulesScheme: GenerateSchedulesScheme[][] = [
  // Monday
  [
    { startHour: 10, hall: 1, price: 115 },
    { startHour: 15, hall: 1, price: 125 },
    { startHour: 9, hall: 2, price: 160 },
    { startHour: 14, hall: 2, price: 150 },
    { startHour: 8, hall: 3, price: 175 },
    { startHour: 14, hall: 3, price: 110 },
    { startHour: 10, hall: 4, price: 195 },
    { startHour: 15, hall: 4, price: 105 },
    { startHour: 9, hall: 5, price: 145 },
    { startHour: 14, hall: 5, price: 130 },
  ],
  // Tuesday
  [
    { startHour: 10, hall: 5, price: 105 },
    { startHour: 15, hall: 5, price: 120 },
    { startHour: 9, hall: 4, price: 135 },
    { startHour: 14, hall: 4, price: 155 },
    { startHour: 8, hall: 3, price: 175 },
    { startHour: 14, hall: 3, price: 185 },
    { startHour: 10, hall: 2, price: 110 },
    { startHour: 15, hall: 2, price: 125 },
    { startHour: 9, hall: 1, price: 145 },
    { startHour: 14, hall: 1, price: 195 },
  ],
  // Wednesday
  [
    { startHour: 10, hall: 1, price: 175 },
    { startHour: 15, hall: 1, price: 155 },
    { startHour: 9, hall: 2, price: 145 },
    { startHour: 14, hall: 2, price: 115 },
    { startHour: 8, hall: 3, price: 105 },
    { startHour: 14, hall: 3, price: 185 },
    { startHour: 10, hall: 4, price: 195 },
    { startHour: 15, hall: 4, price: 120 },
    { startHour: 9, hall: 5, price: 160 },
    { startHour: 14, hall: 5, price: 130 },
  ],
  // Thursday
  [
    { startHour: 10, hall: 5, price: 165 },
    { startHour: 15, hall: 5, price: 175 },
    { startHour: 9, hall: 4, price: 200 },
    { startHour: 14, hall: 4, price: 110 },
    { startHour: 8, hall: 3, price: 185 },
    { startHour: 14, hall: 3, price: 130 },
    { startHour: 10, hall: 2, price: 140 },
    { startHour: 15, hall: 2, price: 195 },
    { startHour: 9, hall: 1, price: 170 },
    { startHour: 14, hall: 1, price: 125 },
  ],
  // Friday
  [
    { startHour: 10, hall: 1, price: 155 },
    { startHour: 15, hall: 1, price: 145 },
    { startHour: 9, hall: 2, price: 190 },
    { startHour: 14, hall: 2, price: 130 },
    { startHour: 8, hall: 3, price: 105 },
    { startHour: 14, hall: 3, price: 175 },
    { startHour: 10, hall: 4, price: 115 },
    { startHour: 15, hall: 4, price: 135 },
    { startHour: 9, hall: 5, price: 165 },
    { startHour: 14, hall: 5, price: 120 },
  ],
  // Saturday
  [
    { startHour: 10, hall: 5, price: 170 },
    { startHour: 15, hall: 5, price: 155 },
    { startHour: 20, hall: 5, price: 135 },
    { startHour: 9, hall: 4, price: 180 },
    { startHour: 14, hall: 4, price: 105 },
    { startHour: 19, hall: 4, price: 190 },
    { startHour: 8, hall: 3, price: 115 },
    { startHour: 13, hall: 3, price: 145 },
    { startHour: 18, hall: 3, price: 125 },
    { startHour: 10, hall: 2, price: 150 },
    { startHour: 15, hall: 2, price: 165 },
    { startHour: 20, hall: 2, price: 110 },
    { startHour: 9, hall: 1, price: 175 },
    { startHour: 14, hall: 1, price: 120 },
    { startHour: 19, hall: 1, price: 195 },
  ],
  // Sunday
  [
    { startHour: 10, hall: 1, price: 110 },
    { startHour: 15, hall: 1, price: 175 },
    { startHour: 20, hall: 1, price: 145 },
    { startHour: 9, hall: 2, price: 195 },
    { startHour: 14, hall: 2, price: 150 },
    { startHour: 19, hall: 2, price: 185 },
    { startHour: 8, hall: 3, price: 120 },
    { startHour: 13, hall: 3, price: 165 },
    { startHour: 18, hall: 3, price: 135 },
    { startHour: 10, hall: 4, price: 115 },
    { startHour: 15, hall: 4, price: 155 },
    { startHour: 20, hall: 4, price: 130 },
    { startHour: 9, hall: 5, price: 180 },
    { startHour: 14, hall: 5, price: 125 },
    { startHour: 19, hall: 5, price: 170 },
  ]
];
