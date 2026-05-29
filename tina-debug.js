const https = require('https');

const clientID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH;
const token = process.env.TINA_TOKEN;

console.log('=== TINA DIAGNOSTIC SYSTEM ===');
console.log(`Target Branch: "${branch}"`);
console.log(`Client ID Present: ${clientID ? 'Yes' : 'No'}`);
console.log(`Token Present: ${token ? 'Yes' : 'No (Length: ' + (token?.length || 0) + ')'}`);

if (!clientID || !branch || !token) {
  console.error('❌ Missing required environment variables. Skipping API test.');
  process.exit(1);
}

const data = JSON.stringify({ query: '{ collections { name } }' });
const path = `/2.4/content/${clientID}/github/${branch}/graphql`;

const options = {
  hostname: 'content.tinajs.io',
  port: 443,
  path,
  method: 'POST',
  headers: {
    'X-API-KEY': token,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

console.log(`Sending diagnostic request to: https://content.tinajs.io${path}`);

const req = https.request(options, (res) => {
  console.log(`Response Status Code: ${res.statusCode}`);
  console.log('Response Headers:', JSON.stringify(res.headers, null, 2));

  let body = '';
  res.on('data', (chunk) => {
    body += chunk;
  });

  res.on('end', () => {
    console.log('Response Body Target:');
    console.log(body);

    if (res.statusCode === 200) {
      console.log('✅ Connection to TinaCloud verified successfully!');
      process.exit(0);
    }

    console.error(`❌ TinaCloud rejected the request with status ${res.statusCode}.`);
    if (res.statusCode === 403) {
      console.error('👉 Check: Does your TinaCloud token explicitly authorize the branch printed above?');
    }
    process.exit(1);
  });
});

req.on('error', (error) => {
  console.error('❌ Network Error executing request:', error);
  process.exit(1);
});

req.write(data);
req.end();