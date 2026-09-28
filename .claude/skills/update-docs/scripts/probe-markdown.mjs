// Run the Markdown-style converter on sample constructs, to check claims in
// docs/writing/markdown-style.md against what actually converts.
//
// Usage (from anywhere):  node probe-markdown.mjs
// Needs a checkout of PreTeXtBook/pretext-tools with `npm install` done. Point
// PRETEXT_TOOLS at it if it is not a sibling of this docs repo. First confirm the
// checkout's packages/remark-pretext/src matches the version pretext-plus pins:
//   git -C $PRETEXT_TOOLS diff --stat "@pretextbook/remark-pretext@<ver>" HEAD -- packages/remark-pretext/src
// Add samples whenever the docs make a new claim.
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const tools =
  process.env.PRETEXT_TOOLS ?? path.resolve(here, "../../../../../pretext-tools");
const { createJiti } = await import(
  pathToFileURL(path.join(tools, "node_modules/jiti/lib/jiti.mjs")).href
);
const jiti = createJiti(import.meta.url);
const { markdownToPretext } = await jiti.import(
  path.join(tools, "packages/remark-pretext/src/index.ts"),
);

const samples = {
  emphasis: "*em* _term_ **strong** `code` $x^2$",
  link: "Read [the guide](https://pretextbook.org) or <https://pretextbook.org>.",
  image: "See ![a cat](cat.png) here.",
  table: "| a | b |\n|---|---|\n| 1 | 2 |",
  strike: "Some ~~struck~~ text.",
  comment: "Before.\n\n<!-- a comment -->\n\nAfter.",
  thematicBreak: "One.\n\n---\n\nTwo.",
  hardBreak: "Line one  \nLine two",
  textDirective: "A :term[word] here.",
  headingId: "---\ndivision: section\ntitle: T\n---\n\n# Sub {#sub-id}\n\nText.",
  theorem: ":::theorem[Pythagoras]{#thm-p}\nRight.\n\n::::proof\nObvious.\n::::\n:::",
  indentTheorem: "Theorem[Pythagoras]{#thm-p}:\n    Right triangles.\n\n    Proof:\n        Obvious.",
  unknownDirective: ":::foo\nbody\n:::",
  displayMath: "$$\na &= b \\\\\n  &= c\n$$",
  slideshow: "---\ndivision: slideshow\nid: document\ntitle: Deck\n---\n\n# Part one\n\n## First slide\n\nHello.",
  slideshowFlat: "---\ndivision: slideshow\ntitle: Deck\n---\n\n## First slide\n\nHello.",
  includes: '::section{ref="sec-a" component="instructor"}\n\n::image{ref="fig" width="50%"}\n\n::snippet{ref="s1"}',
};

for (const [name, md] of Object.entries(samples)) {
  let out;
  try {
    out = markdownToPretext(md);
  } catch (e) {
    out = `THREW: ${e.message}`;
  }
  console.log(`===== ${name}\n${out}\n`);
}
