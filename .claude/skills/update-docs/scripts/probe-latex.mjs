// Run the LaTeX-style converter on sample constructs, to check claims in
// docs/writing/latex-style.md against what actually converts.
//
// Usage (from anywhere):  node probe-latex.mjs
// Needs a checkout of PreTeXtBook/pretext-tools with `npm install` done. Point
// PRETEXT_TOOLS at it if it is not a sibling of this docs repo. First confirm:
//   git -C $PRETEXT_TOOLS diff --stat "@pretextbook/latex-pretext@<ver>" HEAD -- packages/latex-pretext/src
// and that node_modules/@pretextbook/unified-latex-to-pretext has the version
// pretext-plus's package-lock.json pins. Add samples whenever the docs make a new claim.
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const tools =
  process.env.PRETEXT_TOOLS ?? path.resolve(here, "../../../../../pretext-tools");
const { createJiti } = await import(
  pathToFileURL(path.join(tools, "node_modules/jiti/lib/jiti.mjs")).href
);
const jiti = createJiti(import.meta.url);
const { latexToPretext } = await jiti.import(
  path.join(tools, "packages/latex-pretext/src/index.ts"),
);

// Most samples sit inside a section, the way a real division's body does.
const S = (body) => `\\section{S}\\label{sec-s}\n\n${body}`;

const divisionMacros = [
  "part", "chapter", "section", "subsection", "subsubsection", "paragraph",
  "subparagraph", "paragraphs", "exercises", "readingquestions", "preface",
  "glossary", "solutions", "handout", "biography", "dedication", "worksheet",
  "references", "bibliography",
];

const samples = [
  ...divisionMacros.map((m) => [`header \\${m}`, `\\${m}{T}\\label{x-${m}}\n\nBody.`]),
  ["root article", "\\article{A Paper}\\label{document}\n\nHello."],
  ["environment-style section", "\\begin{section}\n\\title{Limits}\n\nText.\n\\end{section}"],
  ["theorem + proof", S("\\begin{theorem}[Pythagoras]\\label{thm-p}\nRight.\n\\begin{proof}\nObvious.\n\\end{proof}\n\\end{theorem}")],
  ["alias", S("\\begin{thm}\nX.\n\\end{thm}")],
  ["description list", S("\\begin{description}\n\\item[Apple] A fruit.\n\\end{description}")],
  ["semantic inline", S("\\term{t} \\emph{e} \\alert{a} \\code{c} \\q{q} \\fn{f} \\foreignlanguage{french}{bonjour} \\fillin \\verb|x_1|")],
  ["presentational", S("\\textbf{b} \\textit{i} \\texttt{tt} \\textsc{sc} \\underline{u} \\textcolor{red}{r} {\\large big} \\makebox{mk} \\vspace{1cm} x")],
  ["refs", S("\\ref{a} \\eqref{b} \\cref{c} \\hyperref[e]{text} \\cite{f} \\citep{g} \\index{h} \\href{https://x.org}{x}")],
  ["metadata", S("\\email{a@b.c}\\keywords{x}\\subjclass[2020]{05C}\nText.")],
  ["math", S("$x$ \\(y\\) \\[z\\] \\begin{equation}E\\end{equation} \\begin{align}a&=b\\\\&=c\\end{align} \\begin{gather*}d\\end{gather*}")],
  ["figure", S("\\begin{figure}\n\\includegraphics{a.png}\n\\caption{Cap}\n\\end{figure}")],
  ["listing", S("\\begin{listing}\n\\caption{L}\n\\begin{program}[python]\nx\n\\end{program}\n\\end{listing}")],
  ["list env", S("\\begin{list}\n\\caption{L}\nSome text.\n\\end{list}")],
  ["poem", S("\\begin{poem}[Ode]\nline one\\\\\nline two\n\\end{poem}")],
  ["exam", S("\\begin{questions}\n\\question What?\n\\begin{parts}\n\\part Show.\n\\end{parts}\n\\end{questions}")],
  ["frame", "\\slideshow{Deck}\\label{document}\n\n\\begin{frame}{First}{Sub}\nHi.\n\\end{frame}"],
  ["plus includes", S("\\plus[width=50]{image}{fig}\n\\plus{snippet}{s1}\n\\plus[component=instructor]{section}{sec-a}\n\\plus[wide]{image}{fig}")],
  ["newcommand in body", S("\\newcommand{\\R}{\\mathbb{R}}\nLet $x\\in\\R$.")],
  ["comment", S("Keep % drop me\nthis.")],
];

for (const [name, tex] of samples) {
  let out;
  try {
    out = latexToPretext(tex);
  } catch (e) {
    out = `THREW: ${e.message}`;
  }
  console.log(`===== ${name}\n${String(out).trim()}\n`);
}
