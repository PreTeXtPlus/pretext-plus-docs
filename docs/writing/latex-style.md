---
sidebar_position: 3
---

# LaTeX-Style PreTeXt

LaTeX-style PreTeXt lets you write with LaTeX syntax that is converted to PreTeXt XML. It is a **subset** of LaTeX: constructs that carry meaning are supported, and purely presentational ones are dropped or mapped to the nearest semantic PreTeXt element.

The editor lints as you type. An unmatched `\begin`/`\end` is an error, an unknown environment is a warning, and an unknown macro is informational.

## Divisions

A division's source begins with a header macro naming the PreTeXt division, followed optionally by a `\label`, which becomes the division's `xml:id`:

```latex
\section{Limits}\label{sec-limits}

Text of the section...
```

The root division of a project uses the document macro instead:

```latex
\article{A Short Paper}\label{document}
\book{A Long Book}\label{document}
\slideshow{Some Slides}\label{document}
```

Supported division macros:

`\part` · `\chapter` · `\section` · `\subsection` · `\subsubsection` · `\paragraph` · `\subparagraph` · `\bibliography` · `\references`

The header macro name mirrors the PreTeXt element, so a division whose **Type** is set to `worksheet` in the Contents panel is written `\worksheet{...}`. Changing the type from the Contents panel rewrites the header for you.

