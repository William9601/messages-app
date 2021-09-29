const mockResponse = {
  messages: [
    {
      date: '14 January 2021',
      content:
        'You may think that all ice is the same, but some ice is too cold and should be warmed up. This will make it better ice. The ideal temperature will keep it from melting while still being a bit warmer.',
      userName: 'Sarah Lewis',
      userId: 123,
      parentId: null,
      id: 1,
    },
  ],
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
