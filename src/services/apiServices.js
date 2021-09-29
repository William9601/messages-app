const baseUrl = 'http://localhost:3000/messages';

export const editMessageApi = async (userName, content, messageId) => {
  const timestamp = Date.now();
  const message = { userName, content, timestamp };
  const res = await fetch(`http://localhost:3000/messages/${messageId}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(message),
  });
  return res.json();
};

// export const getMessages = async () => {
//   const response = await fetch(baseUrl);
//   return await response.json();
// };

// export const addMessage = async (message) => {
//   const res = await fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(message),
//   });
//   return res.json();
// };

// const fetchMessages = async () => {
//   const res = await fetch(baseUrl);
//   const data = await res.json();
//   setMessages(data);
// };
