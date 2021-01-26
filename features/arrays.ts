const carMakers = ['ford', 'toyota', 'chevy'];
// same as:
const carMakers2: string[] = [];

const dates = [new Date(), new Date()];
const dates2: Date[] = [];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake2: string[][] = [['f150'], ['corolla'], ['camaro']]; // can find by doing inferred type if needed

// Flexible Types
const importantDates = [new Date(), '2025-01-01']; // string | Date
const importantDates2: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('2030-01-01');
// importantDates.push(100); // error
