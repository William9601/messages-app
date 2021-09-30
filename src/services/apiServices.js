const baseUrl = 'http://localhost:3000/messages';

export const addMessageApi = async (userName, content) => {
  const timestamp = Date.now();
  const message = { userName, content, timestamp };
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(message),
  });
  return res.json();
};

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
