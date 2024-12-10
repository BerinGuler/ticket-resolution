export default function handler(req, res) {
    if (req.method === 'POST') {
      const { ticketId, resolutionStatus } = req.body;
  
      // Gelen verileri işleyin (örnek: loglama yapın)
      console.log(`Ticket ID: ${ticketId}, Resolution Status: ${resolutionStatus}`);
  
      // Başarılı yanıt döndürün
      res.status(200).json({ message: 'Log successful', ticketId, resolutionStatus });
    } else {
      // Diğer HTTP metotları için hata
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  