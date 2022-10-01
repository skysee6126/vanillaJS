const images = ["7A190ABD-220C-4D76-83D9-277F29B9F4B2_1_105_c.jpeg", "53FDB851-B142-4511-831E-F240CE84BCB8_1_105_c.jpeg", "4083F8C8-DE29-49F9-985E-40D89C9DD7D7_1_105_c.jpeg", "227412EA-FEA7-444C-8B1A-361CF95E0429_1_105_c.jpeg"];

const randomImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);