:::tip[Don't write `\documentclass` or `\begin{document}`]
They are recognized (so lint stays quiet on pasted source) but they are not how a PreTeXt.Plus division is structured. The division header macro is.
:::

An environment style is also accepted for sections, with the title inside:

```latex
\begin{section}
\title{Limits}

Text of the section...
\end{section}
```

## Mathematics

Math is written in LaTeX exactly as you would expect.

| Form | Syntax | Converts to |
|---|---|---|
| Inline | `$x^2$` or `\(x^2\)` | `<m>` |
| Display | `\[ ... \]` | `<me>` / `<md>` |
| Numbered / aligned | `\begin{equation}`, `\begin{align}`, ... | `<men>` / `<md>` with `<mrow>` |

Inside math you may use any macro or environment [KaTeX supports](https://katex.org/docs/supported.html), plus `\systeme` and `\sysdelim`. Anything outside that set is flagged, because the PreTeXt math pipeline will not render it.

Math environments (`align`, `align*`, `gather`, `pmatrix`, `cases`, `array`, ...) are recognized as math, not as unknown environments.

## Block environments

Theorem-like and remark-like environments convert to the PreTeXt element of the same name. All of them accept an optional title:

```latex
\begin{theorem}[Pythagoras]\label{thm-pyth}
    In a right triangle, $a^2 + b^2 = c^2$.
\end{theorem}

\begin{proof}
    See any geometry text.
\end{proof}
```

Environments marked **statement** below have their body wrapped in a `<statement>` element automatically, and any `proof`, `hint`, `answer`, or `solution` nested inside is hoisted out to be a *sibling* of the statement — which is what PreTeXt requires.

| Environment | Statement | Shorthand aliases |
|---|---|---|
| `theorem` | ✓ | `thm`, `theo`, `theor`, `thmss`, `thrm` |
| `lemma` | ✓ | `lem`, `lma`, `lemm`, `lm` |
| `corollary` | ✓ | `cor`, `corr`, `coro`, `corol`, `corss` |
| `proposition` | ✓ | `prop`, `pro`, `prp`, `props` |
| `claim` | ✓ | `cla` |
| `fact` | ✓ | |
| `conjecture` | ✓ | `con`, `conj`, `conjec` |
| `axiom` | ✓ | `axm` |
| `principle` | ✓ | |
| `heuristic` | ✓ | |
| `hypothesis` | ✓ | `hyp` |
| `identity` | ✓ | `idnty` |
| `assumption` | ✓ | `assu`, `ass` |
| `algorithm` | ✓ | `algo`, `alg` |
| `definition` | ✓ | `def`, `defn`, `dfn`, `defi`, `defin`, `de` |
| `example` | ✓ | `exam`, `exa`, `eg`, `exmp`, `expl`, `exm` |
| `exercise` | ✓ | `exer`, `exers` |
| `problem` | ✓ | `prob`, `prb` |
| `question` | ✓ | `qu`, `ques`, `quest`, `qsn` |
| `task` | ✓ | |
| `proof` | | `pf`, `prf`, `demo` |
| `case` | | |
| `solution` | | `sol` |
| `hint` | | |
| `answer` | | `ans` |
| `remark` | | `rem`, `rmk`, `rema`, `bem`, `subrem` |
| `note` | | `notes` |
| `notation` | | `no`, `nota`, `ntn`, `nt`, `notn`, `notat` |
| `observation` | | `obs` |
| `warning` | | `warn`, `wrn` |
| `insight` | | |
| `convention` | | `conv` |
| `computation` | | `comp` |
| `construction` | | |
| `technology` | | `tech` |
| `data` | | |
| `aside` | | |
| `assemblage` | | |
| `biographical` | | |
| `historical` | | |
| `activity` | | |
| `exploration` | | |
| `investigation` | | |
| `project` | | |
| `abstract` | | `abs`, `abstr` |
| `acknowledgement` | | `ack` |

An alias behaves exactly like its canonical name; `\begin{thm}` and `\begin{theorem}` produce the same `<theorem>`. Completions only offer the canonical spelling.

## Lists

```latex
\begin{itemize}
    \item First
    \item Second
\end{itemize}

\begin{enumerate}
    \item First
    \item Second
\end{enumerate}
```

`itemize` converts to `<ul>`, `enumerate` to `<ol>`, and each `\item` to `<li>`.

## Figures, tables, and layout

| Environment | Converts to | Notes |
|---|---|---|
| `figure` | `<figure>` | Use `\caption{...}` for the caption |
| `table` | `<table>` | Use `\caption{...}` for the title |
| `tabular` | `<tabular>` | Takes the usual column specification |
| `sidebyside` | `<sidebyside>` | Contains `stack` environments |
| `stack`, `sbsgroup` | `<stack>`, `<sbsgroup>` | Side-by-side substructure |
| `list`, `listing` | `<list>`, `<listing>` | Named containers |
| `center`, `quote` | `<blockquote>` | |
| `poem` | `<poem>` | Lines split on `\\`, stanzas on blank lines |

Images are placed with `\includegraphics`, which converts to `<image>` with a `source` attribute:

```latex
\includegraphics[width=0.6\textwidth]{diagram.png}
```

For images **uploaded to the project**, use the asset include instead — see [Assets](#includes-and-assets) below.

## Verbatim and code

| Environment | Converts to |
|---|---|
| `code` | `<pre>` |
| `program` | `<program><input>` — optional `[language]` argument |
| `console` | `<console>` |
| `sage` | `<sage><input>` |
| `webwork` | WeBWorK problem container |

Content inside these is passed through literally and is not linted.

## Structural blocks

These behave like divisions but sit inside one. All take an optional title argument.

`exercises` · `exercisegroup` · `subexercises` · `worksheet` · `handout` · `reading-questions` · `solutions` · `introduction` · `conclusion` · `paragraphs` · `objectives` · `outcomes` · `preface` · `biography` · `dedication` · `glossary` · `biblio` · `gi`

## Exam-class environments

The `exam` document class list environments are supported:

```latex
\begin{questions}
    \question What is $2+2$?
    \begin{parts}
        \part Show your work.
    \end{parts}
\end{questions}
```

`questions` · `parts` · `subparts` · `subsubparts`, with `\question`, `\part`, `\subpart`, `\subsubpart`.

## Inline macros

### Semantic inline elements

| Macro | Converts to |
|---|---|
| `\term{...}` | `<term>` — a defined term |
| `\emph{...}` | `<em>` |
| `\textbf{...}` | `<alert>` |
| `\code{...}`, `\lstinline{...}` | `<c>` |
| `\q{...}`, `\sq{...}`, `\enquote{...}` | quotation elements |
| `\fn{...}`, `\footnote{...}` | `<fn>` |
| `\abbr{...}`, `\ac{...}`, `\acro{...}`, `\init{...}` | abbreviation / acronym / initialism |
| `\foreign{...}`, `\foreignlanguage{...}` | `<foreign>` |
| `\booktitle{...}`, `\pubtitle{...}`, `\articletitle{...}` | title elements |
| `\xmltag{...}`, `\xmlattr{...}`, `\taxon{...}`, `\kbd{...}`, `\icon{...}` | the matching PreTeXt element |
| `\insert{...}`, `\sout{...}`, `\stale{...}` | `<insert>`, `<delete>`, `<stale>` |
| `\fillin` | `<fillin>` — a blank to fill in |

### Links and references

| Macro | Meaning |
|---|---|
| `\label{id}` | Sets `xml:id` |
| `\ref{id}`, `\eqref{id}`, `\cref{id}`, `\Cref{id}` | Cross-reference |
| `\hyperref[id]{text}` | Internal link with custom text |
| `\href{url}{text}` | External link → `<url>` |
| `\url{...}` | External link |
| `\cite{...}`, `\index{...}` | Citation, index entry |

### Symbols and fixed text

`\latex` · `\LaTeX` · `\tex` · `\PreTeXt` · `\PreFigure` · `\WeBWorK` · `\XeLaTeX` · `\LuaTeX` · `\today` · `\eg` · `\ie` · `\etc` · `\etal` · `\circa` · `\ca` · `\viz` · `\nb` · `\ps` · `\vs` · `\AD` · `\BC` · `\AM` · `\PM` · `\timeofday` · `\mdash` · `\ndash` · `\nbsp` · `\ldots` · `\dots` · `\copyright` · `\registered` · `\trademark` · `\degree` · `\dagger` · `\ddagger` · `\P` · `\S`

### Presentational macros

`\textrm` `\textsf` `\texttt` `\textit` `\textsl` `\underline` `\mbox` `\vspace` `\hspace` `\phantom` `\makebox` `\centering` `\noindent`, and the font-switching commands `\bfseries` `\itshape` `\ttfamily` `\scshape` `\Large` `\small` … are accepted so that pasted LaTeX lints cleanly, but PreTeXt has no equivalent for most of them. They are dropped or mapped to the nearest semantic element (`\textcolor`, for instance, becomes `<em>`). Prefer the semantic macros above.

## Includes and assets

Modular includes use the `\plus` macro:

```latex
\plus{section}{sec-limits}
\plus{chapter}{ch-intro}
\plus{image}{fig-tangent}
```

The general form is `\plus[key=value,...]{type}{ref}`, which becomes `<plus:type ref="ref" key="value"/>`.

The optional argument is a comma-separated attribute list. Because a literal `%` starts a comment in LaTeX, a bare number on `width` or `margin` is read as a percentage:

```latex
\plus[width=50]{image}{fig-tangent}
```

produces `<plus:image ref="fig-tangent" width="50%"/>`. A bare key with no value becomes `key="yes"`.

Recognized types are the PreTeXt division names (`part`, `chapter`, `section`, `subsection`, `subsubsection`, `frontmatter`, `backmatter`, `appendix`, `preface`, `glossary`, `index`, `bibliography`, `references`, `exercises`, `solutions`, `worksheet`, `handout`, `reading-questions`, `paragraphs`, `introduction`, `conclusion`, `biography`, `dedication`) and the includable assets (`image`, `video`, `audio`, `interactive`, `program`, `listing`, `doenet`, `webwork`, `sageplot`, `asymptote`, `latex-image`).

## Custom macros

`\newcommand`, `\renewcommand`, and `\providecommand` are recognized, and macros you define in the document are not flagged as unknown.

Macros you want available **throughout the project** — and inside math — belong in the project preamble instead. See [Preamble and macros](/editor/preamble/).

## Comments

`%` starts a comment to end of line, as in LaTeX. Comments are dropped by the conversion, and no completions or diagnostics fire inside them.

## What is not supported

Anything outside the tables above. In particular:

- Arbitrary packages and their macros. `\usepackage` is parsed but does nothing.
- Presentation-level control over spacing, page breaks, and floats — PreTeXt decides layout per output format.
- TikZ and other picture environments written inline. Generated diagrams are handled as [assets](/editor/assets/).
- Text-mode macros not listed above; these are flagged as informational so you can spot them and rewrite semantically.

If something you need is missing, tell us at [feedback@pretext.plus](mailto:feedback@pretext.plus) — the supported set is expanding.
