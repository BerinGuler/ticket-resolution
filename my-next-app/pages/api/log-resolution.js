export default function handler(req, res) {
    if (req.method === 'POST') {
      const { ticketId, resolutionStatus } = req.body;
  
      console.log(`Ticket ID: ${ticketId}, Resolution Status: ${resolutionStatus}`);
  
      res.status(200).json({ message: 'Log successful', ticketId, resolutionStatus });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  