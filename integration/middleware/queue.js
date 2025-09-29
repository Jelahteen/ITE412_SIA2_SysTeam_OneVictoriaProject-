// Simple in-memory queue using a JavaScript array
let messageQueue = [];

// Add message to the queue
function enqueue(message) {
  messageQueue.push(message);
  console.log(`Message added to queue:`, message);
}

// Remove message from the queue
function dequeue() {
  return messageQueue.shift();
}

// Get queue size
function size() {
  return messageQueue.length;
}

module.exports = { enqueue, dequeue, size };
