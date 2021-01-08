# [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

##HTML5 Semantic Skeleton

> A semantic element clearly describes its meaning to both the browser and the developer.

<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:20%">Tag</th>
<th>Description</th>
</tr>
<tr>
<td><a href="/tags/tag_article.asp">&lt;article&gt;</a></td>
<td>Defines independent, self-contained content</td>
</tr>
<tr>
<td><a href="/tags/tag_aside.asp">&lt;aside&gt;</a></td>
<td>Defines content aside from the page content</td>
</tr>
<tr>
<td><a href="/tags/tag_details.asp">&lt;details&gt;</a></td>
<td>Defines additional details that the user can view or hide</td>
</tr>
<tr>
<td><a href="/tags/tag_figcaption.asp">&lt;figcaption&gt;</a></td>
<td>Defines a caption for a &lt;figure&gt; element</td>
</tr>
<tr>
<td><a href="/tags/tag_figure.asp">&lt;figure&gt;</a></td>
<td>Specifies self-contained content, like illustrations, diagrams, photos, code 
listings, etc.</td>
</tr>
<tr>
<td><a href="/tags/tag_footer.asp">&lt;footer&gt;</a></td>
<td>Defines a footer for a document or section</td>
</tr>
<tr>
<td><a href="/tags/tag_header.asp">&lt;header&gt;</a></td>
<td>Specifies a header for a document or section</td>
</tr>
<tr>
<td><a href="/tags/tag_main.asp">&lt;main&gt;</a></td>
<td>Specifies the main content of a document</td>
</tr>
<tr>
<td><a href="/tags/tag_mark.asp">&lt;mark&gt;</a></td>
<td>Defines marked/highlighted text</td>
</tr>
<tr>
<td><a href="/tags/tag_nav.asp">&lt;nav&gt;</a></td>
<td>Defines navigation links</td>
</tr>
<tr>
<td><a href="/tags/tag_section.asp">&lt;section&gt;</a></td>
<td>Defines a section in a document</td>
</tr>
<tr>
<td><a href="/tags/tag_summary.asp">&lt;summary&gt;</a></td>
<td>Defines a visible heading for a &lt;details&gt; element</td>
</tr>
<tr>
<td><a href="/tags/tag_time.asp">&lt;time&gt;</a></td>
<td>Defines a date/time</td>
</tr>
</tbody></table>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>Semantic Skeleton</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>

    <section>
      <h1>WWF</h1>
      <p>
        The World Wide Fund for Nature (WWF) is an international organization
        working on issues regarding the conservation, research and restoration
        of the environment, formerly named the World Wildlife Fund. WWF was
        founded in 1961.
      </p>
    </section>

    <section>
      <h1>WWF's Panda symbol</h1>
      <p>
        The Panda has become the symbol of WWF. The well-known panda logo of WWF
        originated from a panda named Chi Chi that was transferred from the
        Beijing Zoo to the London Zoo in the same year of the establishment of
        WWF.
      </p>
    </section>
    <article>
      <h2>Google Chrome</h2>
      <p>
        Google Chrome is a web browser developed by Google, released in 2008.
        Chrome is the world's most popular web browser today!
      </p>
    </article>

    <article>
      <h2>Mozilla Firefox</h2>
      <p>
        Mozilla Firefox is an open-source web browser developed by Mozilla.
        Firefox has been the second most popular web browser since January,
        2018.
      </p>
    </article>

    <article>
      <h2>Microsoft Edge</h2>
      <p>
        Microsoft Edge is a web browser developed by Microsoft, released in
        2015. Microsoft Edge replaced Internet Explorer.
      </p>
    </article>
    <article>
      <header>
        <h1>What Does WWF Do?</h1>
        <p>WWF's mission:</p>
      </header>
      <p>
        WWF's mission is to stop the degradation of our planet's natural
        environment, and build a future in which humans live in harmony with
        nature.
      </p>
    </article>
    <p>
      My family and I visited The Epcot center this summer. The weather was
      nice, and Epcot was amazing! I had a great summer together with my family!
    </p>

    <aside>
      <h4>Epcot Center</h4>
      <p>
        Epcot is a theme park at Walt Disney World Resort featuring exciting
        attractions, international pavilions, award-winning fireworks and
        seasonal special events.
      </p>
    </aside>
    <figure>
      <img src="pic_trulli.jpg" alt="Trulli" />
      <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
    </figure>
    <footer>
      <p>Author: Hege Refsnes</p>
      <p><a href="mailto:hege@example.com">hege@example.com</a></p>
    </footer>
  </body>
</html>
```

```javascript

```
