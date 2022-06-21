export const useGetPlaceholders = () => {
  const placeholders = {
    firstName: {
      name: "First Name",
      max_length: 5,
      example: "Ben",
    },
    lastName: {
      name: "Last Name",
      max_length: 8,
      example: "Cohen",
    },
    country: {
      name: "Country",
      max_length: 7,
      example: "United States",
    },
    city: {
      name: "City",
      max_length: 9,
      example: "New-York",
    },
    email: {
      name: "Email",
      max_length: 18,
      example: "benc@commpeak.com",
    },
  };
  return placeholders;
};
