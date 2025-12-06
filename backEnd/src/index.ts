import express from "express";
// import cors from "cors";

const app = express();
const port = 3000;

// app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    city: "New York",
    salary: 50000,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    city: "Los Angeles",
    salary: 60000,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    city: "Chicago",
    salary: 55000,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    city: "Houston",
    salary: 62000,
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    city: "Phoenix",
    salary: 58000,
  },
  {
    id: 6,
    name: "Sarah Brown",
    email: "sarah.brown@example.com",
    city: "Philadelphia",
    salary: 57000,
  },
  {
    id: 7,
    name: "Chris Lee",
    email: "chris.lee@example.com",
    city: "San Antonio",
    salary: 59000,
  },
  {
    id: 8,
    name: "Jessica Taylor",
    email: "jessica.taylor@example.com",
    city: "San Diego",
    salary: 61000,
  },
  {
    id: 9,
    name: "Daniel Anderson",
    email: "daniel.anderson@example.com",
    city: "Dallas",
    salary: 60000,
  },
  {
    id: 10,
    name: "Laura Thomas",
    email: "laura.thomas@example.com",
    city: "San Jose",
    salary: 62000,
  },
];


app.get("/users", (req, res) => {
  res.json(users);
});

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
