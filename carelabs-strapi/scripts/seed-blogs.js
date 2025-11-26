const fs = require('fs');

const API_URL = "https://accessible-comfort-314cd1c7f5.strapiapp.com/api/homes";

const TOKEN = "4fafb1b53f5b1563582417b5f8a988306e0487a563d5ac36ac55793487a3ebff9f6c2c55c5740ae8a4aae084c332efd75a4493a5639ed5913d08d1bffc0f43ebd48ad7c76dbed1dcd6323cdcdbeb36a6115fd4e680ce44104cf653f8309220c38cdfd53f2bab8c09c6f4a9b979903330ce702f5ea59f75772098837ab316d116";

async function seedHomepage() {
  const homepage = JSON.parse(
    fs.readFileSync("./scripts/homepage.json", "utf8")
  )[0];

  const body = {
    data: {
      description: homepage.description,
      heading: homepage.heading,

      btn1_text: homepage.btn1_text,
      btn1_link: homepage.btn1_link || "/",

      btn2_text: homepage.btn2_text,
      btn2_link: homepage.btn2_link || "/",

      title1: homepage.title1,
      title2: homepage.title2,
      title3: homepage.title3,

      background_video: homepage.background_video || null,

      stats:
        homepage.stats?.map((item) => ({
          number: item.number,
          label: item.label,
        })) || [],
    },
  };

  try {
    const res = await fetch(API_URL, {
      method: "PUT", // ✔ HOME PAGE is a single-type
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error("❌ Failed to update Home Page");
      console.error(JSON.stringify(result, null, 2));
    } else {
      console.log("✅ Home Page Updated Successfully");
      console.log(result);
    }
  } catch (err) {
    console.error("❌ Network Error:", err.message);
  }
}

seedHomepage();
