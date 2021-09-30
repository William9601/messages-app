import AddInput from '../AddInput';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import * as api from '../../../services/apiServices';

jest.mock('../../../services/apiServices');

describe('MessageModal', () => {
  it('button displays Update when edit is true', () => {
    render(<AddInput edit={true} />);
    expect(screen.getByRole('button', { name: /Update/i })).toBeEnabled();
  });

  it('should call function on form submit', async () => {
    api.addMessageApi.mockResolvedValue({
      messages: {
        userName: 'William',
        content: 'Hello',
        timestamp: 1632921823696,
        id: 2,
      },
    });
    render(<AddInput edit={false} />);
    const messageInput = screen.getByTestId('MessageInput');
    userEvent.type(messageInput, 'Hello');
    userEvent.click(screen.getByRole('button', { name: /Send/i }));
    await waitFor(() => {
      expect(api.addMessageApi).toHaveBeenCalledWith('Hello');
    });
  });
});
