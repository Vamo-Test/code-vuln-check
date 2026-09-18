// code-vuln-check — Instantly assess your code's security with AI-driven vulnerability analysis.
// Zero-dependency Worker that serves ONE self-contained HTML micro-product. The entire app
// (markup, styles, and logic) is authored by the agent and inlined below as a single document —
// no framework, no build step, no external requests.

const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Vuln Check</title>
    <style>
        :root {
            --bg-color-light: #f0f0f0;
            --bg-color-dark: #121212;
            --text-color-light: #000;
            --text-color-dark: #fff;
            --accent-color: #ff9800;
        }
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: var(--bg-color-light);
            color: var(--text-color-light);
            transition: background-color 0.3s, color 0.3s;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        body.dark-mode {
            background-color: var(--bg-color-dark);
            color: var(--text-color-dark);
        }
        .container {
            background-color: inherit;`;

export default {
  async fetch(): Promise<Response> {
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
};
