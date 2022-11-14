import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  
  var v = JSON.stringify(_, getCircularReplacer(),4);


  await fetch("https://api.logflare.app/api/logs?api_key=9dvsKv4uoB1u&source=09148cf7-b8a4-4f3d-bb83-c20115287dca", {
            method: "POST",
            headers: {
              
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
           
            log_entry: 'XXXX',
            metadata: v
        })
        })

  res.status(200).json(['logflare.app/sources/public/tQD_ksJthWGvSiYh'])
}
