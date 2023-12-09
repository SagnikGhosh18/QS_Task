import { useState, useEffect } from "react";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch tickets
        const ticketsResponse = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const ticketsData = await ticketsResponse.json();
        setTickets(ticketsData.tickets);

        // Fetch users
        const usersResponse = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const usersData = await usersResponse.json();
        setUsers(usersData.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return [tickets, users];
};

const [tickets, users] = TicketList();

export {tickets, users};