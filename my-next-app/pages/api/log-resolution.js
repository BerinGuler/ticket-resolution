export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
  
    const { ticketId, resolutionStatus } = req.body;
  
    res.status(200).json({
      message: "Log successful",
      ticketId,
      resolutionStatus,
    });
  }
  