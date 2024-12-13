import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import axios from 'axios';
import CreatePassenger from './CreatePassenger';
import AllPassengers from './AllPassengers';

jest.mock('axios');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the form correctly', () => {
  render(<CreatePassenger />);

  // Check for form fields
  expect(screen.getByLabelText(/Passenger Name:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Address:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone #:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Aircraft ID:/i)).toBeInTheDocument();

  // Check for buttons
  expect(screen.getByRole('button', { name: /Add Passenger/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Back/i })).toBeInTheDocument();
});


test('submits the form and shows success notification on successful API call', async () => {
  axios.post.mockResolvedValueOnce({});

  render(<CreatePassenger />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Passenger Name:/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Address:/i), { target: { value: '123 Main St' } });
  fireEvent.change(screen.getByLabelText(/Phone #:/i), { target: { value: '555-1234' } });
  fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByLabelText(/Aircraft ID:/i), { target: { value: '1001' } });

  // Submit the form
  const submitButton = screen.getByRole('button', { name: /Add Passenger/i });
  fireEvent.click(submitButton);

  // Assert success notification
  expect(await screen.findByText(/Passenger added successfully!/i)).toBeInTheDocument();

  // Assert form fields are cleared
  expect(screen.getByLabelText(/Passenger Name:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Address:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Phone #:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Email:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Aircraft ID:/i)).toHaveValue('');
});

test('shows error notification when API call fails', async () => {
  axios.post.mockRejectedValueOnce(new Error('API Error'));

  render(<CreatePassenger />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Passenger Name:/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Address:/i), { target: { value: '123 Main St' } });
  fireEvent.change(screen.getByLabelText(/Phone #:/i), { target: { value: '555-1234' } });
  fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByLabelText(/Aircraft ID:/i), { target: { value: '1001' } });

  // Submit the form
  const submitButton = screen.getByRole('button', { name: /Add Passenger/i });
  fireEvent.click(submitButton);

  // Assert error notification
  expect(await screen.findByText(/Failed to add Passenger./i)).toBeInTheDocument();

  // Assert form fields remain unchanged
  expect(screen.getByLabelText(/Passenger Name:/i)).toHaveValue('John Doe');
  expect(screen.getByLabelText(/Address:/i)).toHaveValue('123 Main St');
  expect(screen.getByLabelText(/Phone #:/i)).toHaveValue('555-1234');
  expect(screen.getByLabelText(/Email:/i)).toHaveValue('john.doe@example.com');
  expect(screen.getByLabelText(/Aircraft ID:/i)).toHaveValue('1001');
});

test('deletes a passenger and updates the list', async () => {
  const passengers = [
    {
      passengerID: 1,
      passengerName: 'John Doe',
      passengerAddress: '123 Main St',
      passengerPhone: '555-1234',
      passengerEmail: 'john.doe@example.com',
    },
    {
      passengerID: 2,
      passengerName: 'Jane Smith',
      passengerAddress: '456 Oak St',
      passengerPhone: '555-5678',
      passengerEmail: 'jane.smith@example.com',
    },
  ];

  const loadPassengers = jest.fn();

  axios.delete.mockResolvedValueOnce({});

  render(<AllPassengers passengers={passengers} loadPassengers={loadPassengers} />);

  // Delete the first passenger
  const deleteButton = screen.getAllByRole('button', { name: /Delete/i })[0];
  fireEvent.click(deleteButton);

  // Wait for the list to update
  await waitFor(() => {
    expect(loadPassengers).toHaveBeenCalled(); // Ensure loadPassengers was called
  });

  // Check that the deleted passenger is no longer in the list
  expect(screen.queryByText(/John Doe/i)).not.toBeInTheDocument();
  expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
});

test('fetches and displays a list of passengers on component mount', async () => {
  // Sample data returned by the mocked axios request
  const passengersData = [
    {
      passengerID: 1,
      passengerName: 'John Doe',
      passengerAddress: '123 Main St',
      passengerPhone: '555-1234',
      passengerEmail: 'john.doe@example.com',
    },
    {
      passengerID: 2,
      passengerName: 'Jane Smith',
      passengerAddress: '456 Oak St',
      passengerPhone: '555-5678',
      passengerEmail: 'jane.smith@example.com',
    },
  ];

  // Mock the axios GET request to return the passengers data
  axios.get.mockResolvedValueOnce({ data: passengersData });

  // Render the AllPassengers component
  render(<AllPassengers passengers={passengersData} loadPassengers={jest.fn()} />);

  // Wait for the data to be rendered (since the data comes asynchronously)
  await waitFor(() => {
    // Check that the passenger names are displayed
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();

    // Check if other details like address and phone number are displayed
    expect(screen.getByText(/123 Main St/i)).toBeInTheDocument();
    expect(screen.getByText(/555-1234/i)).toBeInTheDocument();
    expect(screen.getByText(/456 Oak St/i)).toBeInTheDocument();
    expect(screen.getByText(/555-5678/i)).toBeInTheDocument();
  });

  // Ensure that the axios GET request was made to the correct URL
  expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/getAllPassengers');
});
