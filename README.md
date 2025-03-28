# [bkoh509.github.io](https://bkoh509.github.io)

> 💡 If you want to use this template, please cite this repository ([bkoh509.github.io](https://bkoh509.github.io)).

## Biography

Hello! I am a research scientist (NLP/Data) at Samsung Research. Previously, I received Ph.D. in Computer Science at Yonsei University, <a href="http://icl.yonsei.ac.kr">Internet Computing Lab (ICL)</a>, advised by Prof. Kyong-Ho Lee. After completing my Ph.D., I worked as a postdoctoral researcher at Yonsei University with the same professor.

My research interest is highly related to <em><b>Human-like Artificial Intelligence</b></em>, including knowledge representation (e.g., knowledge graph embedding and graph embedding) and knowledge-based applications (e.g., Knowledge-enhanced NLP Applications, Information Retrieval & Recommendation). I have covered a wide range of data types (e.g., matrix/tensor, text, graph, time series) for various tasks (e.g., classification, prediction, retrieval, data generation).

---

## How can you use this template?

You can easily run and test this template locally using a Node.js HTTP server. First, make sure Node.js is installed on your machine. You can download it from the official Node.js website. Next, open your terminal and install the http-server package globally using the following command:

```bash
$ npm install -g http-server
```

After installation, navigate to your template's directory in the terminal and launch the HTTP server by running:

```bash
$ http-server -p 8080
```

Finally, open your web browser and visit http://localhost:8080 or http://XXX.XXX.XXX.XXX:8080 to access your website locally. Any changes you make will immediately reflect upon refreshing your browser.

If you wish to use a different port, simply replace 8080 with your preferred port number:

```bash
$ http-server -p YOUR_PORT
```

You're now ready to use and customize this template!


## TODO

- Filtering publications based on venue types
- Add document-augmented LLM for my research
- Add knowledge-grounded LLM
- Switch to Next.js application

## Credit

- Font Awesome: https://fontawesome.com/
- Favicon Generator: https://redketchup.io/favicon-generator
- Analytics: https://analytics.google.com/analytics/web/#/
- Scroll-to-top: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
- Snackbar/Toast: https://www.w3schools.com/howto/howto_js_snackbar.asp
- Journal Ranking:
    - Impact Factor: https://impactfactorforjournal.com/jcr-impact-factor-2022/
    - scimagojr: https://www.scimagojr.com/journalrank.php?area=1700&type=j

## Trouble Shooting

### Prevent automatically Growing Font Size (Especially in Safari)

This rule should be applied in order to prevent the text from growing.

```css
html, body {
    /* ⭐핵심⭐ */
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
}
```
